import React from 'react';
import AppContainer from './src/navigations/AppNavigation';
import SignInScreen from "./src/screens/SignIn/SignInScreen";
import { Repo, AuthState } from './src/logic/repo';

export default class App extends React.Component {

    state = {
        authState: AuthState.UNDEFINED
    };

    componentDidMount() {
        this.forceUpdate()

        Repo.shared().authStateChanged = (state) => {
            console.log('asdasd');
            this.setState({ authState: state });
        };
    }

    render() {
        return (
            <>
                <AppContainer/>
                { this.state.authState !== AuthState.AUTHORIZED &&
                    <SignInScreen/>
                }
            </>
        );
    }
}

