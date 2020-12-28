import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} color="#333" style={styles.menu} onPress={ () => navigation.toggleDrawer() } />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{ title }</Text>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#333',
    letterSpacing: 1,
    marginHorizontal: 5
  },
  menu: {
    left: 0,
    position: 'absolute'
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 5
  }
})
