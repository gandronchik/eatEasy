import {Dimensions, StyleSheet} from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
const MARGIN = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  orderBtn: {
    width: '100%',
    height: 60,
    bottom: 0,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center'

  },
  orderBtnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  cellContainer: {
    borderColor: '#cccccc',
    borderWidth: 1.0,
    borderRadius: 15,
    width: (SCREEN_WIDTH - 2 * MARGIN),
    marginLeft: MARGIN,
    marginTop: 20,
  },
  date: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dishContainer: {
    marginHorizontal: 10,
    marginTop: 15,
    height: 40,
    flex: 1,
    flexDirection: "row",
  },
  dishPhoto: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  dishContentContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  dishName: {
    fontSize: 15,
    marginBottom: 5,
  },
  dishPrice: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  dishCountContainer: {
    width: 50,
    flexDirection: "row",
  },
  countText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'right',
    alignSelf: 'center',
    width: 50,
  },
  totalSum: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    height: 24,
    marginLeft: 10,
  },
  addBtn: {
    marginHorizontal: 10,
    marginBottom: 10,
    flex: 1,
    height: 35,
    borderColor: 'red',
    borderWidth: 1.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    color:  'red',
    textAlign: 'center'
  }
});

export default styles;
