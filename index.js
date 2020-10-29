/*function isShortWeather, argument temperature single number,
 if temperature is >= 75 return true otherwise false*/

function isShortWeather(fahrenheit) {
  if (fahrenheit >= 75) {
    return true;
  } else {
    return false;
  }
}
console.log(isShortWeather(55));
console.log(isShortWeather(80));
console.log(isShortWeather(74));
