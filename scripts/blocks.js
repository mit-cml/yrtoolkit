$(document).ready( function() {

	$(".builtBlock").click(function(e){
		var thisId = $(this).attr("id");
	});

	$(".builtBlock").on('shown.bs.collapse', function(e){
		if (!($(e.target).hasClass("imgData"))) {
			$(".builtBlock").html("");
			var thisId = $(this).attr("id"); // do i need this in addition to the click fxn?

			if (thisId == "cat_Variables"){
				var varImg = document.createElement('img');
				$(varImg).attr('src', 'images/otherVar.png')
				$("#" + thisId).append(varImg);
			}

			if (thisId == "cat_Procedures"){
				var procImg = document.createElement('img');
				$(procImg).attr('src', 'images/proc1.png')
				$("#" + thisId).append(procImg);
			}

			var blockArray = Blockly.Drawer.createBlockInfoArray();
			var blockDiv = document.createElement('div');
			$(blockDiv).attr('id', 'blocklyDiv');
			$(blockDiv).css('height','0px');
			$(blockDiv).css('width','150px');
			$("#" + thisId).append(blockDiv);
			var workspace = Blockly.inject('blocklyDiv');

			$.each(blockArray, function(category, blocks){
				if (category == thisId){
					$.each(blocks, function(id, key){
					// Creates object to put block in

					var blockObject = bd.toolbox.ctr.blockInfoToBlockObject(key);
					var blockXml = bd.toolbox.ctr.blockObjectToXML(blockObject, false);
					var block = Blockly.Xml.domToBlock(blockXml, workspace);
					block.setEditable(false);
					block.setMovable(false);
					block.moveBy(10, 0);
					var imgData = document.createElement('div');
					$(imgData).addClass("collapse imgData");
					$(imgData).attr('id', id);
					$(imgData).html(block.tooltip);

					var scaleFactor = 0.73;
					//Any modifications are executed on a deep copy of the element
					var cp = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);
					cp.removeAttribute("width");
					cp.removeAttribute("height");
					cp.removeAttribute("transform");

					//It is important to create this element in the SVG namespace rather than the XHTML namespace
					var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
					//I've manually pasted codethemicrobit.com's CSS for blocks in here, but that can be removed as necessary
					styleElem.textContent = Blockly.Css.CONTENT.join('');
					cp.insertBefore(styleElem, cp.firstChild);

					//Creates a complete SVG document with the correct bounds (it is necessary to get the viewbox right, in the case of negative offsets)
					var bbox = Blockly.mainWorkspace.svgBlockCanvas_.getBBox();
					var xml = new XMLSerializer().serializeToString(cp);

					xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+(bbox.width*scaleFactor)+'" height="'+(bbox.height*scaleFactor)+'" viewBox="' + bbox.x + ' ' + bbox.y + ' '  + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="none"></rect>'+xml+'</svg>';
					//If you just want the SVG then do console.log(xml)
					//Otherwise we render as an image and export to PNG
					var svgBase64 = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(xml)));
					var img = document.createElement('img');
					img.src = svgBase64;
					$(img).addClass('imgCollapse');
					$(img).attr('data-toggle', 'collapse');
					$(img).attr('href', '#' + id);
					$("#" + thisId).append(img);
					$("#" + thisId).append(imgData);
					$("#" + thisId).append('<br/>')		

					workspace.clear();
				});				
				}
			});
		}
	});

	$.getJSON("scripts/files/simple_components.json", function(result){
		var categories = {};
		
		$.each(result, function(i, field){		
			if (categories[field.categoryString] != null){
				categories[field.categoryString]["componentName"].push(field.name);
			} else {
				var j = {};
				var l = [];
				l.push(field.name);
				j["componentName"] = l;
				categories[field.categoryString] = j;
			}	

		});
		var components = {};
		$.each(result, function(i, field){
			components[field.name] = field;
		});

		$(".components").click(function(e){
			
			var tempId = $(this).attr("id");
			if ($(".component").attr("id") != tempId) {
				$(".component").collapse("hide");
			}
			$(".palette").html("");
			$.each(categories[tempId]["componentName"], function(i, field){
				var listItem = document.createElement('li');
				$(listItem).addClass("list-group-item");

				// var img = document.createElement('img');
				// console.log(field['iconName']);
				// $(img).attr('src', ("images/" + field['iconName']));

				var link = document.createElement('a');
				$(link).attr('data-toggle', 'collapse');
				$(link).attr('data-target', ("#" + field + "3"));
				$(link).addClass('one');
				$(link).attr('id', field);
				$(link).append(field);

				var newDiv = document.createElement('div');
				$(newDiv).addClass('collapse cat');
				$(newDiv).attr('id', (field + "3"));

				var newList = document.createElement('ul');
				$(newList).addClass('list-group block');
				$(newDiv).append(newList);
				
				// $(listItem).append($(img));
				$(listItem).append($(link));
				$(listItem).append($(newDiv));
				$("#"+tempId).next(".component").get()[0].getElementsByClassName("palette")[0].append(listItem);
			});			
			
			$(".one").click(function(e){
				var subId = $(this).attr("id");

				if ($(".cat").attr("id") != subId) {
					$(".cat").collapse("hide");
				}
				$(".block").html("");
				
				var allBlocks = [];

				$.each(components[subId]["events"], function(i, thing){
					if (thing['deprecated'] == 'false') {
						allBlocks.push(thing['name']);
					}
				});
				$.each(components[subId]["methods"], function(i, thing){
					if (thing['deprecated'] == 'false') {
						allBlocks.push(thing['name']);
					}
				});
				var desBlocks = [];
				$.each(components[subId]["properties"], function(i, thing){
					desBlocks.push(thing['name']);
				});
				$.each(components[subId]["blockProperties"], function(i, thing){
					if (thing['deprecated'] == 'false') {
						desBlocks.push(thing['name']);
					}
				});
				desBlocks.sort();

				var newBlocks = $.merge(allBlocks, desBlocks);
				$.each(allBlocks, function(i, thing){
					var blockItem = document.createElement('li');
					$(blockItem).addClass('list-group-item');
					$(blockItem).append(thing);
					var description = document.createElement('p');

					var indvBlock = document.createElement('div');
					var setDiv = document.createElement('div');
					$(setDiv).attr('id', 'blocklyDiv');
					$(setDiv).css('height','100px');
					$(setDiv).css('width','100px');

					$(indvBlock).append($(setDiv));
					// $(description).append(thing["description"])
					// $(blockItem).append(description);
					$("#"+subId).next(".collapse").get()[0].getElementsByClassName("block")[0].append(indvBlock);

					var workspace = Blockly.inject('blocklyDiv');
					var xml = Blockly.Xml.textToDom('<block xmlns="http://www.w3.org/1999/xhtml" type="color_black" id="[p/,6KQYrn$+rw=A82.f"></block>');
					Blockly.Xml.domToBlock(xml, workspace);
				});
				
  				// var block = workspace.getAllBlocks()[0];
  				// block.moveBy(10, 10);
  			});
		});
	});
});
