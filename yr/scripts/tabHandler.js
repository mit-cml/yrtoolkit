$(document).ready( function() {

  var openHowToTab = function() {
    document.getElementById("youthMobilePowerTab").style.backgroundColor = "#f6f6f6";
    document.getElementById("howToTab").style.backgroundColor = "#ccdea8";
    document.getElementById("howToAccordion").style.display = "block";
    document.getElementById("youthRadioAccordion").style.display = "none";
  
  }

  document.getElementById("howToTab").onclick = function(e) {
    openHowToTab();
  }

  document.getElementById("youthMobilePowerTab").onclick = function(e) {
    document.getElementById("youthMobilePowerTab").style.backgroundColor = "#ccdea8";
    document.getElementById("howToTab").style.backgroundColor = "#f6f6f6";
    document.getElementById("howToAccordion").style.display = "none";
    document.getElementById("youthRadioAccordion").style.display = "block";
  }

  window.goToHowToTutorial = function(tutorialNum) {
    openHowToTab();
    $("#howToAccordion").accordion("option", "active", tutorialNum);
    return false;
  }
});