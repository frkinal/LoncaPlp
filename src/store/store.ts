import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemData from '../data/products.json';
import {ItemCardContent, ItemCardProps} from '@components/types';
interface CartItem extends ItemCardProps {
  quantity: number;
}
export const useStore = create(
  persist(
    (set, get) => ({
      ItemData: ItemData as ItemCardContent[],
      CartPrice: 0,
      FavoritesList: [] as ItemCardContent[],
      CartList: [] as CartItem[],
      addToCart: (cartItem: ItemCardContent) =>
        set(
          produce(state => {
            const existingItem = state.CartList.find(
              item => item.content._id.$oid === cartItem._id.$oid,
            );
            if (existingItem) {
              existingItem.quantity++;
            } else {
              state.CartList.push({content: cartItem, quantity: 1});
            }
          }),
        ),
      calculateCartPrice: () =>
        set(
          produce(state => {
            const total = state.CartList.reduce((acc, item) => {
              return acc + item.content.price * item.quantity;
            }, 0);
            state.CartPrice = total.toFixed(2);
          }),
        ),
      addToFavoriteList: (id: string) =>
        set(
          produce(state => {
            const item = state.ItemData.find(itm => itm._id?.$oid === id);
            if (
              item &&
              !state.FavoritesList.some(fav => fav._id?.$oid === id)
            ) {
              state.FavoritesList.unshift(item);
            }
          }),
        ),
      deleteFromFavoriteList: (id: string) =>
        set(
          produce(state => {
            const index = state.FavoritesList.findIndex(
              item => item._id.$oid === id,
            );
            if (index !== -1) {
              state.FavoritesList.splice(index, 1);
            }
          }),
        ),
      incrementCartItemQuantity: (id: string) =>
        set(
          produce(state => {
            const item = state.CartList.find(
              itm => itm.content._id.$oid === id,
            );
            if (item) item.quantity++;
          }),
        ),
      decrementCartItemQuantity: (id: string) =>
        set(
          produce(state => {
            const index = state.CartList.findIndex(
              itm => itm.content._id.$oid === id,
            );
            if (index !== -1) {
              const item = state.CartList[index];
              if (item.quantity > 1) {
                item.quantity--;
              } else {
                state.CartList.splice(index, 1);
              }
            }
          }),
        ),
    }),
    {
      name: 'lonca-plp-case',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
