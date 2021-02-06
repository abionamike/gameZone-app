import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorum magni, delectus omnis nesciunt dignissimos amet corporis veritatis, 
                nihil recusandae maxime perferendis aspernatur illo beatae debitis 
                necessitatibus sunt eligendi nam tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorum magni, delectus omnis nesciunt dignissimos amet corporis veritatis, 
                nihil recusandae maxime perferendis aspernatur illo beatae debitis 
                necessitatibus sunt eligendi nam tenetur.
            </Text>
        </View>
    )
}

export default About;
