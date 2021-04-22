import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    
} from 'react-native';

import { Button } from '../components/Button'
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification (){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true);

    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    function handleSubmit(){
        navigation.navigate('Confirmation');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}

            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            
                            <Text style={styles.emoji}>
                                {isFilled ? ':)' : ':|'}
                            </Text>    

                            <Text style={styles.title}>
                                Como podemos{'\n'}chamar você?
                            </Text>  
                            
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && {borderColor: colors.green}
                                ]}   
                                placeholder='Digite um nome' 
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus} 
                                onChangeText={handleInputChange}
                            >

                            </TextInput>
                            <View style={styles.footer}>
                                <Button 
                                    title='Confirmar'
                                    onPress={handleSubmit}
                                />
                            </View>

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',

    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 30,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
        lineHeight: 32,
    },
    title: {
        marginTop: 20,
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading

    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
})