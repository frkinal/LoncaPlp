import React from 'react';
import {
  FlatList,
  Text,
  View,
  Pressable,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {useStore} from '../../store/store';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {AppTabNavigationProp} from '@navigators/types';
import style from './style';
export const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation<AppTabNavigationProp>();
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const renderItem = ({item}: any) => {
    if (!item || !item._id || !item.names) {
      return null;
    }
    const handleDelete = () => {
      deleteFromFavoriteList(item._id.$oid);
    };
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Product', {
            id: item._id.$oid,
          })
        }>
        <View style={style.favorite_item_container}>
          <Image
            source={{uri: item.main_image}}
            style={style.favorite_image}
            resizeMode="cover"
          />
          <View style={style.favorite_content}>
            <Text style={style.favorite_title}>{item.names.en}</Text>
            <Text style={style.favorite_description}>
              {item.description_details.en?.fabric || 'No description'}
            </Text>
          </View>
          <Pressable style={style.delete_button} onPress={handleDelete}>
            <AntDesignIcon name="close" style={style.delete_icon} />
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>Favorites</Text>
      {FavoritesList.length === 0 ? (
        <Text style={style.empty_message}>
          You don't have any favorite products yet.
        </Text>
      ) : (
        <FlatList
          data={FavoritesList}
          renderItem={renderItem}
          keyExtractor={item =>
            item._id?.$oid?.toString() || Math.random().toString()
          }
          ListFooterComponent={<View style={style.footer} />}
        />
      )}
    </View>
  );
};
