import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    borderRadius: 8,
  },
  favorite_button: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  animated_cart_button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cart_icon_button: {
    alignItems: 'center',
  },
  cart_action_row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cart_quantity: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 14,
    color: '#ff8c00',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  footer: {
    height: 20,
  },
});

export default style;
