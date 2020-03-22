import React from 'react';
import {createRef} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import { Repo } from '../../logic/repo';
import { ValidationTextInput, ValidationState } from '../../components/ValidationTextInput/validationTextInput';

//TODO: Rename to SignUp
class SignInScreen extends React.Component {
    state={
        email:"",
        firstName:"",
        lastName:"",
        phone:""
    }

    input = createRef();

    async signUp() {
        if (!this.validateEmail(this.state.email) || !this.validateName(this.state.firstName) || !this.validateName(this.state.lastName) || !this.validatePhone(this.state.phone)) {
            return;
        }

        const res = await Repo.shared().signUp(this.state.email, this.state.firstName, this.state.lastName, this.state.phone);
        console.log(res);
    }

    validateEmail(email) {
        if (email.length === 0) {
            return ValidationState.UNDEFINED;
        }

        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase()) ? ValidationState.CORRECT : ValidationState.INVALID;
    }

    validateName(name) {
        if (name.length === 0) {
            return ValidationState.UNDEFINED;
        }

        const expression = /^([A-Za-zА-Яа-я]){2,50}$/;

        return expression.test(String(name).toLowerCase()) ? ValidationState.CORRECT : ValidationState.INVALID;
    }

    validatePhone(phone) {
        if (phone.length === 0) {
            return ValidationState.UNDEFINED;
        }

        const expression = /^((\+375|80)+(25|29|33|44)+([0-9]){7})$/;

        return expression.test(String(phone).toLowerCase()) ? ValidationState.CORRECT : ValidationState.INVALID;
    }

    focusNext() {
        console.log('!!!!!!!!!!!!!!!')
        console.log(this.input.current.getElement())
    }

    render(){
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../../assets/icons/signup_background.png')}>
                    <Image style={styles.logo} source={require('../../../assets/icons/logo.png')}/>
                    <Image style={styles.logoText} source={require('../../../assets/icons/eat_easy.png')}/>
                </ImageBackground>
                <KeyboardAvoidingView  behavior="padding" style={styles.inputsContainer}>
                    <ValidationTextInput
                        style={styles.inputText}
                        label='Email'
                        onChangeText={text => this.setState({email:text})}
                        validationState={this.validateEmail(this.state.email)}
                        returnKeyType='next'
                        keyboardType='email-address'
                        // onBlur={_ => {
                        //     if (this.input) {
                        //         this.focusNext()
                        //         // this.input.focus()
                        //     }
                        // }}
                    />
                    <ValidationTextInput
                        style={styles.inputText}
                        label='Имя'
                        onChangeText={text => this.setState({firstName:text})}
                        validationState={this.validateName(this.state.firstName)}
                        returnKeyType='next'
                        ref={this.input}
                        // onSubmitEditing={(event) => {
                        //     this.surnameInput.focus()
                        // }}
                        keyboardType='default'
                        onBlur={_ => {}}
                    />
                    <ValidationTextInput
                        style={styles.inputText}
                        label='Фамилия'
                        onChangeText={text => this.setState({lastName:text})}
                        validationState={this.validateName(this.state.lastName)}
                        returnKeyType='next'
                        // inputRef={(input) => {
                        //     this.surnameInput = input
                        // }}
                        // onSubmitEditing={(event) => {
                        //     this.phoneInput.focus()
                        // }}
                        keyboardType='default'
                        onBlur={_ => {}}
                    />
                    <ValidationTextInput
                        style={styles.inputText}
                        label='Телефон'
                        onChangeText={text => this.setState({phone:text})}
                        validationState={this.validatePhone(this.state.phone)}
                        returnKeyType='done'
                        keyboardType='phone-pad'
                        // inputRef={(input) => {
                        //     this.phoneInput = input
                        // }}
                        onBlur={_ => {}}
                    />
                </KeyboardAvoidingView>
                <TouchableOpacity style={styles.loginBtn} onPress={_ => this.signUp()}>
                    <Text style={styles.loginText}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignInScreen;