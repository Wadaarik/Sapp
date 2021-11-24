import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomeScreen = props =>{
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