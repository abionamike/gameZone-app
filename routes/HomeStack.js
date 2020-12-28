import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import { screenOptions } from '../styles/global';
import Header from '../shared/Header';
import { Image, ImageBackground } from 'react-native';

const HomeStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions, { headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height: 90 }} /> }}>
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({ headerTitle: () => <Header title="GameZone" navigation={navigation} /> })} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
    )
}

export default HomeStack;


