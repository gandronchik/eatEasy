import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="MENU"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Menu');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="PROFILE"
            source={require('../../../assets/icons/profile.png')}
            onPress={() => {
              navigation.navigate('Profile');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="ORDERS"
            source={require('../../../assets/icons/history.png')}
            onPress={() => {
              navigation.navigate('OrdersHistory');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
