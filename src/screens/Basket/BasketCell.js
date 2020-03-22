import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import styles from './styles';

export default class BasketCell extends React.Component {


    constructor(props) {
        super(props);
    }

    addToOrder(item) {
    }

    totalSum(item) {
        return "35.50 руб"
    }

    minusDish(dish) {

    }

    plusDish(dish) {

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
                    <TouchableHighlight underlayColor='clear' onPress={() => this.minusDish(dish)}>
                        <View style={styles.plusMinusBtn}>
                            <Text style={styles.plusMinusBtnText}>{"-"}</Text>
                        </View>
                    </TouchableHighlight>
                    <Text numberOfLines={1} style={styles.countText}>{dish.count}</Text>
                    <TouchableHighlight underlayColor='clear' onPress={() => this.plusDish(dish)}>
                        <View style={styles.plusMinusBtn}>
                            <Text style={styles.plusMinusBtnText}>{"+"}</Text>
                        </View>
                    </TouchableHighlight>
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
                <TouchableHighlight underlayColor='clear' onPress={() => this.addToOrder(this.props.item)}>
                    <View style={styles.addBtn}>
                        <Text style={styles.addBtnText}>{"Add More Dishes"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
