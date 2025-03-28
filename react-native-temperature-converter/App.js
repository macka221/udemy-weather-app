import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { mainStyles } from './app.style';
import { Input } from './components/input/input';
import hotBackground from './assets/hot.png';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  return (
    <ImageBackground style={ mainStyles.backgroundImage } source={ hotBackground }>
      <SafeAreaProvider>
        <SafeAreaView style={ mainStyles.root }>
          <View style={ mainStyles.workspace }>
            <Text>{inputValue}</Text>
            <Input onChange={setInputValue} defaultValue={ 0 } />
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
 );
}


