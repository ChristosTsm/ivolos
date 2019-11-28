import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, YellowBox, Linking } from 'react-native';
import { Image, Button, Icon, Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Students extends React.Component {
    static navigationOptions = {
        title: 'Volos Events',
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
        this.ref = firebase.firestore().collection('events');
        this.events = null;
        this.state = {
            isLoading: true,
            events: [],
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
            const { name, date, place, time, linkurl, avatar_url } = doc.data();
            events.push({
                key: doc.id,
                doc,
                name,
                date,
                time,
                avatar_url,
                linkurl,
                place
            });
        });
        this.setState({
            events,
            isLoading: false
        });
    }


    componentDidMount() {
        this.events = this.ref.onSnapshot(this.onCollectionUpdate);
    }



    render() {

        return (
            <View style={styles.container}>

                {this.state.isLoading ? <ActivityIndicator style={{ marginTop: 40 }} size="large" color='#c4463d' /> :
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={styles.categories}>
                        {
                            this.state.events.map((l, i) => (
                                <View key={i} style={{ paddingVertical: 15 }}>
                                    <Text style={{ color: '#c4463d', fontWeight: '700', fontSize: 24 }}>{l.name}</Text>
                                    <Image
                                        resizeMode='contain'
                                        source={{ uri: l.avatar_url }}
                                        style={{ width: null, height: 190 }}
                                        PlaceholderContent={<ActivityIndicator />}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{
                                            flex: 1, justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}>


                                        </View>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon
                                                reverse
                                                name='location-on'
                                                color='#c4463d'
                                                size={15}
                                            />
                                            <Text style={{ fontSize: 16, color: '#c4463d' }}>
                                                {l.place}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon
                                                reverse
                                                name='schedule'
                                                color='#c4463d'
                                                size={15}
                                            />
                                            <Text style={{ fontSize: 16, color: '#c4463d', paddingRight: 5 }}>
                                                {l.date}
                                            </Text>
                                            <Text style={{ fontSize: 16, color: '#c4463d' }}>
                                                at {l.time}
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
    },
    header: {

    }
})