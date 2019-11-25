import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'iVolos',
        headerStyle: {
            backgroundColor: '#c4463d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    componentWillMount() {
        firebase.database().ref('about').once('value', (data) => {

        })
    }

    render() {
        return (
            <View>
                <Text style={{ color: '#c4463d', fontWeight: '700', fontSize: 24, paddingHorizontal: 20, marginVertical: 25 }}>About Screen</Text>
                <Text style={{ paddingHorizontal: 20 }} >Volos (Greek: Βόλος) is a coastal port city in Thessaly situated midway on the Greek mainland, about 330 kilometres (205 miles) north of Athens and 220 kilometres (137 miles) south of Thessaloniki it's also the sixth-most-populous city of Greece. It is the capital of the Magnesia regional unit of Thessaly Region. Volos is the only outlet to the sea from Thessaly, the country's largest agricultural region. With a population of 144,449 (2011), it is an important industrial centre, while its port provides a bridge between Europe and Asia.</Text>
            </View>
        )
    }
}