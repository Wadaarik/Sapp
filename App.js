import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const {Navigator, Screen} = createBottomTabNavigator();

//console.log(createBottomTabNavigator())

export default function App() {
    return (
            <NavigationContainer>
                <Navigator>
                     <Screen name="Home" component={HomeScreen} options={{
                         tabBarLabel: 'Home',
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="home" color='#ED2D90' size={size}/>
                         ),
                     }}/>
                     <Screen name="Profile" component={ProfileScreen} options={{
                         tabBarLabel: 'Profile',
                         tabBarIcon: ({ color, size }) => (
                             <MaterialCommunityIcons name="account-circle" color='#ED2D90' size={size} />
                         ),
                     }}/>
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