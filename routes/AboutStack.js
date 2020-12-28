import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import { screenOptions } from '../styles/global';
import Header from '../shared/Header';

const AboutStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={screenOptions, { headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height: 90 }} /> }}>
      <Stack.Screen name="About" component={About} options={({ navigation }) => ({ headerTitle: () => <Header title="About GameZone" navigation={navigation} /> })} />
    </Stack.Navigator>
  )
}

export default AboutStack;
