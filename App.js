import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DressingScreen from "./screens/DressingScreen";
import MarketScreen from "./screens/MarketScreen";
import ForumScreen from "./screens/ForumScreen";
import ProductScreen from "./screens/ProductScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SnapView from "./screens/SnapView";
import LoginScreen from "./screens/LoginScreen";

const {Navigator, Screen} = createBottomTabNavigator();

//console.log(createBottomTabNavigator())

class App extends React.Component {
    state = {
        isLogin: false,
    }

    getData() {
        try {
            AsyncStorage.getItem('token').then(value=> {
                if(value !== null && value === 'loginYes') {
                    console.log('token get');
                    this.setState({isLogin: true});
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.isLogin === false ? (
                    <LoginScreen/>
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
                            <Screen name="Product" component={ProductScreen} options={{
                                tabBarLabel:() => {return null},
                                title: 'Product page',
                                tabBarItemStyle: {display: "none"},
                                tabBarIconStyle: { display: "none" },
                                tabBarLabelStyle: { display: "none"}
                            }}/>
                            <Screen name="Photo" component={SnapView} options={{
                                tabBarLabel:() => {return null},
                                title: 'Photo page',
                                tabBarItemStyle: {display: "none"},
                                tabBarIconStyle: { display: "none" },
                                tabBarLabelStyle: { display: "none"}
                            }}/>
                            <Screen name="Login" component={LoginScreen} options={{
                                tabBarLabel:() => {return null},
                                tabBarItemStyle: {display: "none"},
                                tabBarIconStyle: { display: "none" },
                                tabBarLabelStyle: { display: "none"}
                            }}/>
                        </Navigator>
                    </NavigationContainer>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default App;
