import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {ItemCard} from '@components';
import {useStore} from '../../store/store';
import style from './style';
export const HomeScreen = () => {
  const ItemData = useStore((state: any) => state.ItemData);
  return (
    <View style={style.container}>
      <Text style={style.header}>Home</Text>
      <FlatList
        data={ItemData}
        numColumns={2}
        renderItem={({item, index}) => <ItemCard key={index} content={item} />}
        keyExtractor={(item, index) => `${item._id}-${index}`}
        ListFooterComponent={<View style={style.footer} />}
      />
    </View>
  );
};
