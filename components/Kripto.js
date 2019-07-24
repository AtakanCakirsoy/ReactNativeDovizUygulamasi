import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

class Kripto extends Component {
    static navigationOptions = {
        tabBarLabel: 'Kripto',
    }
    render() {
        const { mainView, headerView, textView, titleView, textStyle } = styles;
        return (
            <View style={mainView}>
                <View style={headerView}>
                    <Header headerText="Kripto" />
                </View>
                <View style={titleView}>
                    <Text style={textStyle}>Birim</Text>
                    <Text style={textStyle}>Alış</Text>
                    <Text style={textStyle}>Satış</Text>
                    <Text style={textStyle}>Değişim</Text>
                </View>
                <View style={textView}>
                    <Text>Kripto Sayfası</Text>
                </View>
            </View>
        );
    }
}
const styles = {
    mainView: {
        flex: 2,
    },
    headerView: {
        flex: 0.2,
        backgroundColor: "red",
    },
    textView: {
        flex: 1.8,
        backgroundColor: "blue",
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    textStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
export default Kripto;
