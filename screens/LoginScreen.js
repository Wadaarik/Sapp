import React from 'react';
import {View, Text, TextInput, Pressable, Button, StyleSheet, AppRegistry} from 'react-native';
<<<<<<< HEAD
<<<<<<< HEAD
import AsyncStorage from '@react-native-async-storage/async-storage';
=======

>>>>>>> a7622b9 (Page for login & signup; migrations table users & sexe)
=======
import AsyncStorage from '@react-native-async-storage/async-storage';
>>>>>>> 38beecf (add change login/signup)

class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        toRedirect: false,
<<<<<<< HEAD
<<<<<<< HEAD
        showLogin: true,
    }

    submit() {
        // if(this.state.email === "gerard@mail.fr" && this.state.password === "gerard") {
        if(this.state.email === "g" && this.state.password === "g") {
            //Redirect
            const storeData = async () => {
                try {
                    await AsyncStorage.setItem('token', 'loginYes')
                    console.log('token save');
                } catch (e) {
                    console.log(e)
                }
            }
            storeData();
=======
=======
        showLogin: true,
>>>>>>> 38beecf (add change login/signup)
    }

    submit() {
        // if(this.state.email === "gerard@mail.fr" && this.state.password === "gerard") {
        if(this.state.email === "g" && this.state.password === "g") {
            //Redirect
<<<<<<< HEAD
>>>>>>> a7622b9 (Page for login & signup; migrations table users & sexe)
=======
            const storeData = async () => {
                try {
                    await AsyncStorage.setItem('token', 'loginYes')
                    console.log('token save');
                } catch (e) {
                    console.log(e)
                }
            }
            storeData();
>>>>>>> 38beecf (add change login/signup)
            this.props.navigation.navigate('Home');
            //Reset state
            console.log(this.state);
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 38beecf (add change login/signup)
    switchForm(value) {
        this.setState({ showLogin: value })
    }

<<<<<<< HEAD
    render() {
        return (
            <View style={styles.container}>
                {this.state.showLogin ? (
                    <View style={styles.container2}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            style={styles.input}
                            autoCapitalize='none'
                            keyboardType="email-address" />

                        <Text style={styles.label}>Mot de passe</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Pressable style={styles.button} onPress={() => {this.submit()}}>
                            <Text style={styles.buttonText}>Se Connecter</Text>
                        </Pressable>

                        <Text style={styles.noAccount}>Pas encore inscrit ? <Text style={styles.noAccountLink} onPress={() => this.switchForm(false)} >Créer un compte</Text></Text>
                    </View>
                ): (
                    <View style={styles.container2}>
                        <Text style={styles.title}>Créez votre compte</Text>

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            style={styles.input}
                            autoCapitalize='none'
                            keyboardType="email-address" />

                        <Text style={styles.label}>Pseudo</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ pseudo: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Text style={styles.label}>Sexe</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ sexe: text }) }}
                            style={styles.input} />

                        <Text style={styles.label}>Mot de passe</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Text style={styles.label}>Confirmer le mot de passe</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Pressable style={styles.button}
                                   onPress={() => {this.submit()}}>
                            <Text style={styles.buttonText}>Je m'inscris</Text>
                        </Pressable>

                        <Text style={styles.noAccount}>Déjà un compte ? <Text style={styles.AccountLink} onPress={() => this.switchForm(true)} >Connectez-vous</Text></Text>
                    </View>
                )}
=======
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    style={styles.input}
                    autoCapitalize='none'
                    keyboardType="email-address" />

                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    style={styles.input}
                    autoCapitalize='none' />

                <Pressable style={styles.button} onPress={() => {this.submit()}}>
                    <Text style={styles.buttonText}>Se Connecter</Text>
                </Pressable>

                <Text style={styles.noAccount}>Pas encore inscrit ? <Text style={styles.noAccountLink} onPress={() => this.props.navigation.navigate("Home")} >Créer un compte</Text></Text>
>>>>>>> a7622b9 (Page for login & signup; migrations table users & sexe)
=======
    render() {
        return (
            <View style={styles.container}>
                {this.state.showLogin ? (
                    <View style={styles.container2}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            style={styles.input}
                            autoCapitalize='none'
                            keyboardType="email-address" />

                        <Text style={styles.label}>Mot de passe</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Pressable style={styles.button} onPress={() => {this.submit()}}>
                            <Text style={styles.buttonText}>Se Connecter</Text>
                        </Pressable>

                        <Text style={styles.noAccount}>Pas encore inscrit ? <Text style={styles.noAccountLink} onPress={() => this.switchForm(false)} >Créer un compte</Text></Text>
                    </View>
                ): (
                    <View style={styles.container2}>
                        <Text style={styles.title}>Créez votre compte</Text>

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            style={styles.input}
                            autoCapitalize='none'
                            keyboardType="email-address" />

                        <Text style={styles.label}>Pseudo</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ pseudo: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Text style={styles.label}>Sexe</Text>
                        <TextInput
                            onChangeText={(text) => { this.setState({ sexe: text }) }}
                            style={styles.input} />

                        <Text style={styles.label}>Mot de passe</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ password: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Text style={styles.label}>Confirmer le mot de passe</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                            style={styles.input}
                            autoCapitalize='none' />

                        <Pressable style={styles.button}
                                   onPress={() => {this.submit()}}>
                            <Text style={styles.buttonText}>Je m'inscris</Text>
                        </Pressable>

                        <Text style={styles.noAccount}>Déjà un compte ? <Text style={styles.AccountLink} onPress={() => this.switchForm(true)} >Connectez-vous</Text></Text>
                    </View>
                )}
>>>>>>> 38beecf (add change login/signup)
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 38beecf (add change login/signup)
    container2: {
        width: '90%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
<<<<<<< HEAD
=======
>>>>>>> a7622b9 (Page for login & signup; migrations table users & sexe)
=======
>>>>>>> 38beecf (add change login/signup)
    label: {
        width: '90%',
    },
    input: {
        width: '90%',
        borderColor: '#A6A6A6',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#ED2D90',
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15,
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#FFFFFF'
    },
    noAccount: {
        marginTop: 20,
    },
    noAccountLink: {
        color: 'blue',
    },
<<<<<<< HEAD
<<<<<<< HEAD
    AccountLink: {
        color: 'blue',
    },
});

export default LoginScreen;
=======
});

export default LoginScreen;
>>>>>>> a7622b9 (Page for login & signup; migrations table users & sexe)
=======
    AccountLink: {
        color: 'blue',
    },
});

export default LoginScreen;
>>>>>>> 38beecf (add change login/signup)
