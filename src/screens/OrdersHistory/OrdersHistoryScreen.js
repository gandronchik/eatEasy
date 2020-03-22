import React from 'react';
import {
  FlatList,
  SafeAreaView, Text, TouchableHighlight, View
} from 'react-native';
import styles from './styles';
import MenuImage from "../../components/MenuImage/MenuImage";
import OrdersHistoryCell from "./OrdersHistoryCell";
import BasketImage from "../../components/MenuBasket/BasketImage";

export default class OrdersHistoryScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'ORDERS',
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

    this.data = [
      {
        date: "Monday 27.01.20",
        dishes: [{
          photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
          name: "Утка с яблоком",
          price: "2.99 руб",
          count: 1
        },
          {
            photo_url: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            name: "Греча с вкусняшкой",
            price: "1.99 руб",
            count: 1
          },
          {
            photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg',
            name: "пицца лесица",
            price: "5.99 руб",
            count: 1
          }]
      },
      {
        date: "Вторник 28.01.20",
        dishes: [{
          photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
          name: "Утка с яблоком",
          price: "2.99 руб",
          count: 1
        },
          {
            photo_url: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            name: "Греча с вкусняшкой",
            price: "1.99 руб",
            count: 1
          },
          {
            photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg',
            name: "пицца лесица",
            price: "5.99 руб",
            count: 1
          }]
      },
      {
        date: "Среда 28.01.20",
        dishes: [{
          photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg',
          name: "Утка с яблоком",
          price: "2.99 руб",
          count: 1
        },
          {
            photo_url: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            name: "Греча с вкусняшкой",
            price: "1.99 руб",
            count: 1
          },
          {
            photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg',
            name: "пицца лесица",
            price: "5.99 руб",
            count: 1
          }]
      }
    ];
  }

  renderCell = ({ item }) => (
      <OrdersHistoryCell item={item}/>
  );

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <FlatList style={styles.list}
                    data={this.data}
                    renderItem={this.renderCell}
          />
        </SafeAreaView>
    );
  }
}

