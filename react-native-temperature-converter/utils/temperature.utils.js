const UNITS = {
  celsius: 'C',
  fahrenheit: 'F',
};

function convertTemperatureTo(temperature, unitTo) {
  let convertedTemperature;

  switch (unitTo) {
    case UNITS.celsius:
      convertedTemperature = (temperature - 32) / 1.8;
      break;
    case UNITS.fahrenheit:
      convertedTemperature = temperature * 1.8 + 32;
      break;
    default:
      throw new Error('Invalid temperature unit, only supports Celsius and fahrenheit.');
  }

  return convertedTemperature;
}

function getOppositeUnit(unit) {
  return unit === UNITS.celsius ? UNITS.fahrenheit : UNITS.celsius;
}

function isColdTemperature(temperature, unit) {
  switch (unit) {
    case UNITS.celsius:
      return temperature <= 0;
    case UNITS.fahrenheit:
      return temperature <= 32;
    default:
      throw new Error('Invalid temperature unit, only supports celsius and fahrenheit.');
  }
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isColdTemperature }
