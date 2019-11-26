import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card, Button, Icon, Divider } from 'react-native-elements';

export default class ThingsToDo extends Component {
    render() {
        return (
            <View>
                <Card
                    title={this.props.title}
                    titleStyle={{ color: '#c4463d', fontWeight: '300' }}
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
                <Divider style={{ marginVertical: 15, backgroundColor: '#c4463d' }} />
            </View>
        )
    }
}
