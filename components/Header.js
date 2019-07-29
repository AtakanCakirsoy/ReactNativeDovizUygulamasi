import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle, backgroundStyle } = styles;
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'sans-serif-medium'
    },
    viewStyle: {
        flex: 1,
        height: 60,
        justifyContent: 'center', //dikey 
        alignItems: 'center', //yatay
        shadowOffset: { width: 0, height: 2 }, //Gölge oluşturmak için
        shadowOpacity: 0.2,
        backgroundColor: '#00074A',
        borderBottomWidth: 3,
        borderColor: 'black',

    },
};

export default Header;