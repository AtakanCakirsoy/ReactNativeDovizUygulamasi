import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import Header from './Header';
import axios from 'axios';
import ListItem from './ListItem';
import strings from './StringOfLanguages';


class Altin extends Component {
    state = { data: [], refreshing: false };
    UNSAFE_componentWillMount() {
        /* Axiosu entegre edip, get metodunu çalıştırarak url'e gönderdik, hata almadan dönerse response edip logladık.
        Diğer videoda, logu kaldırık, dönen responsenin datasını alıp data arrayin içerisine aktarıyoruz.  */
        axios.get('https://finans.truncgil.com/today.json')
            .then(response => {
                let details = [];
                for (var i in response.data) {
                    if (response.data[i]["Tür"] === "Altın") {
                        console.log(response.data[i])
                        details.push({ name: i, value: response.data[i] })
                    }
                }

                this.setState({ data: details })
                console.log(this.state.data);
                /*debugger; //ctrl+m yapıp debug'ı seçtiğinde bunun sayesinde tek tek gezebilirsin f12 yapıp
                const a = 5;//Debug almanın yararıda uygulama ilk açıldığında hangi metoda düşer, rendera düştüğünde hangi metoda gider vs. bilmek için*/
            })
    }
    static navigationOptions = {
        tabBarLabel: strings.Altin
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
        const { mainView, headerView, scrollView, titleView, textBirim, textAlisveSatis } = styles;
        return (
            <View style={mainView}>
                <View style={headerView}>
                    <Header headerText={strings.Altin} />
                </View>
                <View style={titleView}>
                    <Text style={textBirim}>{strings.Birim}</Text>
                    <Text style={textAlisveSatis}>{strings.Alis}</Text>
                    <Text style={textAlisveSatis}>{strings.Satis}</Text>
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
        backgroundColor: '#00074A',
        height: '5%',
    },
    textStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBirim: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif-medium',
        color: 'white',
        textAlign: 'center',
    },
    textAlisveSatis: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif-medium',
        color: 'white',
        textAlign: 'center',
    },
}
export default Altin;
// {this.renderData()} scrollView arasındaki eski kod