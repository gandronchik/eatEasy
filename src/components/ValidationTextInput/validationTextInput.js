import { TextInput } from 'react-native-paper';
import { View, Image } from 'react-native';
import React from "react";
import styles from './styles';

export const ValidationState = {
    UNDEFINED: 0,
    CORRECT: 1,
    INVALID: 2
}

export class ValidationTextInput extends React.Component {

    pointView() {
        console.log(this.props.validationState);
        if (this.props.validationState === ValidationState.CORRECT) {
            return <View style={[styles.point, {backgroundColor: '#6DCAAB'}]}>
                <Image source={require('../../../assets/icons/signup_ok.png')} style={styles.icon}/>
            </View>
        }

        if (this.props.validationState === ValidationState.INVALID) {
            return <View style={[styles.point, {backgroundColor: '#DD6F57'}]}>
                <Image source={require('../../../assets/icons/signup_error.png')} style={styles.icon}/>
            </View>
        }

        return <></>;
    }

    render() {
        return (<View style={this.props.style}>
            <TextInput
                selectionColor='#6DCAAB'
                label={this.props.label}
                theme={{colors: {primary: '#6DCAAB', placeholder: '#8E8D8E'}}}
                style={styles.input}
                underlineColor='#E5E5E5'
                onChangeText={this.props.onChangeText}
                returnKeyType = {this.props.returnKeyType}
                // ref = {this.props.ref}
                keyboardType={this.props.keyboardType}
                onBlur={this.props.onBlur}/>
            {this.pointView()}
        </View>);
    }
}