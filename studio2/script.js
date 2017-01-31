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

    // bind procesForm() to
    // call processForm() when submit button is clicked
    powerMetal.onsubmit = processForm;

    // define processForm()
    function processForm() {
      var power_timeOfDay0 = document.power.timeOfDay0.value;
      console.log(power_timeOfDay0);

      var power_timeOfDay0_span = document.getElementById("power-timeOfDay0");
      console.log(power_timeOfDay0_span);

      console.log("before " + power_timeOfDay0_span.innerHTML);
      power_timeOfDay0_span.innerHTML = power_timeOfDay0;
      console.log("after " + power_timeOfDay0_span.innerHTML);





      return false;
    }

});
