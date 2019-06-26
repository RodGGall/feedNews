import React from 'react'
import {ImageBackground, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'

const Article = ({item}) => (
    <TouchableOpacity style={styles.card}>
        <ImageBackground style={styles.image} source={{ uri: item.urlToImage}}>
        <Text style={styles.title}>{item.title}</Text>
        </ImageBackground>
    </TouchableOpacity>
)
var {height, width} = Dimensions.get('window');
export default Article

const styles = StyleSheet.create(
    {
        card: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 15,
            borderColor: '#e5e5e5',
            borderWidth: 1,
            marginBottom: 5,
            backgroundColor: '#828282',
        },
        title:{
            padding: 10,
            fontSize: 20,
            fontWeight:'bold',
            color: '#e5e5e5',
            textAlign: 'justify',
            textShadowColor: '#000',
            textShadowRadius: 15,
            textTransform: 'uppercase',
        },
        image: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            borderRadius: 15,
            width: width,
            height: height/4,
            resizeMode: 'cover',
            opacity: .80,
        }
    }
)