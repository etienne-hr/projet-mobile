import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image} from "react-native";

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.input_container}>
                <Image source={require('../assets/loupe.png')} style={styles.picto}/>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre film'
                    onChangeText={onChangeText}
                />
            </View>
            <Button disabled={isDisabled} title='Recherche' onPress={() => props.handleClickButton()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        padding: 35,
        paddingTop: 25,
        paddingBottom: 20,
        backgroundColor: '#b00020',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        height: 50,
        paddingLeft: 10
    }
})