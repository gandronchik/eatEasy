import React from 'react';
import {FlatList, ScrollView, Text, View, TouchableHighlight, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import CalendarStrip from '../../components/Calendar/CalendarStrip';
import BasketImage from "../../components/MenuBasket/BasketImage";


export default class MenuScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'МЕНЮ',
        headerLeft: (
            <MenuImage
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
        ),
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
        this.state = {
            selectedDate: new Date(),
        };
    }

    onPressRecipe = item => {
        // this.props.navigation.navigate('Recipe', { item });
    };

    addToBag = item => {
        // this.props.navigation.navigate('Recipe', { item });
    };

    renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='clear' onPress={() => this.onPressRecipe(item)}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{ uri: item.photo_url }} />
                <View style={styles.rightContainer}>
                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={3} style={styles.category}>{"Божественно вкусный и уремово сочный вкус и аромат. Сами все понимаете"}</Text>
                    <Text style={styles.gm}>{"150 гр"}</Text>
                    <TouchableHighlight underlayColor='clear' onPress={() => this.addToBag(item)}>
                        <View style={styles.buyBtn}>
                            <Text style={styles.buyBtnText}>{"3.99 руб"}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </TouchableHighlight>
    );

    render() {
        return (
            <SafeAreaView>
                <View style={styles.calendarContainer}>
                    <CalendarStrip
                        selectedDate={this.state.selectedDate}
                        onPressDate={(date) => {
                            this.setState({ selectedDate: date });
                        }}
                        onPressGoToday={(today) => {
                            this.setState({ selectedDate: today });
                        }}
                        onSwipeDown={() => {
                            // alert('onSwipeDown');
                        }}
                        markedDate={['2020-01-27', '2020-02-02']}
                        weekStartsOn={1} // 0, 1,2,3,4,5,6 for S M T W T F S, defaults to 0
                    />
                    {/*<SectionList*/}
                    {/*    vertical*/}
                    {/*    renderItem={({item}) => <ListItem title={item} />}*/}
                    {/*    renderSectionHeader={({section}) => <Header title={section.title} />}*/}
                    {/*    sections={[ // homogeneous rendering between sections*/}
                    {/*        {data: [...], title: ...},*/}
                    {/*        {data: [...], title: ...},*/}
                    {/*        {data: [...], title: ...},*/}
                    {/*    ]}*/}
                    {/*/>*/}
                    <FlatList
                        // style={styles.list}
                        vertical
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        data={recipes
                        }
                        renderItem={this.renderRecipes}
                        keyExtractor={item => `${item.recipeId}`}
                    />
                </View>
            </SafeAreaView>
        );
    }
}