import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import DressingScreen from "./screens/DressingScreen";
import MarketScreen from "./screens/MarketScreen";
import ForumScreen from "./screens/ForumScreen";
import ProductScreen from "./screens/ProductScreen";

const {Navigator, Screen} = createBottomTabNavigator();

//console.log(createBottomTabNavigator())

export default function App() {
    return (
            <NavigationContainer>
                <Navigator>
                    <Screen name="Dressing" component={DressingScreen} options={{
                        tabBarLabel: 'Dressing',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="wardrobe" color='#ED2D90' size={size} />
                        ),
                    }}/>
                    <Screen name="Marketplace" component={MarketScreen} options={{
                        tabBarLabel: 'Marketplace',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cart" color='#ED2D90' size={size} />
                        ),
                    }}/>
                     <Screen name="Home" component={HomeScreen} options={{
                         tabBarLabel: 'Home',
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="circle-slice-8" color='#ED2D90' size={size}/>
                         ),
                     }}/>
                     <Screen name="Forum" component={ForumScreen} options={{
                         tabBarLabel: 'Forum',
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="comment" color='#ED2D90' size={size}/>
                         ),
                     }}/>
                     <Screen name="Profile" component={ProfileScreen} options={{
                         tabBarLabel: 'Profile',
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="account-circle" color='#ED2D90' size={size} />
                         ),
                     }}/>

                    <Screen name="Product" component={ProductScreen} options={{ title: 'Product page' }}/>
                </Navigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});