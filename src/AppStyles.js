import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 1;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 10;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderColor: '#cccccc',
    borderWidth: 0.0,
    borderRadius: 15
  },
  rightContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums - RECIPE_ITEM_HEIGHT,
  },
  photo: {
    width: RECIPE_ITEM_HEIGHT,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444444',
    marginLeft: 10
  },
  category: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 13,
    color: 'gray',
  },
  gm: {
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  buyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 15,
    width: 80,
    height: 30,
    borderColor: '#FF8C00',
    borderWidth: 1.0,
    borderRadius: 5
  },
  buyBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF8C00',
  }
});
