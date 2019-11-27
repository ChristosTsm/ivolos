import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, YellowBox } from 'react-native';
import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import 'firebase/firestore';


export default class RestaurantScreen extends Component {
    static navigationOptions = {
        title: 'Nightlife in Volos',
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
        this.ref = firebase.firestore().collection('night');    // Recommendations
        this.discRef = firebase.firestore().collection('discRef');  // Discover
        this.recommended = null;  // Reccomendations
        this.discover = null;  // Discover
        this.state = {
            isLoading: true,
            nightlifeStores: [],
            discStores: []
        };
    }


    onCollectionUpdate = (querySnapshot) => {
        const nightlifeStores = [];
        querySnapshot.forEach((doc) => {
            const { name, address, avatar_url } = doc.data();
            nightlifeStores.push({
                key: doc.id,
                doc,
                name,
                address,
                avatar_url
            });
        });
        this.setState({
            nightlifeStores,
            isLoading: false
        });
    }

    onCollectionDiscUpdate = (queryDiscSnapshot) => {
        const discStores = [];
        queryDiscSnapshot.forEach((doc) => {
            const { name, address, avatar_url } = doc.data();
            discStores.push({
                key: doc.id,
                doc,
                name,
                address,
                avatar_url
            });
        });
        this.setState({
            discStores,
            isLoading: false
        });
    }

    componentDidMount() {

        this.recommended = this.ref.onSnapshot(this.onCollectionUpdate);
        this.discover = this.discRef.onSnapshot(this.onCollectionDiscUpdate);
    }

    componentWillUnmount() {
        this.recommended = null;
        this.discover = null;
        this.state = {
            isLoading: true,
            restaurantsRec: [],
            discRest: []
        };
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: '700', color: '#c4463d' }}>Recommendations</Text>
                {this.state.isLoading ? <ActivityIndicator style={{ marginTop: 40 }} size="large" color='#c4463d' /> :
                    <ScrollView
                        style={styles.categories}>
                        {
                            this.state.nightlifeStores.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.address}
                                    onPress={() => this.props.navigation.navigate(`${l.link}`)}
                                    bottomDivider
                                />
                            ))
                        }
                    </ScrollView>
                }
                <View style={styles.recommendations}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#c4463d' }}>Discover</Text>
                    {this.state.isLoading ? <ActivityIndicator style={{ marginTop: 50 }} size="large" color='#c4463d' /> :
                        <ScrollView>
                            {
                                this.state.discStores.map((l, i) => (
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: l.avatar_url } }}
                                        title={l.name}
                                        subtitle={l.address}
                                        bottomDivider
                                    />
                                ))
                            }
                        </ScrollView>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 20
    },
    categories: {
        flex: 1,
        backgroundColor: '#fff',
    },
    recommendations: {
        flex: 2,
        backgroundColor: '#fff',
    }
})


