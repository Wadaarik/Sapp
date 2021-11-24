import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProfileScreen = props =>{
    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
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
});

export default ProfileScreen;