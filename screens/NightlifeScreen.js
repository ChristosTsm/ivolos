import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
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

export default class NightlifeScreen extends Component {
    static navigationOptions = {
        title: 'Nightlife',
        headerStyle: {
            backgroundColor: '#c4463d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    constructor() {
        super();
        let ds = new FlatList.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            itemDataSource: ds
        }

        this.renderRow = this.renderRow.bind(this);
        // this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        this.getItems();
    }

    componentDidMount() {
        this.getItems();
    }

    getItems() {
        let items = [{ title: 'Item One', address: 'Adress One' }, { title: 'Item Two', address: 'Adress Two' }]

        this.setState({
            itemDataSource: this.state.itemDataSource.cloneWithRows(items)
        });
    }

    renderRow(item) {
        return (
            <View>
                {
                    rec.map((l, i) => (
                        <ListItem
                            key={i}
                            // leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={item.title}
                            address={item.address}
                            onPress={() => this.props.navigation.navigate(`${l.link}`)}
                            bottomDivider
                        />
                    ))
                }
            </View>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.itemDataSource}
                    renderRow={this.renderRow}
                />
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