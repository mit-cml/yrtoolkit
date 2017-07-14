$(document).ready( function() {

  var tutorialIndexToPageObject = {}; //{0:{page:2,totalPageNum:5}}

  var setupTutorialHeader = function(tutorialIndex) {
    var tutorialPageObject = tutorialIndexToPageObject[tutorialIndex];
    var tutorialContainer = getTutorialContainer(tutorialIndex);
    var tutorialNavigationHeader = tutorialContainer.getElementsByClassName("tutorialNavigationHeader")[0];
    
    var pageNumSpan = tutorialNavigationHeader.getElementsByClassName("currentPageNum")[0];
    var totalPageNumSpan = tutorialNavigationHeader.getElementsByClassName("totalPageNum")[0];
    pageNumSpan.innerHTML = tutorialPageObject.page + 1;
    totalPageNumSpan.innerHTML = tutorialPageObject.totalPageNum;

  }

  var updateTutorialHeader = function(tutorialIndex) {
    var tutorialPageObject = tutorialIndexToPageObject[tutorialIndex];
    var tutorialContainer = getTutorialContainer(tutorialIndex);
    var tutorialNavigationHeader = tutorialContainer.getElementsByClassName("tutorialNavigationHeader")[0];

    var pageNumSpan = tutorialNavigationHeader.getElementsByClassName("currentPageNum")[0];
    pageNumSpan.innerHTML = tutorialPageObject.page + 1;

    var previousLinkContainer = tutorialNavigationHeader.getElementsByClassName("previousLinkContainer")[0];
    
    if(tutorialPageObject.page == 0) {
      //hide previous link
      previousLinkContainer.style.visibility = "hidden";
    } else {
      previousLinkContainer.style.visibility = "visible";      
    }

    var nextLinkContainer = tutorialNavigationHeader.getElementsByClassName("nextLinkContainer")[0];
    if(tutorialPageObject.page + 1 < tutorialPageObject.totalPageNum) {      
      nextLinkContainer.style.visibility = "visible";
    } else {
      nextLinkContainer.style.visibility = "hidden";
    }

  }

  var setTutorialNextButtonVisibility = function(tutorialIndex, visibility) {
    var tutorialContainer = getTutorialContainer(tutorialIndex);
    var nextButtonContainer = tutorialContainer.getElementsByClassName("tutorialNextButtonContainer")[0];
    nextButtonContainer.style.display = (visibility ? "block" : "none")
  }

  var updateTutorialPage = function(tutorialIndex) {
    var tutorialContainer = getTutorialContainer(tutorialIndex);
    var tutorialContentPages = tutorialContainer.getElementsByClassName("tutorialContentPage");
    for(var i=0;i<tutorialContentPages.length;i++) {
      tutorialContentPages[i].style.display = "none";
    }
    var currentPage = tutorialContentPages[tutorialIndexToPageObject[tutorialIndex].page];
    currentPage.style.display = "block";
    
    updateTutorialHeader(tutorialIndex)
  }

  var getTutorialContainer = function(tutorialIndex) {
    var tutorialContainers = document.getElementsByClassName("tutorialContainer");
    return tutorialContainers[tutorialIndex];
  }

  var setupTutorial = function() {
    var tutorialIndex = 0;
    var totalPageNum;
    var tutorialContainers = document.getElementsByClassName("tutorialContainer");
    for(var i=0;i<tutorialContainers.length;i++) {
      //TODO generate tutorial header

      //add tutorial id
      var tutorialIndexDiv = document.createElement("div")
      tutorialIndexDiv.innerHTML = tutorialIndex;
      tutorialIndexDiv.className = "tutorialIndexDiv";
      tutorialIndexDiv.style.display = "none";
      tutorialContainers[i].appendChild(tutorialIndexDiv);
      totalPageNum = tutorialContainers[i].getElementsByClassName("tutorialContentPage").length
      
      tutorialIndexToPageObject[tutorialIndex] = {page:0,totalPageNum:totalPageNum}
      setupTutorialHeader(tutorialIndex);
      updateTutorialPage(tutorialIndex);
      tutorialIndex++;
    }
  }

  setupTutorial();

  $(".tutorialPreviousButton").click(function(e) {
    var tutorialIndex = this.closest(".tutorialContainer").getElementsByClassName("tutorialIndexDiv")[0].innerHTML;
    
    tutorialIndexToPageObject[tutorialIndex].page--;
    //show next button
    setTutorialNextButtonVisibility(tutorialIndex, true)
    updateTutorialPage(tutorialIndex);
    return false;
  });

  $(".tutorialNextButton").click(function(e) {
    var tutorialIndex = this.closest(".tutorialContainer").getElementsByClassName("tutorialIndexDiv")[0].innerHTML;
    var tutorialPageObject = tutorialIndexToPageObject[tutorialIndex];
    tutorialPageObject.page++;

    if(tutorialPageObject.page == tutorialPageObject.totalPageNum - 1) {
      //hide next button
      setTutorialNextButtonVisibility(tutorialIndex, false)
    }
    updateTutorialPage(tutorialIndex);

    return false;
  });

  window.getTutorialVideo = function(tutorialId) {
    window.parent.postMessage(tutorialId, '*');
  }


});