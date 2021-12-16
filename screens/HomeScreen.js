import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';
import useStable from "react-native-web/dist/modules/useStable";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = props =>{
    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('token');
            console.log('token remove');
        } catch (e) {
            console.log(e)
        }
        // this.props.navigation.navigate('Home');
    }

    const goTo = () =>{
        //console.log("Props", props)
        props.navigation.push('Profile')
    }
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={goTo}>
                <View style={styles.button}>
                    <Text>Aller à Profile</Text>
                </View>
            </TouchableOpacity>
            <Pressable onPress={() => {removeData()}}>
                <Text>remove data</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: "lightblue",
        borderColor: "darkblue",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40
    }
});

export default HomeScreen;
