if (typeof bd === "undefined") {
    bd = {};
}
bd.util = {};

bd.util.ajaxPost = function (url, params, callback, callbackError) {
    var http = new XMLHttpRequest();
    //var url = "get_data.php";
    //var params = "lorem=ipsum&name=binny";
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState === 4 && http.status === 200) {
            callback(http.response);
        } else if (http.readyState === 4 && http.status !== 200) {
            if (callbackError) {
                callbackError(http.response);
            }
        }
    };
    http.send(params);
};

bd.util.ajaxGet = function (url, callback, callbackError) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.responseText);
        } else if (xmlhttp.readyState === 4 && xmlhttp.status !== 200) {
            if (callbackError) {
                callbackError(xmlhttp.responseText);
            }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

bd.util.getURLParamValue = function (name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) {
        return "";
    } else {
        return results[1];
    }
};
