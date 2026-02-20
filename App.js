import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import CoursesDetailScreen from './src/screen/CoursesDetailScreen';
import CounterScreen from './src/screen/CounterScreen';
import BoxScreen from './src/screen/BoxScreen';
import BankScreen from './src/screen/BankScreen';
import ColorMixerScreen from './src/screen/ColorMixerScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return ( 

   <NavigationContainer>
    <Stack.Navigator  >
<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Ekran' }} />
 <Stack.Screen name="Details" component={DetailScreen} options={{ title: 'Detaylar' }} />
 <Stack.Screen name="CoursesDetails" component={CoursesDetailScreen} options={{ title: 'Kurs Detayları' }} />
  <Stack.Screen name="Counter" component={CounterScreen} options={{ title: 'Sayaç Uygulaması' }} />
   <Stack.Screen name="Box" component={BoxScreen} options={{ title: 'Kutu Uygulaması' }} />
    <Stack.Screen name="Bank" component={BankScreen} options={{ title: 'Banka Uygulaması' }} />
     <Stack.Screen name="Mixer" component={ColorMixerScreen} options={{ title: 'Renk Mixer Uygulaması' }} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
