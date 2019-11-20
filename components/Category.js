import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.8, borderColor: '#c4463d' }}>
                <View style={{ flex: 2 }}>
                    <Image
                        source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text style={{ fontWeight: '700', fontSize: 15, color: '#c4463d' }}>{this.props.title}</Text>
                </View>

            </View>
        )
    }
}
