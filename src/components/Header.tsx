import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import colors from '../styles/colors';
import userImg from '../assets/bruno.png';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import fonts from '../styles/fonts';

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Bruno</Text>
            </View>
            <Image 
                source={userImg}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        padding: 20,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,

    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }
})