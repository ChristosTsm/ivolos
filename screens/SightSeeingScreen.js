import React, { Component } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, YellowBox } from 'react-native';
import { ListItem } from 'react-native-elements'
import * as firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

export default class SightSeeingScreen extends Component {

    static navigationOptions = {
        title: 'Sightseeing',
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
        this.ref = firebase.firestore().collection('sightsee');    // Discover
        this.sightseeing = null;  // Reccomendations
        this.state = {
            isLoading: true,
            sightseeinglist: [],
        };
    }


    onCollectionUpdate = (querySnapshot) => {
        const sightseeinglist = [];
        querySnapshot.forEach((doc) => {
            const { name, address, id, avatar_url } = doc.data();
            sightseeinglist.push({
                key: doc.id,
                doc,
                name,
                address,
                avatar_url
            });
        });
        this.setState({
            sightseeinglist,
            isLoading: false
        });
    }

    componentDidMount() {
        this.sightseeing = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    componentWillUnmount() {
        this.sightseeing = null;
        this.state = {
            isLoading: true,
            sightseeinglist: [],
        };
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: '700', color: '#c4463d' }}>Sightseeing</Text>
                {this.state.isLoading ? <ActivityIndicator style={{ marginTop: 40 }} size="large" color='#c4463d' /> :
                    <ScrollView
                        style={styles.categories}>
                        {
                            this.state.sightseeinglist.map((l, i) => (
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