import React from 'react';
import { YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NeaAghialosScreen from './screens/NeaAghialosScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ChristmasScreen from './screens/ChristmasScreen';
import NightlifeScreen from './screens/NightlifeScreen';
import CoffeeScreen from './screens/CoffeeScreen';
import SightSeeingScreen from './screens/SightSeeingScreen';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    YellowBox.ignoreWarnings(['Setting a timer']);
    super(props);

    // Initialize Firebase
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  NeaAghialos: {
    screen: NeaAghialosScreen
  },
  Restaurant: {
    screen: RestaurantScreen
  },
  Nightlife: {
    screen: NightlifeScreen
  },
  CoffeeShops: {
    screen: CoffeeScreen
  },
  Sightsee: {
    screen: SightSeeingScreen
  },
  Christmas: {
    screen: ChristmasScreen
  },
});

const AppContainer = createAppContainer(AppNavigator);