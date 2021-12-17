import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';

const ProductScreen = ({ navigation: { goBack } }) =>{
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image source={require('../assets/example_pull.png')} style={{
                    width: 140,
                    height: 140,
                    resizeMode: 'contain'}}
                />
            </View>
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Product Screen</Text>
                <TouchableOpacity onPress={() => goBack()}>
                    <Text style={{color: '#000', padding: 5, fontSize: 22, marginTop: -2, borderWidth: 2, borderRadius: 20, borderColor: '#ED2D90'}}>
                        Retour
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        margin: 20,
        alignItems: 'flex-start',
        backgroundColor: "#f2f2f2",
        position: "relative",
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductScreen;