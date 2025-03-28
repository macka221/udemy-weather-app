import { View, TextInput, Text } from 'react-native';
import { inputStyle } from './input.style';

export function Input({ defaultValue, unit, onChange }) {
  return (
    <View style={ inputStyle.root }>
      <TextInput
        style={inputStyle.input}
        maxLength={4} 
        placeholder='Type your temperature'
        defaultValue={ defaultValue.toString() }
        onChangeText={(text) => onChange(text) }
      />
      <Text style={ inputStyle.unit }>&deg;{unit}</Text>
    </View>
  );
}
