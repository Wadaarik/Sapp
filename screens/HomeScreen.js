import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { Input } from "react-native-elements";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const data = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    {
        id: "48932rh2-3da1-4732211f-bd96-145573290",
        title: "Fourth Item",
    },
    {
        id: "48932rh2-3da1-471f-bd96-1321273290144",
        title: "Fifth Item",
    },
    {
        id: "R43242332-3da1-471f-bd96-145573290144",
        title: "Sixth Item",
    },
    {
        id: "R4322-33213da1-471f-bd96-145573290144",
        title: "Seventh Item",
    },
    {
        id: "R432443132-3da1-471f-b96-145573290144",
        title: "Height Item",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Image source={require('../assets/example_pull.png')} style={{
            width: 140,
            height: 140,
            resizeMode: 'contain'}}/>
    </TouchableOpacity>
);

const HomeScreen = ({props, navigation}) =>{
    const goTo = () =>{
        //console.log("Props", props)
        props.navigation('Profile')
    }
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {setSelectedId(item.id); navigation.navigate('Product', { name: '', id: item.id })}}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.containerMeteo}>
                <Text style={styles.containerMeteoTitle}>Votre tenue pour aujourd'hui</Text>
                <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                    <MaterialCommunityIcons style={{flex: 1}} name="weather-pouring" color='#000' size={40} />
                    <View style={{flex: 2, flexDirection: 'column'}}>
                        <Text style={{fontSize: 19}}>21°C</Text>
                        <Text style={{fontSize: 19}}>Paris</Text>
                    </View>
                    <Text style={{flex: 2, fontSize: 21}}>Nuageux</Text>
                </View>
            </View>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center", height: "15%", marginRight: "5%"}}>
                <MaterialCommunityIcons name="magnify" color='#000' size={20} style={{marginBottom: 25}}/>
                <Input
                    style={{}}
                    containerStyle={{}}
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={{}}
                    errorMessage=""
                    errorStyle={{}}
                    errorProps={{}}
                    inputStyle={{width: '100%'}}
                    label=""
                    labelStyle={{}}
                    labelProps={{}}
                    leftIconContainerStyle={{}}
                    rightIconContainerStyle={{}}
                    placeholder="Rechercher"
                />
            </View>
            <FlatList
                numColumns={2}
                style={styles.listItem}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
            <TouchableOpacity style={{position: 'absolute', bottom: 50, right: 40}} onPress={goTo}>
                <View style={styles.button}>
                    <Text style={{color: '#FFF', padding: 5, fontSize: 30, marginTop: -2}}>+</Text>
                </View>
            </TouchableOpacity>
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
        flex: 3,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMeteo: {
        height: "20%",
        justifyContent: 'flex-start',
        flexDirection: "column",
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '4%',
        marginBottom: '4%',
        backgroundColor: "#f2f2f2"
    },
    containerMeteoTitle: {
        fontSize: 22,
        marginBottom: 20,
        width: 160
    },
    listItem: {
        position: "relative",
        height: "50%",
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
    },
    item: {
        backgroundColor: '#f9c2ff',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    button:{
        position: 'absolute',
        backgroundColor: "#ED2D90",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 100,
    }
});

export default HomeScreen;