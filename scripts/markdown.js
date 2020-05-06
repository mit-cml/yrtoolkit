/* -*- mode: javascript; js-indent-level: 2; -*- */
(function() {
  var accordion = document.querySelector(".accordion");
  if (!accordion) {
    return;
  }

  var header = accordion.firstElementChild;
  if (!header) {
    return;
  }

  function addTopNav(container) {
    var topnav = document.createElement('div');
    topnav.setAttribute('class', 'tutorialNavigationHeader');
    container.appendChild(topnav);
    container.setAttribute('class', 'tutorialContainer');
  }

  function addBottomNav(container) {
    var button = document.createElement('button');
    button.textContent = "Next Step";
    button.setAttribute('class', 'btn btn-success btn-lg tutorialNextButton');
    var bottomnav = document.createElement('div');
    bottomnav.setAttribute('class', 'tutorialNextButtonContainer');
    bottomnav.appendChild(button);
    container.appendChild(bottomnav);
  }

  var headerTag = header.tagName;
  var secondaryTag = 'H' + (parseInt(headerTag[1]) + 1);
  var container = document.createElement('div');
  var sibling = header.nextElementSibling;
  var firstNav = true;
  var isTutorialBody = false;
  var sawNav = false;
  var shouldAddNav = false;
  var subcontainer;
  while (sibling) {
    var next = sibling.nextElementSibling;
    if (sibling.tagName == 'NAV') {
      sibling.remove();
      if (firstNav) {
        addTopNav(container);
        isTutorialBody = true;
        firstNav = false;
        sawNav = true;
      } else {
        if (isTutorialBody) {
          container.appendChild(subcontainer);
          subcontainer = null;
          isTutorialBody = false;
        }
        addBottomNav(container);
      }
      /*
    } else if (sibling.tagName == 'HINT') {
      sibling.remove();
      var hint = document.createElement('div');
      hint.setAttribute('class', 'hintContainer');
      var button = document.createElement('button'),
          content = document.createElement('div');
      content.setAttribute('class', 'hint hideHint');
      hint.appendChild(button);
      hint.appendChild(content);
      button.textContent = sibling.getAttribute('title');
      content.innerHTML = sibling.innerHTML;
      if (isTutorialBody) {
        subcontainer.appendChild(hint);
      } else {
        container.appendChild(hint);
      }*/
    } else if (sibling.tagName != header.tagName) {
      if (isTutorialBody || sibling.tagName == secondaryTag) {
        if (sibling.tagName != secondaryTag) {
          subcontainer.appendChild(sibling);
        } else {
          if (subcontainer) {
            container.appendChild(subcontainer);
          } else {
            // First subdivison, add nav header
            if (!sawNav) {
              addTopNav(container);
              isTutorialBody = true;
              firstNav = false;
              shouldAddNav = true;
            }
          }
          subcontainer = document.createElement('div');
          subcontainer.setAttribute('class', 'tutorialContentPage');
          subcontainer.appendChild(sibling);  // move subheading
        }
      } else {
        container.appendChild(sibling);
      }
    } else {
      if (isTutorialBody) {
        container.appendChild(subcontainer);
      }
      if (shouldAddNav && !sawNav) {
        addBottomNav(container);
      }
      accordion.insertBefore(container, sibling);
      container = document.createElement('div');
      isTutorialBody = false;
      subcontainer = null;
      firstNav = true;
      sawNav = false;
      shouldAddNav = false;
    }
    sibling = next;
  }
  if (isTutorialBody) {
    container.appendChild(subcontainer);
  }
  if (shouldAddNav) {
    addBottomNav(container);
  }
  accordion.appendChild(container);
  $( ".accordion" ).accordion({heightStyle: "content"});

  var howtos = document.querySelectorAll('howto');
  for (var i = 0; i < howtos.length; i++ ) {
    var howto = howtos[i];
    var div = document.createElement('div');
    div.setAttribute('class', 'setup');
    div.setAttribute('id', howto.getAttribute('id'));
    howto.replaceWith(div);
  }

  // Convert HINT elements
  var hints = document.querySelectorAll('hint');
  for (var i = hints.length - 1; i >= 0; i--) {
    var hint = document.createElement('div');
    hint.setAttribute('class', 'hintContainer');
    var button = document.createElement('button'),
        content = document.createElement('div');
    content.setAttribute('class', 'hint hideHint');
    hint.appendChild(button);
    hint.appendChild(content);
    button.textContent = hints[i].getAttribute('title');
    content.innerHTML = hints[i].innerHTML;
    hints[i].replaceWith(hint);
  }

  // Open external lnks in a new tab/window
  var links = accordion.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('http:') == 0 || links[i].href.indexOf('https:') == 0) {
      links[i].setAttribute('target', '_blank');
    }
  }
})();
