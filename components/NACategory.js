import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Badge, Icon } from 'react-native-elements';

export default class NACategory extends Component {
    render() {
        return (
            <View style={{ height: 300, width: 200, marginLeft: 20, borderWidth: 0.4, borderColor: '#c4463d' }}>
                <View style={{ flex: 2 }}>
                    <Image
                        source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 8, paddingTop: 8 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: '#c4463d' }}>{this.props.title}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Icon
                            containerStyle={{ flex: 1 }}
                            reverse
                            size={12}
                            name='location-on'
                            color='#c4463d'
                        />
                        <Text style={{ flex: 3, color: '#444' }}>{this.props.address}</Text>
                    </View>
                    {this.props.winter ?
                        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <Badge style={{ flex: 1 }} status="warning" /><Text style={{ flex: 2 }}>Winter Only</Text>
                        </View>
                        :
                        <Text></Text>
                    }
                </View>
                {this.props.children}
            </View>
        )
    }
}
