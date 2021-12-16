import React from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';


class SignupScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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
    title: {
        textTransform: "uppercase",
        fontSize: 24,
        marginBottom: 30
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

<<<<<<< HEAD
<<<<<<< HEAD
export default SignupScreen;
=======
export default SignupScreen;
>>>>>>> a7622b9 (Page for login & signup; migrations table users & sexe)
=======
export default SignupScreen;
>>>>>>> 38beecf (add change login/signup)
