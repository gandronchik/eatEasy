import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import styles from './styles';

export default class OrdersHistoryCell extends React.Component {


    constructor(props) {
        super(props);
    }

    cancelOrder(item) {
    }

    totalSum(item) {
        return "35.50 руб"
    }

    renderDishView(dish) {
        return (
            <View style={styles.dishContainer}>
                <Image style={styles.dishPhoto} source={{ uri: dish.photo_url }} />
                <View style={styles.dishContentContainer}>
                    <Text numberOfLines={1} style={styles.dishName}>{dish.name}</Text>
                    <Text numberOfLines={1} style={styles.dishPrice}>{dish.price}</Text>
                </View>
                <View style={styles.dishCountContainer}>
                    <Text numberOfLines={1} style={styles.countText}>{dish.count.toString() + " шт"}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.cellContainer}>
                <Text style={styles.date}>{this.props.item.date}</Text>
                {
                    this.props.item.dishes.map(d => this.renderDishView(d))
                }
                <Text style={styles.totalSum}>{"Итого: " + this.totalSum(this.props.item)}</Text>
                <TouchableHighlight underlayColor='clear' onPress={() => this.cancelOrder(this.props.item)}>
                    <View style={styles.addBtn}>
                        <Text style={styles.addBtnText}>{"Cancel Order"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
