import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';
import styles from './styles';
import BasketCell from "./BasketCell";
import BottomArrowImage from "../../components/BottomRowImage/BottomArrowImage";

export default class BasketScreen extends React.Component {

  static navigationOptions = {
    title: 'BASKET',
    headerLeft: (
        <BottomArrowImage
            onPress={() => {
              // navigator.
            }}
        />
    ),
  };

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

  makeOrder() {

  }

  renderCell = ({ item }) => (
    <BasketCell item={item}/>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.list}
          data={this.data}
          renderItem={this.renderCell}
        />
        <TouchableHighlight underlayColor='clear' onPress={() => this.makeOrder()}>
          <View style={styles.orderBtn}>
            <Text style={styles.orderBtnText}>{"Make Order"}</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
