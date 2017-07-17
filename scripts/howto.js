$(document).ready( function() {
	$(".open").click(function(e) {
		$(".internal").load("howtos/" + $(this).attr("rel"));
    $(".back").attr("style", "display:block;");
    $(".plus").attr("class", "display:block;");
  });
  // if ($(".panel-text").attr("aria-expanded")) {
  //     alert("h");
  //   // $(".plus").addClass("glyphicon-minus").removeClass("glyphicon-plus");
  // // }
  // $(".panel-text").click(function(e){
  //   $(".plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
  // });

  // how to do this
  // if ((".panel").attr("aria-expanded") == true) {
  //   $(".plus").addClass("glyphicon-minus").removeClass("glyphicon-plus");
  // }
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
});
