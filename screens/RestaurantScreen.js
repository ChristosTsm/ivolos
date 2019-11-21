import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';

const rec = [
    {
        name: 'Brothers Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        address: 'Address St. Random Number',
        link: 'Home'
    },
    {
        name: 'Example Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        address: 'Address St. Random Number 23',
        link: 'About'
    },
    {
        name: 'Example Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        address: 'Address St. Random Number 23',
        link: 'About'
    },
    {
        name: 'Example Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        address: 'Address St. Random Number 23',
        link: 'About'
    },
]

const discover = [
    {
        name: 'Discover Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        address: 'Address St. Random Number',
        link: 'Home'
    },
    {
        name: 'Example Discover Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        address: 'Address St. Random Number 23',
        link: 'About'
    },
    {
        name: 'Discover Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        address: 'Address St. Random Number',
        link: 'Home'
    },
    {
        name: 'Example Discover Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        address: 'Address St. Random Number 23',
        link: 'About'
    },
    {
        name: 'Discover Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        address: 'Address St. Random Number',
        link: 'Home'
    },
    {
        name: 'Example Discover Restaurant',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        address: 'Address St. Random Number 23',
        link: 'About'
    },
]

export default class RestaurantScreen extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: '700', color: '#c4463d' }}>Recommendations</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.categories}>
                    <View>
                        {
                            rec.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    address={l.subtitle}
                                    onPress={() => this.props.navigation.navigate(`${l.link}`)}
                                    bottomDivider
                                />
                            ))
                        }
                    </View>
                </ScrollView>
                <View style={styles.recommendations}>
                    <Text style={{ fontSize: 24, fontWeight: '700', color: '#c4463d' }}>Discover</Text>
                    <ScrollView>
                        {
                            discover.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    address={l.subtitle}
                                    bottomDivider
                                />
                            ))
                        }
                    </ScrollView>
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