import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 15,
  },
  image: {
    width: width * 0.32,
    height: width * 0.32,
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
  favorite_container: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(12,15,20,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 15,
    right: 15,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  favorite_button: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    zIndex: 1,
  },
  favorite_item_container: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    padding: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  favorite_image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  favorite_content: {
    flex: 1,
    justifyContent: 'center',
  },
  favorite_title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  favorite_description: {
    color: '#aaa',
    fontSize: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  empty_message: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  },
  delete_button: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#D17842',
    borderRadius: 20,
    padding: 6,
  },
  delete_icon: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    height: 100,
  },
});
