$(document).ready( function() {
	$(".open").click(function(e) {
		$(".internal").load("howtos/" + $(this).attr("rel"));
    $(".back").attr("style", "display:block;");
    $(".plus").attr("class", "display:block;");
  });
  
  $(".panel").on('shown.bs.collapse', function(){
    $(this).find(".plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
  });

  $(".panel").on('hidden.bs.collapse', function(){
    $(this).find(".plus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
  });
  
 $(".back").click(function(e) {
   $(".internal").load("howtos/howtos.html");
   $(".back").attr("style", "display:none;");
 });

// Add tutorial video pop-out
window.getTutorialVideo = function(tutorialId) {
  window.parent.postMessage({type:"video", youtubeId:tutorialId}, '*');
}

  // Add image enlargement
  var allTutPics = document.getElementsByClassName('enlargeImage');
  for (var i = allTutPics.length - 1; i >= 0; i--) {
    var picHeight = allTutPics[i].height;
    var picWidth = document.getElementsByClassName("enlargeImage").width;
    var pwidth = allTutPics[i].width;
    if (pwidth == 0) {
     $(allTutPics[i]).width("100%");
       pwidth = 250;
     }

     var newDiv = document.createElement("div");
     newDiv.className = "tutorialDiv";
     // newDiv.style.width = pwidth;

     var tutImg = document.createElement("img");
     tutImg.src = allTutPics[i].src;
     // tutImg.style.cssText = allTutPics[i].style.cssText;
     // tutImg.style.width = pwidth + "px";
     tutImg.className = "enlargeImage";
     newDiv.appendChild(tutImg);

     var zoom = document.createElement("img");
     zoom.src = "../images/zoom.png";
     zoom.className = "zoom";
     // zoom.css({top: '200px', left: '200px', position:'absolute'});
     newDiv.appendChild(zoom);

     $(newDiv).insertBefore(allTutPics[i]);
     $(newDiv).next().remove();
   }

  $(".enlargeImage").click(function(imageId){
    window.parent.postMessage({type:"img", imageId:$(this).attr("src")}, '*');
  });

  $(".zoom").click(function(imageId){
    window.parent.postMessage({type:"img", imageId:$(this).prev(".enlargeImage").attr("src")}, '*');
  });

   var addImages = function () {
    var allIcons = document.getElementsByClassName('icon');
    for (var i = 0;i<allIcons.length;i++) {
      var iconImg = document.createElement('img');
      $(iconImg).addClass('iconImg')
      iconImg.src = "../../images/images/" + $(allIcons[i]).attr('alt') + '.png';
      allIcons[i].appendChild(iconImg);
    }
  }
  addImages();


});
