import React from 'react';
import {View, Text, TextInput, Pressable, Button, StyleSheet, AppRegistry} from 'react-native';


class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        toRedirect: false,
    }

    submit() {
        if(this.state.email === "gerard@mail.fr" && this.state.password === "gerard") {
            //Redirect
            this.props.navigation.navigate('Home');
            //Reset state
            console.log(this.state);
        }
    }

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
});

export default LoginScreen;