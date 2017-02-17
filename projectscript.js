$(document).ready( function() {
document.getElementById("container").innerHTML ="";
for (var i = 0; i <5 ; i++) {
	
var box=document.createElement("div")
box.className="projectbox"
document.getElementById("container").appendChild(box)
var projectimage=document.createElement("img")
projectimage.src="https://farm3.staticflickr.com/2510/32777057931_d96656a03d_m.jpg"
projectimage.className="projectimage"
box.appendChild(projectimage)

var projecttext=document.createElement("div")
projecttext.className="projecttext"
box.appendChild(projecttext)
var span=document.createElement("span")
span.innerHTML="Hello world"
projecttext.appendChild(span)

}
})

