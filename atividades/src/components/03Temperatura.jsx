function celsiusParaFahrenheit(c) {
  return (9 * c) / 5 + 32;
}

function fahrenheitParaCelsius(f) {
  return ((f - 32) / 9) * 5;
}

function kelvin(k) {
  return {
    celsius: celsiusParaFahrenheit(k),
    fahrenheit: fahrenheitParaCelsius(k),
  };
}

export const Temperaturas = () => {
  return (
    <>
      <h1>99° C = {celsiusParaFahrenheit(99).toFixed(2)}°F</h1>
      <h1>1°F ={fahrenheitParaCelsius(1).toFixed(2)}°C</h1>
      <h1>53 K = {kelvin(19).celsius.toFixed(2)}°C</h1>
      <h1>90 k {kelvin(8).fahrenheit.toFixed(2)}°F</h1>
    </>
  );
};
