import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        toRedirect: false,
    }

    submit() {
        // if(this.state.email === "gerard@mail.fr" && this.state.password === "gerard"){
        if(this.state.email === "G" && this.state.password === "g"){
            console.warn(this.state);
            //Redirect
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter email"
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    style={styles.input}
                    keyboardType="email-address"/>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                    style={styles.input}/>
                <Button title="submit" onPress={() => {this.submit()}}/>
                <Text>Nouveau ici? Inscrit toi</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor:'black',
        margin:20,
        padding: 5,
    },
});

export default Login;