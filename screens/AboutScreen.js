import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, YellowBox } from 'react-native';
import * as firebase from 'firebase';
import { Image, Divider, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

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

    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings(['Setting a timer']);
        this.ref = firebase.firestore().collection('thingstodo');
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
                    <Text style={styles.txt} >Volos (Greek: Βόλος) is a coastal port city in Thessaly situated midway on the Greek mainland, about 330 kilometres (205 miles) north of Athens and 220 kilometres (137 miles) south of Thessaloniki it's also the sixth-most-populous city of Greece. It is the capital of the Magnesia regional unit of Thessaly Region. Volos is the only outlet to the sea from Thessaly, the country's largest agricultural region. With a population of 144,449 (2011), it is an important industrial centre, while its port provides a bridge between Europe and Asia.</Text>
                    <Text style={styles.src}>source: wikipedia.org</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.header}>Things To Do In Volos</Text>
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
                                            {l.route != null ?
                                                <Button
                                                    raised={true}
                                                    type='outline'
                                                    onPress={() => this.props.navigation.navigate(`${l.route}`)}
                                                    icon={<Icon name='link' color='#c4463d' />}
                                                    titleStyle={{ paddingLeft: 10, color: '#c4463d' }}
                                                    buttonStyle={{ borderColor: '#c4463d', borderWidth: 2, borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#fff' }}
                                                    title='Explore' />
                                                :
                                                <Text></Text>
                                            }
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