// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // Declare & initialize form name variables:
    // -- Power Metal form
    var powerMetal = document.power;

    // -- Death Metal form
    var deathMetal = document.death;

    // -- Black Metal form
    var blackMetal = document.black;

    // -- Hardcore form
    var hardcore = document.hardcore;

    // call processForm() when submit buttons are clicked
    // -- Power Metal submit
    powerMetal.onsubmit = processForm;

    // -- Death Metal submit
    deathMetal.onsubmit = processForm;

    // -- Black Metal submit
    blackMetal.onsubmit = processForm;

    // -- Hardcore submit
    hardcore.onsubmit = processForm;

    // define processForm()
    function processForm() {

      var powerMetalFields = powerMetal.getElementsByTagName("input");
      var powerMetalSpans = document.getElementById("power-results").getElementsByTagName("span");
      for (var i = 0; i < powerMetalFields.length; i++){
        powerMetalSpans[i].innerHTML = powerMetalFields[i].value;
      }

      /*
      // Initialize variables for every text field in each form
      // as well as their corresponding <span> tags to be populated onsubmit.
      // To avoid repetitive commenting, the order of var intitialization
      // is as follows: input value, corresponding <span>, span innerHTML.
      // Each var name relates to the 'category' of word the user will enter.

      // -- Power Metal
      // ---- "Time of day"
      var power_timeOfDay0 = document.power.timeOfDay0.value;
      var power_timeOfDay0_span = document.getElementById("power-timeOfDay0");
      power_timeOfDay0_span.innerHTML = power_timeOfDay0;

      // ---- "Time of day"
      var power_timeOfDay1 = document.power.timeOfDay1.value;
      var power_timeOfDay1_span = document.getElementById("power-timeOfDay1");
      power_timeOfDay1_span.innerHTML = power_timeOfDay1;

      // ---- "Planet name"
      var power_planet0 = document.power.planet0.value;
      var power_planet0_span = document.getElementById("power-planet0");
      power_planet0_span.innerHTML = power_planet0;

      // ---- "Mythological creatures (plural)"
      var power_mythCreature0 = document.power.mythCreature0.value;
      var power_mythCreature0_span = document.getElementById("power-mythCreature0");
      power_mythCreature0_span.innerHTML = power_mythCreature0;

      // ---- "Medieval weaponry (plural)"
      var power_medievalWeapon0 = document.power.medievalWeapon0.value;
      var power_medievalWeapon0_span = document.getElementById("power-medievalWeapon0");
      power_medievalWeapon0_span.innerHTML = power_medievalWeapon0;

      // ---- "Medieval weaponry (plural)"
      var power_medievalWeapon1 = document.power.medievalWeapon1.value;
      var power_medievalWeapon1_span = document.getElementById("power-medievalWeapon1");
      power_medievalWeapon1_span.innerHTML = power_medievalWeapon1;

      // ---- "Animals (plural)"
      var power_animal0 = document.power.animal0.value;
      var power_animal0_span = document.getElementById("power-animal0");
      power_animal0_span.innerHTML = power_animal0;

      // each form is an object. Each object has a form, a set of form fields,
      // a set of associated span tags, and a method which assigns the value of
      // each field to the corresponding span's innerHTML.

      var powerMetal = {
        form:     document.power,
        fields:   this.form.getElementsByTagName("input"),
        spans:    [],
        assignValue: function(){
          // set innerHTML of spans to the value of each field
        }
      };

      // old explanation:
      // for each form (for each form name?), store the value of each field in
      // one array, and store the corresponding <span> tag in another array.
      // Then, assign the value of each field to the corresponding <span>'s
      // innerHTML.


      */
      return false;
    }

});
