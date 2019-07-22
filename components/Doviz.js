import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';

class Doviz extends Component {
    static navigationOptions = {
        tabBarLabel: 'Döviz',
    }
    render() {
        const { mainView, headerView, textView } = styles;
        return (
            <View style={mainView}>
                <View style={headerView}>
                    <Header headerText="Döviz" />
                </View>
                <View style={textView}>
                    <Text>Döviz Sayfası</Text>
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
    }
}
export default Doviz;
