import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';

export default class Ratings extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                alignContent: 'center'
            }}>
                {
                    this.props.rating == 1 ?
                        <Icon name='star' size={18} color='#c4463d' />
                        : this.props.rating == 2 ?
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' size={18} color='#c4463d' />
                                <Icon name='star' size={18} color='#c4463d' />
                            </View>
                            : this.props.rating == 3 ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name='star' size={18} color='#c4463d' />
                                    <Icon name='star' size={18} color='#c4463d' />
                                    <Icon name='star' size={18} color='#c4463d' />
                                </View>
                                : this.props.rating == 3.5 ?
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name='star' size={18} color='#c4463d' />
                                        <Icon name='star' size={18} color='#c4463d' />
                                        <Icon name='star' size={18} color='#c4463d' />
                                        <Icon name='star-half' size={18} color='#c4463d' />
                                    </View>
                                    : this.props.rating == 4 ?
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name='star' size={18} color='#c4463d' />
                                            <Icon name='star' size={18} color='#c4463d' />
                                            <Icon name='star' size={18} color='#c4463d' />
                                            <Icon name='star' size={18} color='#c4463d' />
                                        </View>
                                        : this.props.rating == 4.5 ?
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon name='star' size={18} color='#c4463d' />
                                                <Icon name='star' size={18} color='#c4463d' />
                                                <Icon name='star' size={18} color='#c4463d' />
                                                <Icon name='star' size={18} color='#c4463d' />
                                                <Icon name='star-half' size={18} color='#c4463d' />
                                            </View>
                                            : this.props.rating == 5 ?
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Icon name='star' size={18} color='#c4463d' />
                                                    <Icon name='star' size={18} color='#c4463d' />
                                                    <Icon name='star' size={18} color='#c4463d' />
                                                    <Icon name='star' size={18} color='#c4463d' />
                                                    <Icon name='star' size={18} color='#c4463d' />
                                                </View>
                                                : <Text style={{ color: '#c4463d' }}>Rating not available</Text>
                }
            </View>
        )
    }
}
