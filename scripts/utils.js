// -*- mode: javascript; js-indent-offset: 2; -*-

if (typeof bd=="undefined") {
  bd={};
}
bd.util = {};

bd.util.ajaxPost = function(url,params,callback, callbackError){
	var http = new XMLHttpRequest();
	//var url = "get_data.php";
	//var params = "lorem=ipsum&name=binny";
	http.open("POST", url, true);
	
	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.setRequestHeader("Content-length", params.length);
	http.setRequestHeader("Connection", "close");
	
	http.onreadystatechange = function() {//Call a function when the state changes.
		if(http.readyState == 4 && http.status == 200) {
			callback(http.response);
		} else if (http.readyState == 4 && http.status != 200) {
      if (callbackError) {
        callbackError(http.response);
      }
    }
	}
	http.send(params);
};

bd.util.ajaxGet = function(url, callback, callbackError){
  var xmlhttp;
  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      callback(xmlhttp.responseText);
    } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
      if(callbackError) {
        callbackError(xmlhttp.responseText);
      }
    }
  }

  xmlhttp.open("GET",url,true);
  xmlhttp.send();

};

bd.util.getURLParamValue = function(name){

  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) {
    return "";
  } else {
    return results[1];
  }
};

(function() {
  if (window.location.search != "") {
    var match = /[?&]locale=([^?&]*)/.exec(window.location.search);
    if (match) {
      var target = match[1].toLowerCase();
      var parts = window.location.pathname.split('.');
      if (parts.length == 2) {
        if (target.indexOf('en') == 0) {
          // Already at the English version
          return;
        }
        parts.splice(1, 0, target);
      } else if (parts.length == 3) {
        if (parts[1] == target) {
          // Already here
          return;
        } else if (target.indexOf('en') == 0) {
          // English doesn't have a language tag in the name
          parts.splice(1, 1);
        } else {
          parts[1] = match[1].toLowerCase();
        }
      } else {
        return;
      }
      var newpath = parts.join('.');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          window.location.pathname = newpath;
        }
      };
      xhr.open('HEAD', newpath);
      xhr.send();
    }
  }
})();
