import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'nunito-bold',
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
});

export const screenOptions = {
    headerStyle: {
      backgroundColor: '#ddd',
      height: 90
    },
    headerTintColor: '#444',
    headerTitleAlign: 'center',
  }