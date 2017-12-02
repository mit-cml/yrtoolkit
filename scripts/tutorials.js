//already on tab, goes home
//not on tab, goes to last thing on that tab
//back button on how to goes to tutorial
if(typeof previousTutorialToLoad == "undefined") {
  previousTutorialToLoad = {url:null, tutorialIndex:-1,page:-1};
  loadingFromPreviousUrl = false;
  previousHowToToLoad = {url:null}
}
//var previousHowToToLoad;


$(document).ready( function() {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  
  var inTutorialTab = function() {
    return $(".tutorialTab").hasClass("active");// document.getElementsByClassName("tab active")[0].getAttribute("rel") == "tutorials/tutorials.html";
  }
  var getURLParamValue = function(name) {
  
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null ) {
      return "";
    } else {
      return results[1];
    }
  
  }
  
  if(getURLParamValue("tutorialFile") != "" ) {
    //make sure that we only load from the url once (otherwise you get an infinite loop)
    if(!window.hasLoadedFromUrl) {
      window.hasLoadedFromUrl = true;
      previousTutorialToLoad.url = "tutorials/" + getURLParamValue("tutorialFile").substr(0,getURLParamValue("tutorialFile").length - 1) + ".html"
      $(".content").load(previousTutorialToLoad.url,function(data){
        setupTutorial();
        assignEventHandlers();
      });
      
    }

  }
  
  tutorialIndexToPageObject = {}; //{0:{page:2,totalPageNum:5}}

  var setupTutorialHeader = function(tutorialIndex) {
    var tutorialPageObject = tutorialIndexToPageObject[tutorialIndex];
    var tutorialContainer = getTutorialContainer(tutorialIndex);
    var tutorialNavigationHeader = tutorialContainer.getElementsByClassName("tutorialNavigationHeader")[0];
    
    var previousLink = document.createElement("div");
      previousLink.className = "previousLinkContainer";
      previousLink.style.float = "left";
      previousLink.style.width = "20%";
      // previousLink.style.text-align = "left";
      previousLink.style.visibility = "hidden";

      var prevLink = document.createElement("a");
      $(prevLink).attr("href", "#");
      prevLink.className = "tutorialPreviousButton";
      prevLink.innerHTML = "Previous";

      previousLink.appendChild(prevLink);
      tutorialNavigationHeader.appendChild(previousLink);

      var countDiv = document.createElement("div");
      countDiv.style.float = "left";
      countDiv.style.width = "40%";
      countDiv.className = "countDiv";
      // countDiv.style.text-align = "center";

      var pageSpan = document.createElement("span");

      var currentSpan = document.createElement("span");
      currentSpan.className = "currentPageNum";
      currentSpan.innerHTML = -1;
      pageSpan.appendChild(currentSpan);

      var ofDiv = document.createElement("span");
      ofDiv.innerHTML = " of ";
      pageSpan.appendChild(ofDiv);

      var totalSpan = document.createElement("span");
      totalSpan.className = "totalPageNum";
      totalSpan.innerHTML = 5;

      pageSpan.appendChild(totalSpan);
      countDiv.appendChild(pageSpan);
      tutorialNavigationHeader.appendChild(countDiv);

      previousLink.appendChild(prevLink);
      tutorialNavigationHeader.appendChild(countDiv);

      var nextLink = document.createElement("div");
      nextLink.className = "nextLinkContainer";
      nextLink.style.float = "right";
      nextLink.style.width = "20%";
      // nextLink.style.text-align = "right";

      var nLink = document.createElement("a");
      $(nLink).attr("href", "#");
      nLink.className = "tutorialNextButton";
      nLink.innerHTML = "Next";

      nextLink.appendChild(nLink);
      tutorialNavigationHeader.appendChild(nextLink);

      var spacing = document.createElement("div");
      spacing.innerHTML = "<br/><hr/>"
      tutorialNavigationHeader.appendChild(spacing);

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
    nextButtonContainer.style.display = (visibility ? "block" : "none");
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
    if(inTutorialTab() && !loadingFromPreviousUrl) {
      previousTutorialToLoad.tutorialIndex = tutorialIndex;
      previousTutorialToLoad.page = tutorialIndexToPageObject[tutorialIndex].page;
    }
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

    $(".back").click(function(e) {
      switchToTab("tutorialTab");
      if(previousTutorialToLoad.url) {
        loadPreviousTutorial();
      } else {
        $(".content").load("tutorials/tutorials.html", function() {
          assignEventHandlers();
        });
      }
      $(".back").attr("style", "display:none;");
    });

    var loadPreviousTutorial = function() {
        loadingFromPreviousUrl = true;
        jQuery.get(previousTutorialToLoad.url, function(data){
          $( ".content" ).html( data );
          setupTutorial();
          assignEventHandlers();
/*              tutorialIndexToPageObject[previousTutorialToLoad.tutorialIndex].page = previousTutorialToLoad.page;
            loadingFromPreviousUrl = false;
            updateTutorialPage(previousTutorialToLoad.tutorialIndex);
*/
  
          //TODO fix temporary hack, not sure where the timing issue is...
          setTimeout(function() {
            tutorialIndexToPageObject[previousTutorialToLoad.tutorialIndex].page = previousTutorialToLoad.page;
            loadingFromPreviousUrl = false;
            updateTutorialPage(previousTutorialToLoad.tutorialIndex);
            updateNextButtonVisibilityFromTutorialIndex(previousTutorialToLoad.tutorialIndex);
          },500);

        });
    }


    var loadPreviousHowTo = function() {
      jQuery.get(previousHowToToLoad.url, function(data){
        $( ".content" ).html( data );
        assignEventHandlers();
      });
    }

    var switchToTab = function(tabName) {
      if(tabName == "tutorialTab") {
        $(".tutorialTab").addClass("active")
        $(".howToTab").removeClass("active")
      } else {
        $(".tutorialTab").removeClass("active")
        $(".howToTab").addClass("active")      
      }
    }

    var updateNextButtonVisibilityFromTutorialIndex = function(tutorialIndex) {
      var tutorialPageObject = tutorialIndexToPageObject[tutorialIndex];
      if(tutorialPageObject.page == tutorialPageObject.totalPageNum - 1) {
        //hide next button
        setTutorialNextButtonVisibility(tutorialIndex, false)
      } else {
        setTutorialNextButtonVisibility(tutorialIndex, true)
      }

    }


    $(".tab").click(function(e) {

      if($(this).hasClass("active")) {
        $(".content").load($(this).attr("rel"), function() {
          assignEventHandlers();
          if(inTutorialTab()) {
            previousTutorialToLoad = {url:null, tutorialIndex:-1,page:-1};
          } else {
            previousHowToToLoad = {url:null};
          }
        });
      } else if(!inTutorialTab() && previousTutorialToLoad.url ) {
        //load previous tutorial
        loadPreviousTutorial();
        console.log("load previous tutorial")
      } else if(inTutorialTab() && previousHowToToLoad.url ) {
        //load previous howto
        loadPreviousHowTo();
        console.log("load previous howto")
      } else {
        $(".content").load($(this).attr("rel"), function() {
          assignEventHandlers();
        });
      }
      
      $(this).tab('show');
      $(".back").attr("style", "display:none;");
    });

  var assignEventHandlers = function() {

    $(".tutorials").click(function(e) {
      previousTutorialToLoad.url = "tutorials/" + $(this).attr("rel");
      $(".content").load("tutorials/" + $(this).attr("rel") , function() {
        setupTutorial();
        assignEventHandlers()
      });
    });

    var howToClickHandler = function(howToUrl) {
      previousHowToToLoad.url = "howtos/" + howToUrl
      $(".content").load(previousHowToToLoad.url, function() {
        switchToTab("howToTab");
        assignEventHandlers();
      });
      $(".plus").attr("class", "display:block;");    
    }

    $(".open").click(function(e) {
      howToClickHandler($(this).attr("rel"))
    });

    $(".tutorialHowToLink").click(function(e) {
      $(".back").attr("style", "display:block;");
      howToClickHandler($(this).attr("rel"))
    });

    $('.dropdown-toggle').dropdown();


    $(".panel").on('shown.bs.collapse', function(){
      $(this).find(".plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
    });

    $(".panel").on('hidden.bs.collapse', function(){
      $(this).find(".plus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
    });
  

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
      zoom.src = "images/zoom.png";
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
      iconImg.src = "images/images/" + $(allIcons[i]).attr('alt') + '.png';
      allIcons[i].appendChild(iconImg);
    }
  }
  addImages();
  }
  assignEventHandlers();
});
