import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import StudentScreen from './screens/StudentScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ChristmasScreen from './screens/ChristmasScreen';
import NightlifeScreen from './screens/NightlifeScreen';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
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
  Student: {
    screen: StudentScreen
  },
  Restaurant: {
    screen: RestaurantScreen
  },
  Nightlife: {
    screen: NightlifeScreen
  },
  Christmas: {
    screen: ChristmasScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);