import { Text } from 'react-native';
import { temperatureStyle } from './temperature.style';

export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={ temperatureStyle.temperatureText }>{ temperature } &deg;{unit}</Text>
  )
}
