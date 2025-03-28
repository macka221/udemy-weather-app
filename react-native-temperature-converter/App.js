import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { UNITS, convertTemperatureTo, getOppositeUnit, isColdTemperature } from './utils/temperature.utils'
import { DisplayTemperature } from './components/temperature/temperature'
import { mainStyles } from './app.style';
import { ButtonConvert } from './components/button/button-conversion';
import { Input } from './components/input/input';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("C")
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const oppossiteUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const isCold = isColdTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit])
  
  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return '';
    }

    return convertTemperatureTo(inputValue, oppossiteUnit).toFixed(1);
  }

  return (
    <ImageBackground style={ mainStyles.backgroundImage } source={ currentBackground }>
      <SafeAreaProvider>
        <SafeAreaView style={ mainStyles.root }>
          <View style={ mainStyles.workspace }>
            <DisplayTemperature 
              temperature={ getConvertedTemperature() } 
              unit={oppossiteUnit}
            /> 
            <Input onChange={setInputValue} unit={currentUnit} defaultValue={ 0 } />
            <ButtonConvert unit={currentUnit} onPress={() => setCurrentUnit(oppossiteUnit)} /> 
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
 );
}


