import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ProfileScreen = props => {


    function Link() {
        alert("redirect to page")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.head}>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.title}>Gérard Emerique</Text>
                            <Text style={styles.small}>gerard.em@mail.com</Text>
                        </View>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: 'https://img-4.linternaute.com/Bsk8mDIAf58n09YMTWEv5ZMmp9Y=/1500x/smart/ff1cb8ee9aa84df192f5b09ca6e83bbe/ccmcms-linternaute/13105923.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.title}>Actuellement, vous possédez <Text style={styles.pinkSpan}>45 </Text>
                                vêtements et <Text style={styles.pinkSpan}>10 </Text>tenues</Text>

                            <Text style={styles.smallLink} onPress={Link}>
                                Ajoutez des tenues et vêtements <MaterialCommunityIcons style={styles.smallLink}
                                                                                        name="chevron-right"/>
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.allParam}>
                    <View style={styles.parameters}>
                        <Text style={styles.parametersSubtitle}>Paramètres du compte</Text>
                        <View style={styles.list}>
                            <View style={styles.listTitle}>
                                <Text>Modifier le profil</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Préférences</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Langues</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Me déconnecter</Text>
                                <MaterialCommunityIcons name="door-closed" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Supprimer le compte</Text>
                                <MaterialCommunityIcons name="emoticon-cry-outline" style={styles.listMaterial}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.services}>
                        <View style={styles.parametersSubtitle}>
                            <Text style={styles.verTitle}>Service client</Text>
                            <Text style={styles.verTitle}>Ver 0.1</Text>
                        </View>
                        <View style={styles.list}>
                            <View style={styles.listTitle}>
                                <Text>FAQ</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Page Instagram</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Conditions Générales de ventes</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                            <View style={styles.listTitle}>
                                <Text>Politique de confidentialité</Text>
                                <MaterialCommunityIcons name="chevron-right" style={styles.listMaterial}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.image}>
                    <Image source={require('../assets/profile-design-sapp.png')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#ffffff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    head: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
    },
    header: {
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        width: '100%',
    },
    title: {
        color: '#0E0E26',
        fontSize: 25,
    },
    small: {
        color: 'rgba(14,14,38,0.56)',
        fontSize: 18
    },
    avatar: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderColor: 'rgba(0,0,0,.5)',
        borderWidth: .3,
    },
    pinkSpan: {
        color: '#ED2D90',
    },
    smallLink: {
        color: 'rgba(14,14,38,0.56)',
        fontSize: 15,
        marginVertical: 20,
        width: "100%",
        textAlign: "right"
    },
    allParam: {
        flex: 2,
        height: '100%',
        width: Dimensions.get('window').width,
    },
    parameters: {
        backgroundColor: '#ffffff',
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        width: Dimensions.get('window').width,
    },
    services: {
        backgroundColor: '#ffffff',
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        width: '100%',
    },
    parametersSubtitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get('window').width,
        marginLeft: -15,
        backgroundColor: "#f2f2f2",
        padding: 15,
        fontSize: 18,
    },
    verTitle: {
        color: '#0E0E26',
        fontSize: 18,
    },
    list: {
        width: '100%'
    },
    listTitle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: 'rgba(0,0,0,.5)',
        borderTopWidth: .3,
        borderBottomWidth: .3,
        fontSize: 15,
        padding: 15,
        color: "#0E0E26",
        width: '100%'
    },
    listMaterial: {
        fontSize: 20
    },
    image:{
        display: "flex",
        alignItems: "center",
        width: Dimensions.get('window').width,
    }

});

export default ProfileScreen;