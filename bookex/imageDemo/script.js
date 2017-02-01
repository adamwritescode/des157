// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture the img element by its id into a variable
    var heart = document.getElementById("heart");

    // add an eventListener for mouseover that changes the src of the
    // heart image to the image titled "love.png"
    heart.addEventListener('mouseover', function(){
      //this.src = "images/love.png";
      var random = Math.floor(Math.random() * (heartImages.length));
      console.log(random);
      this.src = heartImages[random];
    })

    // add an eventListener for mouseout that changes the src of the
    // heart image back to "question.png"
    heart.addEventListener('mouseout', function(){
      this.src = "images/question.png";
    })

    // eventually add a preload array (wait for details in class)
    // then display random candy hearts on mouseover
    var heartImages = [
      "images/bemine.png",
      "images/biteme.png",
      "images/love.png",
      "images/lovestinks.png",
      "images/puke.png",
      "images/question.png",
      "images/youandme.png"
    ];

    var preload = [];
    for (var i = 0; i < heartImages.length; i++){
      preload[i] = new Image()
      preload[i].src = heartImages[i];
    }

});
