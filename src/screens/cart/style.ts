import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  list: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#fff',
  },
  price: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 8,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  control_btn: {
    backgroundColor: '#D17842',
    padding: 6,
    borderRadius: 8,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  empty_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty_text: {
    fontSize: 18,
    color: '#888',
  },
  footer: {
    position: 'absolute',
    bottom: 75,
    width: width,
    backgroundColor: '#000',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#fff',
  },
  checkout_btn: {
    backgroundColor: '#D17842',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkout_text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
