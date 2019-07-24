import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Image } from 'react-native';
import Altin from './components/Altin';
import Doviz from './components/Doviz';
import Kripto from './components/Kripto';

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
const TabNavigator = createBottomTabNavigator({
  Currency: Doviz,
  Gold: Altin,
  Bitcoin: Kripto,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Currency') {
          return (
            <Image
              source={require('./assets/money.png')}
              style={{ width: 30, height: 30, }} />
          );
        } else if (routeName === 'Gold') {
          return (
            <Image
              source={require('./assets/gold.png')}
              style={{ width: 30, height: 30 }} />
          );
        }
        else if (routeName === 'Bitcoin') {
          return (
            <Image
              source={require('./assets/bitcoin.png')}
              style={{ width: 30, height: 30 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);
export default createAppContainer(TabNavigator);
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


