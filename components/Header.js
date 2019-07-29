import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-navigation';


const Header = (props) => {
    const { textStyle, viewStyle, backgroundStyle } = styles;
    return (
            <SafeAreaView style={viewStyle}>
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
        shadowOpacity: 0.4,
        backgroundColor: '#00074A',
        borderBottomWidth: 3,
        borderColor: 'black',

    },
};

export default Header;