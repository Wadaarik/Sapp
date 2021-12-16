import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
=======
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
>>>>>>> 38beecf (add change login/signup)
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DressingScreen from "./screens/DressingScreen";
import MarketScreen from "./screens/MarketScreen";
import ForumScreen from "./screens/ForumScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {Navigator, Screen} = createBottomTabNavigator();

//console.log(createBottomTabNavigator())

<<<<<<< HEAD
class App extends React.Component {
    state = {
        isLogin: false,
        showLogin: true,
    }

    getData() {
        try {
            AsyncStorage.getItem('token').then(value=> {
                if(value !== null && value === 'loginYes') {
                    this.setState({isLogin: true});
                    console.log('token get');
                    console.log(this.state.isLogin);
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getData();
    }

    submitSignup() {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('token', 'loginYes')
                this.setState({isLogin: true});
                console.log('token save');
            } catch (e) {
                console.log(e)
            }
        }
        storeData();
        console.log(this.state);
    }


    submitLogin() {
        if(this.state.email === "gerard.em@mail.com" && this.state.password === "loituma") {
            const storeData = async () => {
                try {
                    await AsyncStorage.setItem('token', 'loginYes')
                    this.setState({isLogin: true});
                    console.log('token save');
                } catch (e) {
                    console.log(e)
                }
            }
            storeData();
            console.log(this.state);
        }
    }

    switchForm(value) {
        this.setState({ showLogin: value })
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.isLogin === false ? (
                    this.state.showLogin ? (
                        <View style={styles.containerLogin}>
                            <Text style={styles.title}>Connectez-vous</Text>

                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                onChangeText={(text) => { this.setState({ email: text }) }}
                                style={styles.input}
                                autoCapitalize='none'
                                keyboardType="email-address" />

                            <Text style={styles.label}>Mot de passe</Text>
                            <TextInput
                                secureTextEntry={true}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                                style={styles.input}
                                autoCapitalize='none' />

                            <Pressable style={styles.button} onPress={() => {this.submitLogin()}}>
                                <Text style={styles.buttonText}>Se Connecter</Text>
                            </Pressable>

                            <Text style={styles.noAccount}>Pas encore inscrit ? <Text style={styles.noAccountLink} onPress={() => this.switchForm(false)} >Créer un compte</Text></Text>
                        </View>
                    ): (
                        <View style={styles.containerLogin}>
                            <Text style={styles.title}>Créez votre compte</Text>

                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                onChangeText={(text) => { this.setState({ email: text }) }}
                                style={styles.input}
                                autoCapitalize='none'
                                keyboardType="email-address" />

                            <Text style={styles.label}>Pseudo</Text>
                            <TextInput
                                onChangeText={(text) => { this.setState({ pseudo: text }) }}
                                style={styles.input}
                                autoCapitalize='none' />

                            <Text style={styles.label}>Sexe</Text>
                            <TextInput
                                onChangeText={(text) => { this.setState({ sexe: text }) }}
                                style={styles.input} />

                            <Text style={styles.label}>Mot de passe</Text>
                            <TextInput
                                secureTextEntry={true}
                                onChangeText={(text) => { this.setState({ password: text }) }}
                                style={styles.input}
                                autoCapitalize='none' />

                            <Text style={styles.label}>Confirmer le mot de passe</Text>
                            <TextInput
                                secureTextEntry={true}
                                onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                                style={styles.input}
                                autoCapitalize='none' />

                            <Pressable style={styles.button}
                                       onPress={() => {this.submitSignup()}}>
                                <Text style={styles.buttonText}>Je m'inscris</Text>
                            </Pressable>

                            <Text style={styles.noAccount}>Déjà un compte ? <Text style={styles.AccountLink} onPress={() => this.switchForm(true)} >Connectez-vous</Text></Text>
                        </View>
                    )
                ): (
                    <NavigationContainer>
                        <Navigator>
                            <Screen name="Dressing" component={DressingScreen} options={{
                                tabBarLabel:() => {return null},
                                title: '',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="wardrobe" color='#ED2D90' size={size} />
                                ),
                            }}/>
                            <Screen name="Marketplace" component={MarketScreen} options={{
                                tabBarLabel:() => {return null},
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="cart" color='#ED2D90' size={size} />
                                ),
                            }}/>
                            <Screen name="Home" component={HomeScreen}  options={{
                                tabBarLabel:() => {return null},
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="circle-slice-8" color='#ED2D90' size={size}/>
                                ),
                            }}/>
                            <Screen name="Forum" component={ForumScreen} options={{
                                tabBarLabel:() => {return null},
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="comment" color='#ED2D90' size={size}/>
                                ),
                            }}/>
                            <Screen name="Profile" component={ProfileScreen} options={{
                                tabBarLabel:() => {return null},
                                title: '',
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account-circle" color='#ED2D90' size={size} />
                                ),
                            }}/>
                        </Navigator>
                    </NavigationContainer>
                )}
            </View>
        )
    }
=======
export default function App() {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        getData();
    })

    const getData = () => {
        try {
            AsyncStorage.getItem('token').then(value=> {
                if(value === 'loginYes') {
                    setLogin(true);
                    console.log('token get');
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
            <NavigationContainer>
                <Navigator>
                    <Screen name="Dressing" component={DressingScreen} options={{
                        tabBarLabel:() => {return null},
                        title: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="wardrobe" color='#ED2D90' size={size} />
                        ),
                    }}/>
                    <Screen name="Marketplace" component={MarketScreen} options={{
                        tabBarLabel:() => {return null},
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cart" color='#ED2D90' size={size} />
                        ),
                    }}/>
                     <Screen name="Home" component={HomeScreen}  options={{
                         tabBarLabel:() => {return null},
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="circle-slice-8" color='#ED2D90' size={size}/>
                         ),
                     }}/>
                     <Screen name="Forum" component={ForumScreen} options={{
                         tabBarLabel:() => {return null},
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="comment" color='#ED2D90' size={size}/>
                         ),
                     }}/>
                    <Screen name="Profile" component={ProfileScreen} options={{
                        tabBarLabel:() => {return null},
                        title: '',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color='#ED2D90' size={size} />
                        ),
                    }}/>
                </Navigator>
            </NavigationContainer>
    );
>>>>>>> fceebbc (profile)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerLogin: {
        width: '90%',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
<<<<<<< HEAD
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    label: {
        width: '90%',
    },
    input: {
        width: '90%',
        borderColor: '#A6A6A6',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#ED2D90',
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15,
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#FFFFFF'
    },
    noAccount: {
        marginTop: 20,
    },
    noAccountLink: {
        color: 'blue',
    },
    AccountLink: {
        color: 'blue',
    },
});

export default App;
=======
});
>>>>>>> 0ccc025 (design page login)
