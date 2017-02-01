// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // First, hide just about everything, so that users are only presented with
    // header, footer, nav, etc (everything but the forms/empty result sections)
    // -- Do this by creating array of all article tags
    // -- AND array of corresponding section tags  (w/ 'results' class)
    var articleTags = document.getElementsByTagName("article");
    var results = document.getElementsByClassName("results");


    var powerMetalResults = results[0];
    var deathMetalResults = results[1];
    var blackMetalResults = results[2];
    var hardcoreResults = results[3];

    // -- loop through each article and section tag in arrays and append
    // the class(es) 'hidden' and 'results hidden', respectively.
    for (var i = 0; i < articleTags.length; i++){
      articleTags[i].className += "hidden";
      results[i].className = "results hidden";
    }

    // Create variables to hold nav links (for selecting desired form)
    var navPowerMetal = document.getElementById("navPowerMetal");
    var navDeathMetal = document.getElementById("navDeathMetal");
    var navBlackMetal = document.getElementById("navBlackMetal");
    var navHardcore = document.getElementById("navHardcore");

    // Now add toggle behavior to nav links... add the other 3


    navPowerMetal.addEventListener("click", showPowerMetal, false);
    navDeathMetal.addEventListener("click", showDeathMetal, false);
    navBlackMetal.addEventListener("click", showBlackMetal, false);
    navHardcore.addEventListener("click", showHardcore, false);

    /*
    navPowerMetal.addEventListener("click", clickEvents, false);
    navDeathMetal.addEventListener("click", clickEvents, false);
    navBlackMetal.addEventListener("click", clickEvents, false);
    navHardcore.addEventListener("click", clickEvents, false);
    */


    // Initialize array w/ sound src
    var soundSrc = ["sound/powermetal.mp3", "sound/deathmetal.mp3",
    "sound/blackmetal.mp3", "sound/hardcore.mp3"];

    // create empty array to hold Audio objects
    var sounds = [];

    // preload Audio objects and add them to sounds array
    for (var a = 0; a < soundSrc.length; a++){
      sounds[a] = new Audio();
      sounds[a].src = soundSrc[a];
    }

    // FORMS: Declare & initialize form name variables:
    // -- Power Metal form
    var powerMetal = document.power;

    // -- Death Metal form
    var deathMetal = document.death;

    // -- Black Metal form
    var blackMetal = document.black;

    // -- Hardcore form
    var hardcore = document.hardcore;

    // call processForm() [defined below] on click (for each form)
    // -- Power Metal submit
    powerMetal.getElementsByTagName('button')[0].addEventListener('click', processPowerMetal, false);

    // -- Death Metal submit
    deathMetal.getElementsByTagName('button')[0].addEventListener('click', processDeathMetal, false);

    // -- Black Metal submit
    blackMetal.getElementsByTagName('button')[0].addEventListener('click', processBlackMetal, false);

    // -- Hardcore submit
    hardcore.getElementsByTagName('button')[0].addEventListener('click', processHardcore, false);

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

      // -- show results and hide form
      powerMetalResults.className = "results active";
      // powerMetal.className = "hidden";

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

      // -- show results and hide form
      deathMetalResults.className = "results active";
      // deathMetal.className = "hidden";

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

      // -- show results and hide form
      blackMetalResults.className = "results active";
      // blackMetal.className = "hidden";

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

      // -- show results and hide form
      hardcoreResults.className = "results active";
      // hardcore.className = "hidden";

      return false;
    }

    // showPowerMetal() definition -- TO BE PLACED AT BOTTOM
    function showPowerMetal(){
      // show the Power Metal form
      articleTags[0].className = "active";
      powerMetal.className="active";
      for (var i = 1; i < 4; i++){
        articleTags[i].className = "hidden";
      }
      // hide results
      powerMetalResults.className = "results hidden";

      //play sound
      var soundPowerMetal = sounds[0];
      soundPowerMetal.play();

      return false;
    }

    // showDeathMetal() definition
    function showDeathMetal(){
      // show the Power Metal form... finish this
      articleTags[1].className = "active";
      for (var i = 0; i < 4; i++){
        if (i != 1){
          articleTags[i].className = "hidden";
        }
        // else, do nothing
      }

      //play sound
      var soundDeathMetal = sounds[1];
      soundDeathMetal.play();

      return false;
    }

    // showBlackMetal() definition
    function showBlackMetal(){
      // show the Power Metal form... finish this
      articleTags[2].className = "active";
      for (var i = 0; i < 4; i++){
        if (i != 2){
          articleTags[i].className = "hidden";
        }
        // else, do nothing
      }

      //play sound
      var soundBlackMetal = sounds[2];
      soundBlackMetal.play();

      return false;
    }

    // showHardcore() definition
    function showHardcore(){
      // show the Power Metal form... finish this
      articleTags[3].className = "active";
      for (var i = 0; i < 4; i++){
        if (i != 3){
          articleTags[i].className = "hidden";
        }
        // else, do nothing
      }

      //play sound
      var soundHardcore = sounds[3];
      soundHardcore.play();

      return false;
    }

    /* commenting out the below code, to investigate later
    // encapsulate 'show' functions into one higher-level function
    function showForm(){
      if (this.id == "navPowerMetal"){
        showPowerMetal();
        console.log("this.id = " + this.id + " and this = " + this);
      } else if (this.id == "navDeathMetal"){
        showDeathMetal();
        console.log("this.id = " + this.id + " and this = " + this);
      } else if (this.id == "navBlackMetal"){
        showBlackMetal();
        console.log("this.id = " + this.id + " and this = " + this);
      } else {
        showHardcore();
        console.log("this.id = " + this.id + " and this = " + this);
      }
    }

    // Audio function definitions - play audio clip onclick (nav buttons)
    function playSound(){
      var soundPowerMetal = sounds[0];
      var soundDeathMetal = sounds[1];
      var soundBlackMetal = sounds[2];
      var soundHardcore = sounds[3];

      if (this.id == "navPowerMetal"){
        soundPowerMetal.play();
        console.log("this.id = " + this.id + " and this = " + this);
      } else if (this.id == "navDeathMetal"){
        soundDeathMetal.play();
        console.log("this.id = " + this.id + " and this = " + this);
      } else if (this.id == "navBlackMetal"){
        soundBlackMetal.play();
        console.log("this.id = " + this.id + " and this = " + this);
      } else {
        soundHardcore.play();
        console.log("this.id = " + this.id + " and this = " + this);
      }
    }

    function clickEvents(){
      playSound();
      showForm();
    }
    */


});
