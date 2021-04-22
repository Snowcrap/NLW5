import React from 'react';
import {SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions

} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringPng from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';


export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text 
            style={styles.title}
            >
                Gerencie{'\n'}
                suas plantas de{'\n'}
                forma facil.   
            </Text>

            <Image 
                source={wateringPng}
                style={styles.image}
                resizeMode='contain'
            />

            <Text 
                style={styles.subtitle}
            > 
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você quando precisar.
            </Text> 

            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
                onPress={handleStart}
            >

                <Feather 
                    name="chevron-right"
                    style={styles.buttonIcon}
                />  

            </TouchableOpacity>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34,

    },
    subtitle: { 
        fontSize: 18,
        color: colors.heading,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontFamily: fonts.text,

    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})