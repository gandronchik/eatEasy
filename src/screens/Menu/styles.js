import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  rightContainer: RecipeCard.rightContainer,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  gm: RecipeCard.gm,
  buyBtn: RecipeCard.buyBtn,
  buyBtnText: RecipeCard.buyBtnText,
  calendarContainer: {
    backgroundColor: '#fff'
  },
  list: {
    flex: 1,
    bottom: 0
  }
});

export default styles;
