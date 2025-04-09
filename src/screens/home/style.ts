import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 20,
    paddingHorizontal: width * 0.05,
  },
  footer: {
    height: 100,
  },
});
