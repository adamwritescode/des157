// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // First, hide just about everything, so that users are only presented with
    // header, footer, nav, etc (everything but the forms/empty result sections)
    // Do this by creating array of all article tags
    var articleTags = document.getElementsByTagName("article");

    // loop through each article tag in array and append the class .hidden
    for (var i = 0; i < articleTags.length; i++){
      articleTags[i].className += "hidden";
    }



    // Declare & initialize form name variables:
    // -- Power Metal form
    var powerMetal = document.power;

    // -- Death Metal form
    var deathMetal = document.death;

    // -- Black Metal form
    var blackMetal = document.black;

    // -- Hardcore form
    var hardcore = document.hardcore;


    // call processForm() [defined below] on submit (for each form)
    // -- Power Metal submit
    powerMetal.onsubmit = processForm;

    // -- Death Metal submit
    deathMetal.onsubmit = processForm;

    // -- Black Metal submit
    blackMetal.onsubmit = processForm;

    // -- Hardcore submit
    hardcore.onsubmit = processForm;


    // define processForm() - form parsing/population to run on submit
    function processForm() {

      // Power Metal
      processPowerMetal();

      // Death Metal
      processDeathMetal();

      // Black Metal
      processBlackMetal();

      // Hardcore
      processHardcore();

      return false;
    }

    // Modular Function Definitions (to process each form):
    // For each form (Power Metal, Death Metal, Black Metal, Hardcore), store
    // the values of each field in one array, and store the corresponding
    // <span> tags in another array. Then, assign the values of each field to
    // the corresponding <span>'s innerHTML.

    // Process Power Metal form
    function processPowerMetal(){
      // -- collect all <input> tags from the relevant form
      var powerMetalFields = powerMetal.getElementsByTagName("input");

      // -- collect all corresponding <span> tags in the output section
      var powerMetalSpans = document.getElementById("power-results").getElementsByTagName("span");

      // -- assign the value of each field to innerHTML of each relevant span
      for (var i = 0; i < powerMetalFields.length; i++){
        powerMetalSpans[i].innerHTML = powerMetalFields[i].value;
      }
      return false;
    }

    // Process Death Metal form
    function processDeathMetal(){
      // -- collect all <input> tags from the relevant form
      var deathMetalFields = deathMetal.getElementsByTagName("input");

      // -- collect all corresponding <span> tags in the output section
      var deathMetalSpans = document.getElementById("death-results").getElementsByTagName("span");

      // -- assign the value of each field to innerHTML of each relevant span
      for (var i = 0; i < deathMetalFields.length; i++){
        deathMetalSpans[i].innerHTML = deathMetalFields[i].value;
      }
      return false;
    }

    // Process Black Metal form
    function processBlackMetal(){
      // -- collect all <input> tags from the relevant form
      var blackMetalFields = blackMetal.getElementsByTagName("input");

      // -- collect all corresponding <span> tags in the output section
      var blackMetalSpans = document.getElementById("black-results").getElementsByTagName("span");

      // -- assign the value of each field to innerHTML of each relevant span
      for (var i = 0; i < blackMetalFields.length; i++){
        blackMetalSpans[i].innerHTML = blackMetalFields[i].value;
      }
      return false;
    }

    // Process Hardcore form
    function processHardcore(){
      // -- collect all <input> tags from the relevant form
      var hardcoreFields = hardcore.getElementsByTagName("input");

      // -- collect all corresponding <span> tags in the output section
      var hardcoreSpans = document.getElementById("hardcore-results").getElementsByTagName("span");

      // -- assign the value of each field to innerHTML of each relevant span
      for (var i = 0; i < hardcoreFields.length; i++){
        hardcoreSpans[i].innerHTML = hardcoreFields[i].value;
      }
      return false;
    }

});
