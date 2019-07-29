import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class ListItem extends Component {
    render() {
        const { mainView, nameView, buyView, sellView, textStyle, dailyView } = styles;
        const { name } = this.props.veri;
        const { Alış, Satış, Tür } = this.props.veri.value; //Diğer sayfalarda Listitem'e gönderdiğimiz verileri burda alıyoruz ve aşağıda bastırıyoruz.
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

        return ( //Alttaki yapı önemli. Ana view row, diğer viewler column.
            <View style={mainView}>

                <View style={nameView}>
                    <Text style={textStyle}>{name}</Text>
                </View>
                <View style={buyView}>
                    <Text style={textStyle}>{toFixedBuyPrice(Alış, 2)}</Text>
                </View>
                <View style={sellView}>
                    <Text style={textStyle}>{toFixedSellPrice(Satış, 2)}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    mainView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingBottom: 10,
        paddingTop: 10,
    },
    nameView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buyView: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sellView: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dailyView: {
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'center'
    }

}
export default ListItem;
//<Text>{buyPrice.toFixed(2)}</Text> virgülden sonra 2 haneyi al demek.
/* <View style={dailyView}>
                    {dailyChange < 0 ?
                    <Text style={{ fontSize: 20, color:"red",fontWeight:"bold" }}>↓</Text>
                    :dailyChange > 0 ?
                    <Text style={{ fontSize: 20, color:"green",fontWeight:"bold" }}>↑</Text>
                    :
                    <Text style={{ fontSize: 20, color:"yellow",fontWeight:"bold" }}>-</Text>
                    }
                </View> Önemli if yapısı*/