import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import MenuScreen from "../screens/Menu/MenuScreen";
import BasketScreen from "../screens/Basket/BasketScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import OrdersHistoryScreen from "../screens/OrdersHistory/OrdersHistoryScreen";


const MainNavigator = createStackNavigator(
  {
    Menu: MenuScreen,
    Profile: ProfileScreen,
    OrdersHistory: OrdersHistoryScreen
  },
  {
    initialRouteName: 'Menu',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
);

const BasketNavigator = createStackNavigator(
    {
        Basket: BasketScreen
    },
    {
        initialRouteName: 'Basket',
        defaulfNavigationOptions: ({ navigation }) => ({
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
                flex: 1,
            }
        })
    }
);

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

const RootStack = createStackNavigator(
    {
        DrawerStack,
        Basket: BasketNavigator
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default AppContainer = createAppContainer(RootStack);

console.disableYellowBox = true;