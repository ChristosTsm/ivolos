import React from 'react';
// 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// 
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import StudentScreen from './screens/StudentScreen';
import RestaurantScreen from './screens/RestaurantScreen';

export default class App extends React.Component {

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
  }
});

const AppContainer = createAppContainer(AppNavigator);