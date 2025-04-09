import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

import type {AppTabParamList} from '@navigators/types';

export type AppTabParamList = {
  Tab: NavigatorScreenParams<>;
  Details: {
    id: string;
  };
};

export type AppTabNavigationProp = NativeStackNavigationProp<AppTabParamList>;
export type AppTabRouteProps = RouteProp<HomeTabParamList>;
