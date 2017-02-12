// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

    // first preload images
    var allImageSrc = [
    "desk.jpg",
    "display-default.jpg", "display-hover.jpg", "display-click.jpg",
    "drone-default.jpg", "drone-hover.jpg", "drone-bg.jpg",
    "keyboard-default.jpg", "keyboard-hover.jpg", "keyboard-bg.jpg",
    "record-default.jpg", "record-hover.jpg", "record-bg.jpg",
    "turntable-default.jpg", "turntable-hover.jpg", "turntable-click.jpg"
    ];

    // create empty array to hold/preload Image objects
    var images = [];

    // fill array with Image objects
    for (var i = 0; i < allImageSrc.length; i++){
      images[i] = new Image();
      images[i].src = "img/" + allImageSrc[i];
    }

    // create array of images in their default states, by ID
    var defaultImages = [
      document.getElementById("drone"),
      document.getElementById("record"),
      document.getElementById("turntable"),
      document.getElementById("display"),
      document.getElementById("keyboard")
    ];

    // initialize variables pointing to array items above
    var drone = defaultImages[0],
        record = defaultImages[1],
        turntable = defaultImages[2],
        display = defaultImages[3],
        keyboard = defaultImages[4];

    // initialize variables pointing to modal windows
    var modal_drone = document.getElementById("modal-drone"),
        modal_record = document.getElementById("modal-record"),
        modal_keyboard = document.getElementById("modal-keyboard");

    // add event handlers to images
    for (var i = 0; i < defaultImages.length; i++){
      defaultImages[i].addEventListener("mouseover", hoverOn);
      defaultImages[i].addEventListener("mouseout", hoverOff);
      defaultImages[i].addEventListener("click", clickOn);
    }

    // called on image hotspot mouseover
    function hoverOn(){
      this.src = "img/" + this.id + "-hover.jpg";
      this.className = "hover";
    }
    // called on image hotspot mouseout
    function hoverOff(){
      this.src = "img/" + this.id + "-default.jpg";
      this.className = "";
    }

    // called on image hotspot click
    function clickOn(){
      if (this.id == "turntable" || this.id == "display"){
        this.src = "img/" + this.id + "-click.jpg";
      } else {
        var thisModal = document.getElementById("modal-" + this.id);
        // show modal
        thisModal.style.display = "block";
        // add event handler to close button
        thisModal.childNodes[5].addEventListener("click",function(){thisModal.style.display = "none";});
        console.log(thisModal.childNodes[5]);
      }
    }

    // mouseover effects:
    // ---- all 5 sub-images - change css class to .hover
    // ---- ---- .hover: rgba border (transparent)
    // ---- AND swap current image for -default.jpg

    // mouseout effects:
    // ---- all 5 sub-images remove hover class (default state)

    // click events on all 5 sub-images
    // non-modals:
    // ---- #display, #turntable:
    // ---- ---- JS: src = display-click.jpg, turntable-click.jpg

    // modals:
    // ---- #drone: show #modal-drone, #record: show #modal-record, #keyboard: show #modal-keyboard
    // ---- close buttons:
    // ---- ---- this.parentElement.id("...").style.display:block; (?)

});
