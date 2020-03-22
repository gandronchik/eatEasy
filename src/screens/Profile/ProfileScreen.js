import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import styles from './styles';
import BasketImage from "../../components/MenuBasket/BasketImage";
import {Repo} from "../../logic/repo";

export default class ProfileScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'PROFILE',
    // headerLeft: (
    //     <MenuImage
    //         onPress={() => {
    //           navigation.openDrawer();
    //         }}
    //     />
    // ),
    headerRight: (
        <BasketImage
            onPress={() => {
              navigation.navigate('Basket');
            }}
        />
    )
  });

  constructor(props) {
    super(props);

    Repo.shared().getProfile().then(profile => {
      console.log(profile);
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    );
  }
}
