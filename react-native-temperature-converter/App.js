import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { UNITS, convertTemperatureTo, getOppositeUnit } from './utils/temperature.utils'
import { DisplayTemperature } from './components/temperature/temperature'
import { mainStyles } from './app.style';
import { Input } from './components/input/input';
import hotBackground from './assets/hot.png';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("C")
  const oppossiteUnit = getOppositeUnit(currentUnit);
  
  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return '';
    }

    return convertTemperatureTo(inputValue, oppossiteUnit).toFixed(1);
  }

  return (
    <ImageBackground style={ mainStyles.backgroundImage } source={ hotBackground }>
      <SafeAreaProvider>
        <SafeAreaView style={ mainStyles.root }>
          <View style={ mainStyles.workspace }>
            <DisplayTemperature 
              temperature={ getConvertedTemperature() } 
              unit={oppossiteUnit}
            /> 
            <Input onChange={setInputValue} unit={currentUnit} defaultValue={ 0 } />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
 );
}


