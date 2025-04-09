import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
export type HomeTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorites: undefined;
};
export type HomeTabNavigationProp = BottomTabNavigationProp<HomeTabParamList>;
export type HomeTabRouteProps = BottomTabScreenProps<HomeTabParamList>;
