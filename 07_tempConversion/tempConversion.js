const convertToCelsius = function(fahVal) {
  let fahValConvertToNumber = Number(fahVal);
  const fractionalPart = 5/9;
  let convertToCel = (fahValConvertToNumber-32)*fractionalPart;
 let finalResult = Number(convertToCel.toFixed(1))
  return finalResult;
};

const convertToFahrenheit = function(celVal) {
  let celValConvertToNumber = Number(celVal);
  const fractionalPart = 9/5;
  let convertToFah = (celValConvertToNumber*fractionalPart)+32;
 let finalResult = Number(convertToFah.toFixed(1))
  return finalResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
