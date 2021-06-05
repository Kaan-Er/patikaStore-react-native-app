import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#ECEFF1',
    borderRadius: 5,
    width: 185,
  },
  image: {
    height: 200,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    flex: 1,
  },
  titleText: {fontSize: 18, fontWeight: 'bold'},
  price: {},
  priceText: {
    color: '#A8AAAA',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  inStock: {},
  inStockText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
