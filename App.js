import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import Altin from './components/Altin';
import Doviz from './components/Doviz';
import Kripto from './components/Kripto';
import DeviceInfo from 'react-native-device-info'; //npm install --save react-native-device-info
//get device info önemli. İçinde birden çok fonksiyon kontrolü var işe yarar
//Bu tarz frameworklar ile mesela interneti olup olmadığını kontrol edip, buna göre zorunlu olarak interneti açtırabilirsin
import StringOfLanguages from './components/StringOfLanguages';


const deviceCountry = DeviceInfo.getDeviceCountry();
console.log(deviceCountry);

if (deviceCountry === 'TR') {

  StringOfLanguages.setLanguage('tr');

} else {
  StringOfLanguages.setLanguage('en');
}

const TabNavigator = createBottomTabNavigator({
  Currency: Doviz,
  Gold: Altin,
  //Bitcoin: Kripto,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === 'Currency') {
          return (
            <Image
              source={require('./assets/money.png')}
              style={{ flex: 0.7, width: 30, height: 30, }} />
          );
        } else if (routeName === 'Gold') {
          return (
            <Image
              source={require('./assets/gold.png')}
              style={{ flex: 1, width: 30, height: 30, }} />
          );
        }
        else if (routeName === 'Bitcoin') {
          return (
            <Image
              source={require('./assets/bitcoin.png')}
              style={{ width: 30, height: 30, }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      activeBackgroundColor: '#00218B',
      //showLabel: false,
      style: {
        backgroundColor: '#00074A',//color you want to change
        //fontFamily: 'sans-serif-medium',
      },
      tabStyle: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        shadowOffset: { width: 0, height: 2 }, //Gölge oluşturmak için
        shadowOpacity: 0.2,
      }
    },
  }
);

export default createAppContainer(TabNavigator);

/*class App extends Component {
  render() {
    const { mainStyle, headerStyle, listeStyle, menuStyle } = styles;
    return (
      <View style={mainStyle}>
        <View style={headerStyle}>
          <Header />
        </View>
        <View style={listeStyle}>
          <Text>Liste</Text>
        </View>
        <View style={menuStyle}>
          <Menu/>
        </View>
      </View>
    );
  }
}
const styles = {
  mainStyle: {
    flex: 1,
    backgroundColor: "blue",
  },
  headerStyle: {
    flex: 1,
  },
  listeStyle: {
    flex: 7,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },
  menuStyle: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
}*/


/*tabBarOptions: {
activeTintColor: 'black', //'#e91e63', saydam // Tıklandığındaki rengi
inactiveTintColor: 'grey', // tıklı olmadığındaki rengi
labelStyle: {
fontSize: 12,
justifyContent: 'center',
alignItems: 'center'
},
style: {
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center'
},
}*/


