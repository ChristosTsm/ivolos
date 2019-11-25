import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Event from '../components/Event';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class Students extends React.Component {
    static navigationOptions = {
        title: 'Christmas Events & Sightseeing',
        headerStyle: {
            backgroundColor: '#c4463d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    componentDidMount() {
        this.readUserData();
    }

    readUserData() {
        firebase.database().ref('users/').on('value', function (snapshot) {
            console.log(snapshot.val())
            return (<Text>snapshot.val()</Text>)
        });
    }


    render() {

        return (
            <ScrollView>
                <Event
                    title='Christmas Concert: Christos Mastoras & Despina Vandi'
                    desc={this.readUserData()}
                    imageUri={require('../assets/xmas.jpg')}
                    openURL={() => Linking.openURL('https://allevents.in/volos/%CE%94%CE%AD%CF%83%CF%80%CE%BF%CE%B9%CE%BD%CE%B1-%CE%92%CE%B1%CE%BD%CE%B4%CE%AE-and-%CE%A7%CF%81%CE%AE%CF%83%CF%84%CE%BF%CF%82-%CE%9C%CE%AC%CF%83%CF%84%CE%BF%CF%81%CE%B1%CF%82-%CE%A4%CE%B5%CE%BB%CE%B5%CF%84%CE%AE-%CE%A6%CF%89%CF%84%CE%B1%CE%B3%CF%8E%CE%B3%CE%B7%CF%83%CE%B7%CF%82-%CE%92%CF%8C%CE%BB%CE%BF%CF%85/200018368723645?ref=eventlist-l4')}
                />
                <Event
                    title='Christmas Charity Bazar'
                    desc='Thu Dec 04 2019 at 01:00 pm - Saint Joseph'
                    imageUri={require('../assets/bazar.jpg')}
                    openURL={() => Linking.openURL('https://allevents.in/volos/%CE%A7%CF%81%CE%B9%CF%83%CF%84%CE%BF%CF%85%CE%B3%CE%B5%CE%BD%CE%BD%CE%B9%CE%AC%CF%84%CE%B9%CE%BA%CE%BF-%CF%86%CE%B9%CE%BB%CE%B1%CE%BD%CE%B8%CF%81%CF%89%CF%80%CE%B9%CE%BA%CF%8C-%CE%9C%CF%80%CE%B1%CE%B6%CE%AC%CF%81/200018368729311?ref=eventlist-l4')}
                />
                <Event
                    title='Christmas Charity Bazar'
                    desc='Thu Dec 05 2019 at 09:00 pm'
                    imageUri={require('../assets/xmas.jpg')}
                />
            </ScrollView>
        )
    }
};
