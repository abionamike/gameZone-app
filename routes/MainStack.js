import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './HomeStack';
import Modal from '../screens/Modal';

const MainStack = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeStack} />
            <Stack.Screen name="Modal" component={Modal} />
        </Stack.Navigator>
    )
}

export default MainStack;
