import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './button-conversion.style';

export function ButtonConvert({ unit, onPress }) {
  return (
    <TouchableOpacity onPress={ onPress } style={ buttonStyles.button }>
      <Text style={ buttonStyles.buttonText } >Convert To &deg;{unit}</Text>
    </TouchableOpacity>
  )
}
