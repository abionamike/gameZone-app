import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './routes/HomeStack';
import AboutStack from './routes/AboutStack';

export default function App() {
  const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  const Drawer = createDrawerNavigator();

  if(!fontsLoaded){
    return null;
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
