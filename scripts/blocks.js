$(document).ready( function() {

	// $(".panel").on('shown.bs.collapse', function(){
	// 	alert("hi");
	// 	// $(this).find(".plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	// });

	// $(".panel").on('hidden.bs.collapse', function(){
	// 	// $(this).find(".plus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
	// });
	var thisId;
	$(".builtBlock").click(function(e){
		var thisId = $(this).attr("id");
	});

	$(".builtBlock").on('shown.bs.collapse', function(){
		console.log($(this));
		$(".builtBlock").html("");
		var thisId = $(this).attr("id");
		console.log($(this).attr("id"));
		// if ($(".builtBlock").attr("id") != tempId) {
		// 	console.log($(".builtBlock").attr("id"));
		// 		$(".builtBlock").collapse("hide");
		// 	}
		var blockArray = Blockly.Drawer.createBlockInfoArray();

		$.each(blockArray, function(category, blocks){
			if (category == thisId){

				$.each(blocks, function(id, key){
					// Creates object to put block in
					console.log(id + " " + key);
					var blockDiv = document.createElement('div');
					$(blockDiv).attr('id', 'blocklyDiv');
					$(blockDiv).css('height','150px');
					$(blockDiv).css('width','150px');
					console.log(thisId);
					$("#" + thisId).append(blockDiv);
					var workspace = Blockly.inject('blocklyDiv');

					var blockObject = bd.toolbox.ctr.blockInfoToBlockObject(key);
					var blockXml = bd.toolbox.ctr.blockObjectToXML(blockObject, false);
					var block = Blockly.Xml.domToBlock(blockXml, workspace);
					block.setEditable(false);
					block.setMovable(false);
					block.moveBy(10, 0);
				});
			}
		});
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
