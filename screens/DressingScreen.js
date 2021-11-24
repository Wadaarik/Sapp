import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const DressingScreen = props =>{
    return(
        <View style={styles.container}>
            <Text>Dressing Screen</Text>
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

export default DressingScreen;