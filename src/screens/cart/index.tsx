import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {useStore} from '../../store/store';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppTabNavigationProp} from '@navigators/types';
import style from './style';
export const CartScreen = () => {
  const navigation = useNavigation<AppTabNavigationProp>();
  const CartList = useStore((state: any) => state.CartList);
  const increment = useStore((state: any) => state.incrementCartItemQuantity);
  const decrement = useStore((state: any) => state.decrementCartItemQuantity);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const CartPrice = useStore((state: any) => state.CartPrice);
  useEffect(() => {
    calculateCartPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CartList]);
  const renderItem = ({item}: any) => (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('Product', {
          id: item.content._id.$oid,
        })
      }>
      <View style={style.card}>
        <Image source={{uri: item.content.main_image}} style={style.image} />
        <View style={style.details}>
          <Text style={style.name}>{item.content.names.en}</Text>
          <Text style={style.price}>{item.content.price} $</Text>
          <View style={style.controls}>
            <Pressable
              style={style.control_btn}
              onPress={() => decrement(item.content._id.$oid)}>
              <AntDesign name="minus" size={16} color="#fff" />
            </Pressable>
            <Text style={style.quantity}>{item.quantity}</Text>
            <Pressable
              style={style.control_btn}
              onPress={() => increment(item.content._id.$oid)}>
              <AntDesign name="plus" size={16} color="#fff" />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={style.container}>
      <Text style={style.header}>Cart</Text>
      {CartList.length === 0 ? (
        <View style={style.empty_container}>
          <Text style={style.empty_text}>Cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={CartList}
            keyExtractor={item => item.content._id.$oid}
            renderItem={renderItem}
            contentContainerStyle={style.list}
            ListFooterComponent={<View style={{height: 100}} />}
          />
          <View style={style.footer}>
            <Text style={style.total}>Total: {CartPrice} $</Text>
            <Pressable style={style.checkout_btn}>
              <Text style={style.checkout_text}>Complete Order</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};
