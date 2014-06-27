var bmp085 = require('bmp085');
var barometer = new bmp085();

// Run this function every min. and print out temp. and pressure
setInterval(function() {

    // Instructions:
    // 1. Write the code to take a periodic measurement using the 'bmp085' module.
    // 2. Print out the temperature and pressure and print it with console.log

    barometer.read(function (data) {
      console.log("Temperature:", data.temperature);
      console.log("Pressure:", data.pressure);
    });

    // Hint: See the module's github homepage at https://github.com/fiskeben/bmp085

}, 60 * 1000);
