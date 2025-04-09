import React from 'react';
import {View, Text, Image, FlatList, ScrollView, Pressable} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useStore} from '../../store/store';
import {ItemCardContent} from '@components/types';
import style from './style';
import {AppTabNavigationProp, AppTabRouteProps} from '@navigators/types';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
export const ProductDetailScreen: React.FC = () => {
  const navigation = useNavigation<AppTabNavigationProp>();
  const route = useRoute<AppTabRouteProps>();
  const {id} = route.params;
  const ItemData = useStore((state: any) => state.ItemData);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const product = ItemData.find(
    (item: ItemCardContent) => item._id.$oid === id,
  );
  const isFavorite = FavoritesList.some(
    item => item._id.$oid === product?._id.$oid,
  );
  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFromFavoriteList(product?._id.$oid);
    } else {
      addToFavoriteList(product?._id.$oid);
    }
  };
  if (!product) {
    return (
      <View style={style.container}>
        <Text style={style.error_text}>Product not found!</Text>
      </View>
    );
  }
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Pressable
          style={style.back_button}
          onPress={() => navigation.goBack()}>
          <AntDesignIcon name="arrowleft" color="#fff" size={24} />
        </Pressable>
        <Text style={style.header_title}>Product Details</Text>
        <Pressable style={style.favorite_button} onPress={toggleFavorite}>
          <AntDesignIcon
            name={isFavorite ? 'star' : 'staro'}
            color="#FFD700" // Gold for favorite
            size={24}
          />
        </Pressable>
      </View>
      <ScrollView style={style.scrollview_container}>
        <Image source={{uri: product.main_image}} style={style.product_image} />
        <Text style={style.product_title}>{product.names.en}</Text>
        <Text style={style.product_price}>${product.price}</Text>
        <Text style={style.product_sku}>SKU: {product.product_code}</Text>
        <Text style={style.product_series}>Series: {product.series.name}</Text>
        <Text style={style.product_quantity}>
          Quantity Available: {product.series.item_quantity}
        </Text>
        <View style={style.details_container}>
          <Text style={style.section_title}>Description</Text>
          <Text style={style.product_description}>
            {product.description_details.en.fabric}
          </Text>
          <Text style={style.product_description}>
            {product.description_details.en.model_measurements}
          </Text>
          <Text style={style.product_description}>
            {product.description_details.en.sample_size}
          </Text>
          <Text style={style.product_description}>
            {product.description_details.en.product_measurements}
          </Text>
        </View>
        <View style={style.image_gallery_container}>
          <Text style={style.section_title}>Image Gallery</Text>
          <FlatList
            data={product.images}
            horizontal
            keyExtractor={(item, index) => `${item}-${index}`}
            renderItem={({item}) => (
              <Image source={{uri: item}} style={style.gallery_image} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
