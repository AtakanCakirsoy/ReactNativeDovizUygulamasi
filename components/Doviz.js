import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './Header';
import axios from 'axios';
import ListItem from './ListItem';

class Doviz extends Component {
    state = { data: [] };
    UNSAFE_componentWillMount() {
        /* Axiosu entegre edip, get metodunu çalıştırarak url'e gönderdik, hata almadan dönerse response edip logladık.
        Diğer videoda, logu kaldırık, dönen responsenin datasını alıp data arrayin içerisine aktarıyoruz.  */
        axios.get('https://api.canlidoviz.com/web/items?marketId=1&type=0')
            .then(response => this.setState({ data: response.data }));
        /*debugger; //ctrl+m yapıp debug'ı seçtiğinde bunun sayesinde tek tek gezebilirsin f12 yapıp
        const a = 5;//Debug almanın yararıda uygulama ilk açıldığında hangi metoda düşer, rendera düştüğünde hangi metoda gider vs. bilmek için*/
    }
    static navigationOptions = {
        tabBarLabel: 'Döviz',
    }
    renderRow(veri) {
        return <ListItem veri={veri} />;
    }
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
        const { mainView, headerView, scrollView } = styles;
        return (
            <View style={mainView}>
                <View style={headerView}>
                    <Header headerText="Döviz" />
                </View>
                <ScrollView style={scrollView}>
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
}
export default Doviz;
// {this.renderData()} scrollView arasındaki eski kod