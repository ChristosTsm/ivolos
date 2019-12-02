import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    Linking
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Font from 'expo-font';
import Category from '../components/Category';
import { SocialIcon } from 'react-native-elements'

const { width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor() {
        super()
        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
            'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf')
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                    blurRadius={5}
                    source={require('../assets/headerimg.jpg')}
                    style={styles.top}>
                    {this.state.fontLoaded ?
                        (<Text style={styles.txt}>Welcome to iVolos</Text>) :
                        (<ActivityIndicator size="large" />)
                    }
                </ImageBackground>
                <View style={styles.bottom}>
                    <ThemeProvider theme={theme}>
                        <Button
                            onPress={() => this.props.navigation.navigate('About')}
                            titleStyle={{ fontSize: 20, padding: 10 }}
                            buttonStyle={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                                backgroundColor: '#c4463d'
                            }}
                            style={styles.btn}
                            title="Things To Do"
                            iconRight
                            raised
                            icon={
                                <Icon
                                    name='rightcircleo'
                                    size={20}
                                    color='white'
                                />
                            }
                        />
                    </ThemeProvider>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={styles.inScrollView}>
                            <Text style={{ color: '#c4463d', fontWeight: '700', fontSize: 24, paddingHorizontal: 20 }}>
                                How can we help you?
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category
                                        imageUri={require('../assets/rest.jpg')}
                                        title={'Restaurants'}
                                    >
                                        <Button
                                            buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d', }}
                                            onPress={() => this.props.navigation.navigate('Restaurant')} title='Explore' />
                                    </Category>
                                    <Category
                                        imageUri={require('../assets/liquor.jpg')}
                                        title={'Nightlife'}
                                    >
                                        <Button buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }} onPress={() => this.props.navigation.navigate('Nightlife')} title='Explore' />
                                    </Category>

                                    <Category
                                        imageUri={require('../assets/coffee.jpg')}
                                        title={'Coffee Shops'}
                                    >
                                        <Button buttonStyle={{ borderRadius: 0, backgroundColor: '#c4463d' }} onPress={() => this.props.navigation.navigate('CoffeeShops')} title='Explore' />
                                    </Category>

                                    <Category
                                        imageUri={require('../assets/sightsee.jpg')}
                                        title={'Sightseeing'}
                                    >
                                        <Button buttonStyle={{ backgroundColor: '#c4463d', borderRadius: 0 }}
                                            onPress={() => this.props.navigation.navigate('Sightsee')} title='Explore' />
                                    </Category>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ color: '#c4463d', fontSize: 24, fontWeight: '700' }}>
                                    Discover Néa Ankhíalos
                                </Text>
                                <Text style={{ color: '#c4463d', fontSize: 12, fontWeight: '100' }}>
                                    A hidden paradise 15km away from the city of Volos.
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#c4463d' }}
                                        source={{ uri: ('https://tokalis.com/wp-content/uploads/2018/04/section1-image1.jpg') }}
                                    />
                                    <Button
                                        title='Learn More'
                                        raised
                                        buttonStyle={{
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,
                                            elevation: 5,
                                            backgroundColor: '#c4463d'
                                        }}
                                        onPress={() => this.props.navigation.navigate('NeaAghialos')}
                                    />
                                </View>

                                <View style={{ marginTop: 40 }}>
                                    <Text style={{ color: '#c4463d', fontSize: 24, fontWeight: '700' }}>
                                        Magical Christmas in Volos
                                    </Text>
                                    <Text style={{ color: '#c4463d', fontSize: 12, fontWeight: '100' }}>
                                        Guide yourself around the city and enjoy the magic atmosphere
                                    </Text>
                                    <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                        <Image
                                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#c4463d' }}
                                            source={require('../assets/xmas.jpg')}
                                        />
                                        <Button
                                            title='Learn More'
                                            raised
                                            buttonStyle={{
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 3.84,
                                                elevation: 5,
                                                backgroundColor: '#c4463d'
                                            }}
                                            onPress={() => this.props.navigation.navigate('Christmas')}
                                        />
                                    </View>
                                </View>
                                <View style={styles.social}>
                                    <SocialIcon
                                        type='twitter'
                                        raised
                                        style={{ backgroundColor: '#c4463d' }}
                                        onPress={() => { Linking.openURL('https://twitter.com/IvolosTg') }}
                                    />
                                    <SocialIcon
                                        type='facebook'
                                        raised
                                        style={{ backgroundColor: '#c4463d' }}
                                        onPress={() => { Linking.openURL('https://www.facebook.com/IVolos-TG-100547661432250/') }}
                                    />
                                    <SocialIcon
                                        type='instagram'
                                        raised
                                        style={{ backgroundColor: '#c4463d' }}
                                        onPress={() => { Linking.openURL('https://www.instagram.com/ivolos.tg/') }}
                                    />
                                </View>
                            </View>

                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
        );
    }
}



const theme = {
    Button: {
        raised: false
    }
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    btn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txt: {
        fontSize: 28,
        paddingBottom: 120,
        paddingTop: 50,
        color: '#c4463d',
        fontFamily: 'Montserrat-Regular'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bottom: {
        flex: 1,
    },
    btn: {
        width: 100,
    },
    inScrollView: {
        flex: 1,
        paddingTop: 20
    },
    social: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    }
});
