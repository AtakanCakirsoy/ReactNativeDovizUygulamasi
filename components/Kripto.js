import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import Header from './Header';
import axios from 'axios';
import ListItem from './ListItem';

class Kripto extends Component {
    state = { data: [], refreshing: false };
    UNSAFE_componentWillMount() {
        /* Axiosu entegre edip, get metodunu çalıştırarak url'e gönderdik, hata almadan dönerse response edip logladık.
        Diğer videoda, logu kaldırık, dönen responsenin datasını alıp data arrayin içerisine aktarıyoruz.  */
        axios.get('https://web-paragaranti-pubsub.foreks.com/web-services/securities/exchanges/BIST/groups/E')
            .then(response => {
                this.setState({ data: response.data });
                console.log(response);
            })
            .then(error => console.log(error));
        /*debugger; //ctrl+m yapıp debug'ı seçtiğinde bunun sayesinde tek tek gezebilirsin f12 yapıp
        const a = 5;//Debug almanın yararıda uygulama ilk açıldığında hangi metoda düşer, rendera düştüğünde hangi metoda gider vs. bilmek için*/
    }
    static navigationOptions = {
        tabBarLabel: 'Kripto',
    }
    renderRow(veri) {
        return <ListItem veri={veri} />;
    }
    onRefresh = () => {
        this.setState({ refreshing: true });
        // In actual case set refreshing to false when whatever is being refreshed is done!
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 2000);
    };
    renderData() {
        //responseData ile https://rallycoding.herokuapp.com/api/music_albums şurdaki 1 tane {} arasındaki yere ulaşıyoruz.
        //ulaşıyoruz ve ordan sadece title' alıyoruz.
        //(responseData,Id) yazdık, Id yazmamızın sebebi program bize her dönen değer için
        //0,1,2 diye değer vericek. Uniqe key hatasını engellemek içinde Text'e key olarak o Id'yi atadık.
        /*return this.state.data.map((responseData, Id) =>
            <View>
                <Text key={Id}>{responseData.name}</Text>
            </View>); //responseData'nın içerinse data'yı aktarıyoruz.Detay o datayı alıyor.*/

    }
    render() {
        const { mainView, headerView, scrollView, titleView, textStyle } = styles;
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
                <ScrollView style={scrollView} refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        title="Pull to refresh"
                    />
                }
                >
                    <View>
                        {this.state.data.map((data, id) =>
                            <View key={id}>
                                {this.renderRow(data)}
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = {
    mainView: {
        flex: 2,
    },
    headerView: {
        flex: 0.1,
    },
    scrollView: {
        flex: 1.9,
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
// {this.renderData()} scrollView arasındaki eski kod