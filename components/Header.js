import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';


const Header = (props) => {
    const { textStyle, viewStyle, backgroundStyle } = styles;
    return (
            <SafeAreaView style={viewStyle}>
            <StatusBar barStyle="light-content" backgroundColor="#4f6d7a"
                />
                <Text style={textStyle}>{props.headerText}</Text>
            </SafeAreaView>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: 'white',
        //fontFamily: 'sans-serif-medium'
    },
    viewStyle: {
        flex: 1,
        height: 60,
        justifyContent: 'center', //dikey 
        alignItems: 'center', //yatay
        shadowOffset: { width: 0, height: 2 }, //Gölge oluşturmak için
        shadowOpacity: 0.3,
        backgroundColor: '#00074A',
        borderBottomWidth: 3,
        borderColor: 'black',

    },
};

export default Header;