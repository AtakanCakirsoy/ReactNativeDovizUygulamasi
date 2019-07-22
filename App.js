import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
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
  One: Doviz,
  Two: Altin,
  Three: Kripto

});

export default createAppContainer(TabNavigator);

