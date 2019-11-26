import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import ThingsToDo from '../components/ThingsToDo';

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


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>A bit of history</Text>
                    <Text style={styles.txt} >Volos (Greek: Βόλος) is a coastal port city in Thessaly situated midway on the Greek mainland, about 330 kilometres (205 miles) north of Athens and 220 kilometres (137 miles) south of Thessaloniki it's also the sixth-most-populous city of Greece. It is the capital of the Magnesia regional unit of Thessaly Region. Volos is the only outlet to the sea from Thessaly, the country's largest agricultural region. With a population of 144,449 (2011), it is an important industrial centre, while its port provides a bridge between Europe and Asia.</Text>
                    <Text style={styles.src}>source: wikipedia.org</Text>

                    <Text style={styles.header}>Things To Do In Volos</Text>
                    <ThingsToDo
                        title='Walk Aside'
                        desc='Sprawling around the coastline of the Pagasetic Gulf, Volos has a long coastline to walk along. The marina spans from the ferry harbor to the University of Thessaly, and the shore continues even further, giving place to activities such as fishing, rowing and swimming. The marina is a car-free place, which means a lot of pedestrians walk there day and night and it is home to a lot of events such as concerts. Walk, run or enjoy the scenery or watch the sunset as fishing and sailing boats come and go.'
                        imageUri={require('../assets/walkvolos.jpg')}
                    />
                    <ThingsToDo
                        title='Shop and coffee break downtown'
                        desc='Sprawling around the coastline of the Pagasetic Gulf, Volos has a long coastline to walk along. The marina spans from the ferry harbor to the University of Thessaly, and the shore continues even further, giving place to activities such as fishing, rowing and swimming. The marina is a car-free place, which means a lot of pedestrians walk there day and night and it is home to a lot of events such as concerts. Walk, run or enjoy the scenery or watch the sunset as fishing and sailing boats come and go.'
                        imageUri={{ uri: ('https://www.taxydromos.gr/data/news/15450338171670512450.jpg') }}
                    />
                    <ThingsToDo
                        title='Discover the tsipouradiko tradition'
                        desc='If this city is renowned for something, its tsipouro. Tsipouradika are restaurants that serve tsipouro (a distilled spirit similar to raki) combined with mezes, which are delicious dishes ranging which include fresh fish and shrimps to salads and dips. Open at every time of the day you will see tsipouradika everywhere, as it is a tradition for the locals to go at least once a week. Most of the people will go to sea-side tsipouradika, though those in the know will adventure to the small streets.'
                        imageUri={{ uri: ('https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/03/tsipouro-flickr.jpg') }}
                    />
                    <ThingsToDo
                        title='Road trip to Mount Pelion'
                        desc='A dynamic seaside city, Volos differs from the other cities because of the adventurous mountain that lies in the background. Home to many traditional villages, Mount Pelion is a sought after destination among Greeks (especially Athenians) and foreigners that want to live their Greek myth. Here, you can drink a coffee gazing at the fantastic view, trek on the kalderimi roads and enjoy the traditional stone houses all at short distance from the city.'
                        imageUri={{ uri: ('https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/03/shutterstock_501629224-kotsovolos-panagiotis.jpg') }}
                    />
                    <ThingsToDo
                        title='Archeology Museums & Sightseeing'
                        desc='One of the oldest museums in Greece, the archeology museum of Volos houses many exquisite finds from early 20th-century to modern archaeological excavations in Thessaly. Exhibits on display include artefacts from the neolithic settlements of Dimini and Sesklo, the first neolithic settlement of Europe, as well as a wide variety of items from Ancient Greece.'
                        imageUri={{ uri: ('https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/03/shutterstock_136096673-volos-museum.jpg') }}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        paddingHorizontal: 20,
    },
    header: {
        color: '#c4463d',
        fontWeight: '700',
        fontSize: 24,
    },
    subheader: {
        color: '#c4463d',
        fontWeight: '300',
        fontSize: 20,
        marginHorizontal: 25,
    },
    src: {
        paddingHorizontal: 20,
        opacity: 0.4,
        fontSize: 8
    },
    txt: {
        paddingHorizontal: 20,
        fontSize: 15
    }

})