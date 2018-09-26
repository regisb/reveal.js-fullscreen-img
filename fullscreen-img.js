// Look for sections that have a fullscreen-img attribute and set this image as
// the body background image whenever this section is displayed.
// TODO insert image with reveal transition
var BGR;

function fullscreen(event) {

  var contentImg = event.currentSlide.querySelector(".fullscreen-img");
  if (contentImg){
      var url = contentImg.src;
      contentImg.style.display = 'none';
  }
  else{
      var url = event.currentSlide.getAttribute("fullscreen-img");
  }

  
  var backgroundholder = document.querySelector(".state-background"); 
  if(url) {

    if(typeof BGR == "undefined")
    {
      // Store background value
      BGR = backgroundholder.style.background;
    }



    // Set image from fullscreen-img attribute as body background
    backgroundholder.style.backgroundImage = "url('" + url + "')";
    var size = event.currentSlide.getAttribute("fullscreen-size");
    if(size != "contain") {
      backgroundholder.style.backgroundSize = "cover";
    }
    else {
      // Put image in 'contain' mode with black background
      // TODO store background color and use it. This is possible by regexping
      // the background property and replacing the 2nd value by the image url.
      // See http://www.w3schools.com/cssref/css3_pr_background.asp
      backgroundholder.style.backgroundColor = "#000000";
      backgroundholder.style.backgroundSize  = "contain";
      backgroundholder.style.backgroundRepeat = "no-repeat";
      backgroundholder.style.backgroundAttachment = "fixed";
      backgroundholder.style.backgroundPosition = "center center";
    }
  }
  else { 
    if(typeof BGR != "undefined") { 
      backgroundholder.style.backgroundImage = "none";
      backgroundholder.style.background      = BGR;
    } 
  }
}

Reveal.addEventListener('ready', function(event) {
  fullscreen(event);
}, false );

Reveal.addEventListener('slidechanged', function(event) {
  fullscreen(event);
}, false );

