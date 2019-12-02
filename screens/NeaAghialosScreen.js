import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, YellowBox, Linking } from 'react-native';
import * as firebase from 'firebase';
import { Image, Divider, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import NACategory from '../components/NACategory';

export default class NeaAghialosScreen extends Component {
    static navigationOptions = {
        title: 'Nea Aghialos',
        headerStyle: {
            backgroundColor: '#c4463d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Setting a timer']);
        this.ref = firebase.firestore().collection('neaAghialos');
        this.ttd = null;
        this.state = {
            isLoading: true,
            ttd: [],
        };
    }


    onCollectionUpdate = (querySnapshot) => {
        const ttd = [];
        querySnapshot.forEach((doc) => {
            const { title, desc, imageUri, route } = doc.data();
            ttd.push({
                key: doc.id,
                title,
                desc,
                imageUri,
                route
            });
        });
        this.setState({
            ttd,
            isLoading: false
        });
    }

    componentDidMount() {
        this.ttd = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.header}>A bit of history</Text>
                    <Divider style={{ backgroundColor: '#c4463d' }} />
                    <Text style={styles.txt} >One of the most important towns in the county, etymologically, means "the state of the sea". It is known for its beautiful black sand beach, picturesque harbor, its pine-covered hill (Acropolis of ancient Pyrasos) and archaeological finds.
                      Archaeological sites are found throughout almost all of the town complex: ruins of secular buildings and early Christian churches with exquisite mosaics. One of the two airports in the prefecture of Anchialos is in N. Anchialos. The tourist infrastructure (hotels, rooms to let, transport, conference room) offers the visitor the opportunity for a comfortable holiday.</Text>
                    <Text style={styles.src}>source: Greek Travel Pages</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.header}>Spend a day in Nea Aghialos</Text>
                        <Divider style={{ backgroundColor: '#c4463d' }} />
                        {this.state.isLoading ? <ActivityIndicator style={{ marginTop: 40 }} size="large" color='#c4463d' /> :
                            <View style={styles.categories}>
                                {
                                    this.state.ttd.map((l, i) => (
                                        <View key={i} style={styles.itemContainer}>
                                            <Text style={styles.subheader}>{l.title}</Text>
                                            <Image
                                                resizeMode='cover'
                                                source={{ uri: l.imageUri }}
                                                style={{ width: null, height: 190 }}
                                                PlaceholderContent={<ActivityIndicator />}
                                            />
                                            <Text>{l.desc}</Text>
                                            {
                                                l.title === 'Enjoy Local Tsipouro' ?
                                                    <View>
                                                        <Text style={{ color: '#555', fontSize: 18, fontWeight: '700', paddingBottom: 5, paddingTop: 15 }}>Recommendations</Text>
                                                        <ScrollView
                                                            style={{ paddingBottom: 20 }}
                                                            horizontal={true}
                                                            showsHorizontalScrollIndicator={false}
                                                        >
                                                            <NACategory
                                                                imageUri={require('../assets/galaxias.jpg')}
                                                                title={'Galaxy Restaurant'}
                                                                address={'Diamantopoulou 2 Néa Ankhíalos'}
                                                            >
                                                                <Button
                                                                    buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                    onPress={() => { Linking.openURL('https://www.facebook.com/GalaxiasRestaurant/?epa=SEARCH_BOX') }}
                                                                    title='Explore'
                                                                />
                                                            </NACategory>
                                                            <NACategory
                                                                imageUri={require('../assets/remetzo.jpg')}
                                                                title={'Rementzo'}
                                                                address={'Néa Ankhíalos Beach'}
                                                            >
                                                                <Button
                                                                    buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                    onPress={() => { Linking.openURL('https://www.facebook.com/remetzo/?epa=SEARCH_BOX') }}
                                                                    title='Explore'
                                                                />
                                                            </NACategory>
                                                            <NACategory
                                                                imageUri={require('../assets/giousouri.jpg')}
                                                                title={'Giousouri'}
                                                                address={'Maltezou 3 Néa Ankhíalos'}
                                                            >
                                                                <Button
                                                                    buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                    onPress={() => { Linking.openURL('https://www.facebook.com/pages/%CE%A4%CE%BF-%CE%93%CE%B9%CE%BF%CF%85%CF%83%CE%BF%CF%85%CF%81%CE%B9/107831332693736') }}
                                                                    title='Explore'
                                                                />
                                                            </NACategory>
                                                        </ScrollView>
                                                    </View>
                                                    : l.title === 'Coffee Shops' ?
                                                        <View>
                                                            <Text style={{ color: '#555', fontSize: 18, fontWeight: '700', paddingBottom: 5, paddingTop: 15 }}>Recommendations</Text>
                                                            <ScrollView
                                                                style={{ paddingBottom: 20 }}
                                                                horizontal={true}
                                                                showsHorizontalScrollIndicator={false}
                                                            >
                                                                <NACategory
                                                                    imageUri={require('../assets/cielo.jpg')}
                                                                    title={'Cielo Seaside Bar'}
                                                                    address={'Elinikis Aeroporias 2 Néa Ankhíalos'}
                                                                >
                                                                    <Button
                                                                        buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                        onPress={() => { Linking.openURL('https://www.facebook.com/CIELO-682704091775438/?epa=SEARCH_BOX') }}
                                                                        title='Explore'
                                                                    />
                                                                </NACategory>
                                                                <NACategory
                                                                    imageUri={require('../assets/aiolia.jpg')}
                                                                    title={'Aiolia Beach Bar'}
                                                                    address={'Zarifi 2 Néa Ankhíalos'}
                                                                >
                                                                    <Button
                                                                        buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                        onPress={() => { Linking.openURL('https://www.facebook.com/AIOLIA.VOLOS/') }}
                                                                        title='Explore'
                                                                    />
                                                                </NACategory>
                                                                <NACategory
                                                                    imageUri={require('../assets/kentri.jpg')}
                                                                    title={'Kentri Drinks & Coffee'}
                                                                    address={'Kasneti 2 Néa Ankhíalos'}
                                                                >
                                                                    <Button
                                                                        buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                        onPress={() => { Linking.openURL('https://www.facebook.com/kentri.cafebar/') }}
                                                                        title='Explore'
                                                                    />
                                                                </NACategory>
                                                                <NACategory
                                                                    imageUri={require('../assets/alisaxni.jpg')}
                                                                    title={'Alisaxni Cafe Bar'}
                                                                    address={'Néa Ankhíalos Beach'}
                                                                >
                                                                    <Button
                                                                        buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                        onPress={() => { Linking.openURL('https://www.facebook.com/pages/Cafe-Bar-Alisaxni/174862549363478') }}
                                                                        title='Explore'
                                                                    />
                                                                </NACategory>
                                                            </ScrollView>
                                                        </View>
                                                        : l.title === 'Nightlife' ?
                                                            <View>
                                                                <Text style={{ color: '#555', fontSize: 18, fontWeight: '700', paddingBottom: 5, paddingTop: 15 }}>Recommendations</Text>
                                                                <ScrollView
                                                                    style={{ paddingBottom: 20 }}
                                                                    horizontal={true}
                                                                    showsHorizontalScrollIndicator={false}
                                                                >
                                                                    <NACategory
                                                                        imageUri={require('../assets/cielonight.jpg')}
                                                                        title={'Cielo Seaside Bar'}
                                                                        address={'Elinikis Aeroporias 2 Néa Ankhíalos'}
                                                                    >
                                                                        <Button
                                                                            buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                            onPress={() => { Linking.openURL('https://www.facebook.com/CIELO-682704091775438/?epa=SEARCH_BOX') }}
                                                                            title='Explore'
                                                                        />
                                                                    </NACategory>
                                                                    <NACategory
                                                                        imageUri={require('../assets/aiolianight.jpg')}
                                                                        title={'Aiolia Beach Bar Néa Ankhíalos'}
                                                                        address={'Zarifi 2 Néa Ankhíalos'}
                                                                    >
                                                                        <Button
                                                                            buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                            onPress={() => { Linking.openURL('https://www.facebook.com/AIOLIA.VOLOS/') }}
                                                                            title='Explore'
                                                                        />
                                                                    </NACategory>
                                                                    <NACategory
                                                                        imageUri={require('../assets/ambia.jpg')}
                                                                        title={'Ambia Yiala'}
                                                                        address={'Diamantopoulou 2 Néa Ankhíalos'}
                                                                        winter={true}
                                                                    >
                                                                        <Button
                                                                            buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }}
                                                                            onPress={() => { Linking.openURL('https://www.facebook.com/Ambia.Yiala/') }}
                                                                            title='Explore'
                                                                        />
                                                                    </NACategory>
                                                                </ScrollView>
                                                            </View>
                                                            : <Text> </Text>
                                            }

                                            <Divider style={{ backgroundColor: '#c4463d' }} />
                                        </View>
                                    ))
                                }
                            </View>
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        color: '#c4463d',
        fontWeight: '700',
        fontSize: 24,
    },
    subheader: {
        color: '#c4463d',
        fontWeight: '700',
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
    },
    itemContainer: {
        marginVertical: 15,

    },

})