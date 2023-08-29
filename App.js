import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from './src/components/LoginForm';
import NavigationStack from './src/navitagion/NavigationStack';
import NavigationTab from './src/navitagion/NavigationTab';
import { SafeAreaView } from "react-native";




export default function App() {
  return (
    <NavigationContainer>
    {/* <NavigationStack/> */}
    <NavigationTab/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
