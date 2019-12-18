$(document).ready(function () {

    var howToTab = document.getElementById("howToTab");
    var yrMobilePowerTab = document.getElementById('youthMobilePowerTab');

    var openHowToTab = function () {
        if (yrMobilePowerTab) yrMobilePowerTab.style.backgroundColor = "#f6f6f6";
        if (howToTab) howToTab.style.backgroundColor = "#ccdea8";
        document.getElementById("howToAccordion").style.display = "block";
        document.getElementById("youthRadioAccordion").style.display = "none";

        sendAnalyticsEvent({
            hitType: 'event',
            eventCategory: 'Guide-' + document.getElementById("serverTutorialId").innerHTML,
            eventAction: 'tabClick',
            eventLabel: "howTo"
        });
    };

    if (howToTab) {
        howToTab.onclick = function (e) {
            openHowToTab();
        };
    }

    if (yrMobilePowerTab) {
        yrMobilePowerTab.onclick = function (e) {
            yrMobilePowerTab.style.backgroundColor = "#ccdea8";
            howToTab.style.backgroundColor = "#f6f6f6";
            document.getElementById("howToAccordion").style.display = "none";
            document.getElementById("youthRadioAccordion").style.display = "block";

            sendAnalyticsEvent({
                hitType: 'event',
                eventCategory: 'Guide-' + document.getElementById("serverTutorialId").innerHTML,
                eventAction: 'tabClick',
                eventLabel: "appGuide"
            });
        };
    }

    window.goToHowToTutorial = function (tutorialNum) {
        openHowToTab();
        $("#howToAccordion").accordion("option", "active", tutorialNum);
        sendAnalyticsEvent({
            hitType: 'event',
            eventCategory: 'Guide-' + document.getElementById("serverTutorialId").innerHTML,
            eventAction: 'goToHowTo',
            eventValue: tutorialNum
        });
        return false;
    };
});
