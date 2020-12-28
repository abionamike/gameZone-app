import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ route }) => {
    const { title, rating, body } = route.params;
    const ratings = {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={styles.titleText}>{ title }</Text>
                <Text style={styles.titleText}>{ body }</Text>
                <View style={styles.rating}>
                    <Text style={styles.titleText}>GameZone Rating: </Text>
                    <Image source={ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

export default ReviewDetails;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontFamily: 'nunito-semibold',
        color: '#333',
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
});
