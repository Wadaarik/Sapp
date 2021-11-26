import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        toRedirect: false,
    }

    submit() {
        if(this.state.email === "gerard@mail.fr" && this.state.password === "gerard") {
            //Redirect
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
                    keyboardType="email-address"/>

                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    style={styles.input}/>

                <Pressable style={styles.button}
                           onPress={() => {this.submit()}}
                >
                    <Text style={styles.buttonText}>Se Connecter</Text>
                </Pressable>
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
        paddingHorizontal: 5,
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
    }
});

export default Login;