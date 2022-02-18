import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

class LoginScreen extends React.Component {
    state = {
        showLogin: true,
    }

    getData() {
        try {
            AsyncStorage.getItem('token').then(value=> {
                if(value !== null && value === 'loginYes') {
                    this.props.navigation.navigate('Dressing');
                }
            })
        } catch (e) {
            console.log(e)
        }
    }

    componentDidMount() {
        this.getData();
    }

    submitSignup() {
        const storeData = async () => {
            try {
                await AsyncStorage.setItem('token', 'loginYes');
                this.props.navigation.navigate('Dressing');
            } catch (e) {
                console.log(e)
            }
        }
        storeData();
    }

    submitLogin() {
        console.log('eaze');
        if(this.state.email === "gerard@mail.com" && this.state.password === "loituma") {
            const storeData = async () => {
                try {
                    await AsyncStorage.setItem('token', 'loginYes');



                    // console.log(this)
                    // console.log(navigation.navigate('DressingScreen'))
                    // this.props.navigation.navigate('Dressing');
                } catch (e) {
                    console.log(e)
                }
            }
            storeData();
        }
    }

    switchForm(value) {
        this.setState({ showLogin: value })
    }

    render() {
        return (
            this.state.showLogin ? (
                <View style={styles.containerLogin}>
                    <Text style={styles.title}>Connectez-vous</Text>

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

                    <Pressable style={styles.button} onPress={() => {this.submitLogin()}}>
                        <Text style={styles.buttonText}>Se Connecter</Text>
                    </Pressable>

                    <Text style={styles.noAccount}>Pas encore inscrit ? <Text style={styles.noAccountLink} onPress={() => this.switchForm(false)} >Créer un compte</Text></Text>
                </View>
            ): (
                <View style={styles.containerLogin}>
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
                               onPress={() => {this.submitSignup()}}>
                        <Text style={styles.buttonText}>Je m'inscris</Text>
                    </Pressable>

                    <Text style={styles.noAccount}>Déjà un compte ? <Text style={styles.AccountLink} onPress={() => this.switchForm(true)} >Connectez-vous</Text></Text>
                </View>
            )
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerLogin: {
        width: '90%',
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
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
    AccountLink: {
        color: 'blue',
    },
});

export default LoginScreen;
