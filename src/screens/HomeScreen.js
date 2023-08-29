import React from 'react'
import {View, Text, Button} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen(props){
    const { navigation } = props;

    const goToSettings = () => {navigation.navigate("Settings")};


    // console.log(props);
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, backgroundColor: 'white' }} />
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Button onPress={goToSettings} title ="Ir a Ajustes" />
        </SafeAreaView>
    );
}

