import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './Button';

class Menu extends Component {
    render() {
        const { mainStyle, viewStyle } = styles;
        return (
            <View style={mainStyle}>
                <View style={viewStyle}>
                    <Button>Döviz</Button>
                </View>
                <View style={viewStyle}>
                    <Button>Altın</Button>
                </View>
                <View style={viewStyle}>
                    <Button>Kripto</Button>
                </View>
            </View>
        )
    }
}
const styles = {
    mainStyle: {
        flex: 3,
        flexDirection: "row",
        height: 60,
        justifyContent: 'center', //dikey 
        alignItems: 'center', //yatay
        shadowOffset: { width: 0, height: 2 }, //Gölge oluşturmak için
        shadowOpacity: 0.2,
    },
    viewStyle: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'green',
        height: 60,
        justifyContent: 'center', //dikey 
        alignItems: 'center', //yatay
        shadowOffset: { width: 0, height: 2 }, //Gölge oluşturmak için
        shadowOpacity: 0.2,
        padding: 10
    },
};

export default Menu;