import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../shared/Card';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'; 
import ReviewForm from './ReviewForm';

const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { 
            title: 'Zelda, Breath of Fresh Air', 
            rating: 5, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '1' 
        },
        { 
            title: 'Gotta Catch Them All (again)', 
            rating: 4, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '2' 
        },
        { 
            title: 'Not So "Final" Fantasy', 
            rating: 3, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '3' 
        },
        { 
            title: 'Away in a manger', 
            rating: 3, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '4' 
        },
        { 
            title: 'What do you have to say', 
            rating: 3, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '5' 
        },
        { 
            title: 'Story time', 
            rating: 3, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '6' 
        },
        { 
            title: 'Twice as tall', 
            rating: 3, 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium, maxime iure, harum iste mollitia temporibus quasi, nostrum aliquid vel eaque hic modi ex ut amet. Nostrum quos ullam temporibus.', 
            key: '7' 
        },
    ]);
    
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReview) => (
            [review, ...currentReview ]
        ));
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' size={24} style={{ ...styles.modalToggle, marginBottom: 0, marginTop: 20 }} onPress={() => setModalOpen(false)} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name='add' size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    modalToggle: {
       marginBottom: 10,
       borderWidth: 1,
       borderColor: '#ddd',
       padding: 10,
       borderRadius: 10,
       alignSelf: 'center' ,
       backgroundColor: '#fff',
       elevation: 3,
    },
    modalContent: {
        flex: 1,
    }
})

