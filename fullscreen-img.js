// Look for sections that have a fullscreen-img attribute and set this image as
// the body background image whenever this section is displayed.
// TODO insert image with reveal transition
var BGR;
var imageContainer;
var body;

// Store background value
BGR = document.body.style.background;

function fullscreen(event, firstSlideOnLoad) {
  var url = event.currentSlide.getAttribute("fullscreen-img");

  if (!firstSlideOnLoad) {
    document.body.style.backgroundImage = "none";
    var leftOver = document.getElementById('imageContainer');
    if (leftOver) {
      leftOver.parentNode.removeChild(imageContainer);
    }
  }

  if(url) {
    // If user has specified opacity, create another element. Else, use body.
    var opacity = event.currentSlide.getAttribute("fullscreen-opacity");
    if (opacity) {
      body = false;

      // Create element and append to body
      imageContainer = document.createElement("div");
      imageContainer.id = "imageContainer";
      imageContainer.style.opacity = opacity;
      document.body.appendChild(imageContainer);
    } else {
      body = true;
      imageContainer = document.body;
    }

    // Set image from fullscreen-img attribute as body background
    imageContainer.style.backgroundImage = "url('" + url + "')";
    
    var size = event.currentSlide.getAttribute("fullscreen-size");
    if(size != "contain") {
      imageContainer.style.backgroundSize = "cover";
    }
    else {
      // Put image in 'contain' mode with black background
      // TODO store background color and use it. This is possible by regexping
      // the background property and replacing the 2nd value by the image url.
      // See http://www.w3schools.com/cssref/css3_pr_background.asp
      imageContainer.style.backgroundColor = "#000000";
      imageContainer.style.backgroundSize  = "contain";
      imageContainer.style.backgroundRepeat = "no-repeat";
      imageContainer.style.backgroundAttachment = "fixed";
      imageContainer.style.backgroundPosition = "center center";
    }
  }

  else { 
    // Reset background to original style
    if(typeof BGR != "undefined") { 
      document.body.style.background = BGR;
    }     

    // Reset imageContainer var
    if (!body) {
      imageContainer = '';
    }
  }



}

Reveal.addEventListener('ready', function(event) {
  fullscreen(event, true);
}, false );

Reveal.addEventListener('slidechanged', function(event) {
  fullscreen(event, false);
}, false );
