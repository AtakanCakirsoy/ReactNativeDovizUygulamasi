import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class ListItem extends Component {
    state = { change: [] };
    render() {
        const { mainView, nameView, buyView, sellView, textStyle, dailyView } = styles;
        const { name, buyPrice, sellPrice, dailyChange } = this.props.veri; //Diğer sayfalarda Listitem'e gönderdiğimiz verileri burda alıyoruz ve aşağıda bastırıyoruz.
        //sadece toFixed metodunu kullanınca sayıları yuvarlıyordu. Bu method ile sayıları yuvarlamıyor.
        function toFixedBuyPrice(num, fixed) {
            var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
            return num.toString().match(re)[0];
        }
        function toFixedSellPrice(num, fixed) {
            var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
            return num.toString().match(re)[0];
        }
        //Günlük olarak yükseliş veya azalış ifade etmek için
        if (dailyChange < 0) {
            this.state.change = "↓"
        }
        else {
            this.state.change = "↑"
        }
        return ( //Alttaki yapı önemli. Ana view row, diğer viewler column.
            <View style={mainView}>
                <View style={nameView}>
                    <Text style={textStyle}>{name}</Text>
                </View>
                <View style={buyView}>
                    <Text style={textStyle}>{toFixedBuyPrice(buyPrice,2)}</Text>
                </View>
                <View style={sellView}>
                    <Text style={textStyle}>{toFixedSellPrice(sellPrice,2)}</Text>
                </View>
                <View style={dailyView}>
                    <Text style={{ fontSize: 20 }}>{this.state.change}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    mainView: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    nameView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    buyView: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    sellView: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    dailyView: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    textStyle: {
        fontSize: 15,
    }

}
export default ListItem;
//<Text>{buyPrice.toFixed(2)}</Text> virgülden sonra 2 haneyi al demek.