import {StyleSheet, Dimensions} from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    background: {
        width: '100%',
        aspectRatio: 1,
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    logo:{
        width: "21%",
        height: "21%",
    },
    logoText: {
        marginTop: 22,
        width: "36%",
        height: "8%",
        resizeMode: 'stretch'
    },
    inputsContainer: {
        top: Dimensions.get('window').height / 3.5,
        backgroundColor: "transparent",
        width: '100%',
        height: Dimensions.get('window').height / 1.5 - 106,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    inputText:{
        backgroundColor: "transparent",
        left: 30,
        right: 30,
        width: Dimensions.get('window').width - 60,
    },
    loginBtn:{
        left: 30,
        right: 30,
        backgroundColor:"#6DCAAB",
        borderRadius:40,
        position: 'absolute',
        height:56,
        alignItems:"center",
        justifyContent:"center",
        bottom:40
    },
    loginText:{
        color:"white",
        fontSize: 16,
    }
});

export default styles;