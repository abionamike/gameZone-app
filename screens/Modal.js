import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const Modal = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Modal Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  )
}

export default Modal;
