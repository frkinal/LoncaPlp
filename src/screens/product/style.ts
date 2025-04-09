import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  back_button: {
    padding: 10,
  },
  header_title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  favorite_button: {
    padding: 10,
  },
  product_image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  product_title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  product_price: {
    fontSize: 18,
    color: '#FFD700',
    marginVertical: 10,
  },
  product_sku: {
    color: '#bbb',
  },
  product_series: {
    color: '#bbb',
  },
  product_quantity: {
    color: '#bbb',
    marginBottom: 10,
  },
  details_container: {
    marginBottom: 20,
  },
  section_title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  product_description: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 5,
  },
  image_gallery_container: {
    marginBottom: 20,
  },
  gallery_image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  error_text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
});
export default style;
