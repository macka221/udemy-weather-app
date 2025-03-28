import { StyleSheet, Text } from 'react-native';
import { mainStyles } from './app.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={ mainStyles.root }>
        <Text>Hello</Text>
      </SafeAreaView>
    </SafeAreaProvider>
 );
}


