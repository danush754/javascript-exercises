const convertToCelsius = function (fahrenheit) {
  let celsius = (Number(fahrenheit) - 32) *(5/9)

  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
