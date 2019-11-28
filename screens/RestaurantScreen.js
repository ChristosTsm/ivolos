import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, YellowBox, Linking } from 'react-native';
import { Image, Button, Icon, Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ratings from '../components/Ratings';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class RestaurantScreen extends React.Component {
    static navigationOptions = {
        title: 'Restaurants',
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
        this.ref = firebase.firestore().collection('restaurantsRec');
        this.restaurants = null;
        this.state = {
            isLoading: true,
            restaurants: [],
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const restaurants = [];
        querySnapshot.forEach((doc) => {
            const { name, linkurl, address, imageUri, cousine, rating } = doc.data();
            restaurants.push({
                key: doc.id,
                doc,
                name,
                address,
                imageUri,
                linkurl,
                rating,
                cousine
            });
        });
        this.setState({
            restaurants,
            isLoading: false
        });
    }


    componentDidMount() {
        this.restaurants = this.ref.orderBy('name').onSnapshot(this.onCollectionUpdate);
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Our Suggestions</Text>
                {this.state.isLoading ? <ActivityIndicator style={{ marginTop: 40 }} size="large" color='#c4463d' /> :
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.categories}>
                        {
                            this.state.restaurants.map((l, i) => (
                                <View key={i}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#c4463d', fontWeight: '400', fontSize: 24 }}>{l.name}</Text>
                                        <Ratings rating={l.rating} />
                                    </View>
                                    <Image
                                        resizeMode='cover'
                                        source={{ uri: l.imageUri }}
                                        style={{ width: null, height: 190 }}
                                        PlaceholderContent={<ActivityIndicator />}
                                    />

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon
                                            reverse
                                            size={12}
                                            name='location-on'
                                            color='#c4463d'
                                            raised={true}
                                        />
                                        <View style={{
                                            flex: 1, justifyContent: 'flex-end',
                                            alignItems: 'flex-start',
                                        }}>
                                            <Text style={{ fontSize: 16, color: '#c4463d' }}>
                                                {l.address}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon
                                            reverse
                                            size={12}
                                            name='kitchen'
                                            color='#c4463d'
                                            raised
                                        />
                                        <View style={{
                                            flex: 1, justifyContent: 'flex-end',
                                            alignItems: 'flex-start',
                                        }}>
                                            <Text style={{ fontSize: 16, color: '#c4463d' }}>
                                                {l.cousine}
                                            </Text>
                                        </View>
                                    </View>

                                    <Button
                                        raised={true}
                                        type='outline'
                                        onPress={() => { Linking.openURL(`${l.linkurl}`) }}
                                        icon={<Icon name='link' color='#c4463d' />}
                                        titleStyle={{ paddingLeft: 10, color: '#c4463d' }}
                                        buttonStyle={{ borderColor: '#c4463d', borderWidth: 2, borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#fff' }}
                                        title='More Info' />
                                    <Divider style={{ backgroundColor: '#c4463d', marginVertical: 25 }} />
                                </View>
                            ))
                        }
                    </ScrollView>
                }
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20,

    },
    categories: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 35
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        color: '#444',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 0.6
    }
})