import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Font from 'expo-font';
import Category from '../components/Category';
// 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const { height, width } = Dimensions.get('window');

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
                            buttonStyle={{ backgroundColor: '#c4463d', padding: 12 }}
                            style={styles.btn}
                            title="Get Started"
                            iconRight
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
                                        link='About'>
                                        <Button buttonStyle={{ backgroundColor: '#c4463d' }} onPress={() => this.props.navigation.navigate('Restaurant')} title='Explore' />
                                    </Category>
                                    <Category
                                        imageUri={require('../assets/liquor.jpg')}
                                        title={'Nightlife'}
                                    >
                                        <Button buttonStyle={{ backgroundColor: '#c4463d' }} onPress={() => this.props.navigation.navigate('Restaurant')} title='Explore' />
                                    </Category>

                                    <Category
                                        imageUri={require('../assets/coffee.jpg')}
                                        title={'Coffee Shops'}
                                    >
                                        <Button buttonStyle={{ backgroundColor: '#c4463d' }} onPress={() => this.props.navigation.navigate('Restaurant')} title='Explore' />
                                    </Category>

                                    <Category
                                        imageUri={require('../assets/sightsee.jpg')}
                                        title={'Sightseeing'}
                                    >
                                        <Button buttonStyle={{ backgroundColor: '#c4463d' }} onPress={() => this.props.navigation.navigate('Restaurant')} title='Explore' />
                                    </Category>
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ color: '#c4463d', fontSize: 24, fontWeight: '700' }}>
                                    Introducing iVolos Student
                                </Text>
                                <Text style={{ color: '#c4463d', fontSize: 12, fontWeight: '100' }}>
                                    Studying in Volos? Learn more about any discounts via our App
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#c4463d' }}
                                        source={require('../assets/college.jpg')}
                                    />
                                    <Button
                                        title='Learn More'
                                        buttonStyle={{ backgroundColor: '#c4463d' }}
                                        onPress={() => this.props.navigation.navigate('Student')}
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
                                            buttonStyle={{ backgroundColor: '#c4463d' }}
                                            onPress={() => this.props.navigation.navigate('Student')}
                                        />
                                    </View>
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
        height: '100%'
    },
    txt: {
        fontSize: 28,
        paddingVertical: 120,
        color: '#c4463d',
        fontFamily: 'Montserrat-light'
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
    }
});
