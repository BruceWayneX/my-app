import React from 'react';
import { Text, View, Button,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'


export default function SettingsScreen(props) {
    const { navigation } = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
      };
    
    
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <View style={{ flex: 1, backgroundColor: 'white' }} />

    <Text>Estamos en SettingsScreen</Text>
    <Text>Estamos en SettingsScreen</Text>
    <Text>Estamos en SettingsScreen</Text>
    <Text>Estamos en SettingsScreen</Text>
    <Text>Estamos en SettingsScreen</Text>
    <Button onPress={() => goToPage("Home")} title="Ir a HOME" />
    </SafeAreaView>
    );
}

