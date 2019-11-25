import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class Event extends Component {
    render() {
        return (
            <View>
                <Card
                    title={this.props.title}
                    image={this.props.imageUri}>
                    <Text style={{ marginBottom: 10 }}>
                        {this.props.desc}
                    </Text>
                    <Button
                        onPress={this.props.openURL}
                        icon={<Icon name='info' color='#ffffff' />}
                        buttonStyle={{ backgroundColor: '#c4463d', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Learn More'
                        titleStyle={{ paddingHorizontal: 8 }} />
                </Card>
            </View>
        )
    }
}
