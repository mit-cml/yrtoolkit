$(document).ready( function() {
  //var galleryAppIds = [{id:"6370796237488128",name:"Tutorial1"},{id:"4861112582144000",name:"chat"}];

  //everything below requires a url

  var url = bd.util.getURLParamValue("url");
  if(!url) {
    return;
  }
  
  $("button.shareApp").click(function(e) {
    console.log("app is shared");
    //link validation
    var projectUrl = document.getElementById("appLink").value;
    if(projectUrl.startsWith("ai2.appinventor.mit.edu/?galleryId=")) {
      var appGalleryId = projectUrl.substr("ai2.appinventor.mit.edu/?galleryId=".length);
      var appName = document.getElementById("appName").value;
      var appUsername = document.getElementById("appUsername").value;
      document.getElementById("shareLinkContainer").style.display = "none";
      document.getElementById("shareLinkError").style.display = "none";
      document.getElementById("shareCompleted").style.display = "block";
      bd.util.ajaxPost(url + "submitProject/1/" + appGalleryId + "/","appName=" + appName + "&username=" + appUsername ,function(response){console.log(response)})
    } else {
      document.getElementById("shareLinkError").style.display = "block";
    }

    if(e && e.stopPropagation){
      e.stopPropagation();
    }
    return false;
  });
  
  bd.util.ajaxGet(url + "getTutorialProjects/1/",function(response){
    //console.log(response)
    galleryAppIds = JSON.parse(response);
    document.getElementById("container").innerHTML ="";
    for (var i = 0; i <galleryAppIds.length ; i++) {

      var boxLinkContainer = document.createElement("a");
      boxLinkContainer.href="http://ai2.appinventor.mit.edu/?locale=en&galleryId=" + + galleryAppIds[i].id;
      boxLinkContainer.target = "_blank";

      var box=document.createElement("div")
      box.className="projectbox"
    
      boxLinkContainer.appendChild(box)
      document.getElementById("container").appendChild(boxLinkContainer)
      var projectimage=document.createElement("img")
      projectimage.src="http://storage.googleapis.com/mitai2gallery/gallery/apps/" + galleryAppIds[i].id + "/image"
      projectimage.className="projectimage"
      box.appendChild(projectimage)

      var projecttext=document.createElement("div")
      projecttext.className="projecttext"
      box.appendChild(projecttext)
      var span=document.createElement("span")
      span.innerHTML= galleryAppIds[i].name
      projecttext.appendChild(span)

      var projectUsername=document.createElement("div")
      projectUsername.className="projectUsername"
      box.appendChild(projectUsername)
      var span=document.createElement("span")
      span.innerHTML= "by: " + galleryAppIds[i].username;
      projectUsername.appendChild(span)

    }

  })

})

