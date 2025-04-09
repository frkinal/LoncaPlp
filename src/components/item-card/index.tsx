import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  Text,
  View,
  Easing,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {ItemCardProps} from '@components/types';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import {useStore} from '../../store/store';
import {AppTabNavigationProp} from '@navigators/types';

export const ItemCard: React.FC<ItemCardProps> = ({content}) => {
  const navigation = useNavigation<AppTabNavigationProp>();
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToCart = useStore((state: any) => state.addToCart);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const CartList = useStore((state: any) => state.CartList);
  const isFavorite = FavoritesList.some(
    item => item._id.$oid === content._id.$oid,
  );
  const cartItem = CartList.find(
    item => item.content._id.$oid === content._id.$oid,
  );
  const quantity = cartItem?.quantity ?? 0;

  const toggleFavorite = () => {
    isFavorite
      ? deleteFromFavoriteList(content._id.$oid)
      : addToFavoriteList(content._id.$oid);
  };

  const widthAnim = useRef(new Animated.Value(quantity > 0 ? 120 : 40)).current;
  const [expanded, setExpanded] = useState(quantity > 0);

  useEffect(() => {
    if (quantity > 0 && !expanded) {
      Animated.timing(widthAnim, {
        toValue: 120,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start(() => setExpanded(true));
    }
    if (quantity === 0 && expanded) {
      Animated.timing(widthAnim, {
        toValue: 40,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }).start(() => setExpanded(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  const expandButton = () => {
    Animated.timing(widthAnim, {
      toValue: 120,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      setExpanded(true);
      addToCart(content);
    });
  };

  const onIncrement = () => {
    incrementCartItemQuantity(content._id.$oid);
  };

  const onDecrement = () => {
    decrementCartItemQuantity(content._id.$oid);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Product', {
          id: content._id.$oid,
        });
      }}>
      <View style={style.container}>
        <ImageBackground
          source={{uri: content.main_image}}
          style={style.image}
          resizeMode="cover">
          <Pressable style={style.favorite_button} onPress={toggleFavorite}>
            <AntDesignIcon
              name={isFavorite ? 'star' : 'staro'}
              color="#fff"
              size={20}
            />
          </Pressable>
          <Animated.View
            style={[style.animated_cart_button, {width: widthAnim}]}>
            {!expanded ? (
              <Pressable onPress={expandButton} style={style.cart_icon_button}>
                <AntDesignIcon name="plus" color="#fff" size={20} />
              </Pressable>
            ) : (
              <View style={style.cart_action_row}>
                <Pressable
                  onPress={onDecrement}
                  style={[
                    style.cart_icon_button,
                    {
                      width: '30%',
                    },
                  ]}>
                  <AntDesignIcon name="minus" color="#fff" size={18} />
                </Pressable>
                <Text style={style.cart_quantity}>{quantity}</Text>
                <Pressable
                  onPress={onIncrement}
                  style={[
                    style.cart_icon_button,
                    {
                      width: '30%',
                    },
                  ]}>
                  <AntDesignIcon name="plus" color="#fff" size={18} />
                </Pressable>
              </View>
            )}
          </Animated.View>
        </ImageBackground>
        <Text style={style.title}>{content.names.en}</Text>
        <Text style={style.price}>${content.price}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
