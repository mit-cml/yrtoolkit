$(document).ready( function() {

	$(".built").click(function(e){
		$("#control").load("blocks/built-in/control.html");
	});

	// $(".panel").on('shown.bs.collapse', function(){
	// 	alert("hi");
	// 	// $(this).find(".plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	// });

	// $(".panel").on('hidden.bs.collapse', function(){
	// 	// $(this).find(".plus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
	// });

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
			// $("."+tempId+">.palette").html("");	
			// console.log(tempId);
			// var all = this.getElementsByClassName("palette");
			// console.log(all);
			$.each(categories[tempId]["componentName"], function(i, field){
				var listItem = document.createElement('li');
				$(listItem).addClass("list-group-item");
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
				
				$(listItem).append($(link));
				$(listItem).append($(newDiv));
				$("#"+tempId).next(".component").get()[0].getElementsByClassName("palette")[0].append(listItem);
			});			
			
			$(".one").click(function(e){
				var subId = $(this).attr("id");
				if ($(".cat").attr("id") != subId) {
					$(".cat").collapse("hide");
				}
				$(".block").html(""); // or should i get the specific one?
				
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
					$(setDiv).css('height','200px');
					$(setDiv).css('width','200px'); // use css tag
					var xml = document.createElement('xml');
					$(xml).attr('id', 'toolbox');
					$(xml).css('display','none');

					var block = document.createElement('block');
					$(block).attr('type', "controls_if");
					$(xml).append($(block));
					var block2 = document.createElement('block');
					$(block2).attr('type', "controls_repeat_ext");
					$(xml).append($(block2));

					$(indvBlock).append($(setDiv));
					$(indvBlock).append($(xml));

					// $(description).append(thing["description"])
					// $(blockItem).append(description);
					$("#"+subId).next(".collapse").get()[0].getElementsByClassName("block")[0].append(blockItem);
				});
				var workspace = Blockly.inject('blocklyDiv',
					{toolbox: document.getElementById('toolbox')});
			});
		});
	});
});
