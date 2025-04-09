import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
import {HomeScreen, CartScreen, FavoritesScreen} from '@screens';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {AppTabParamList} from './types';
const Tab = createBottomTabNavigator<AppTabParamList>();
export const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name="home"
              size={25}
              color={focused ? '#D17842' : '#52555A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name="shoppingcart"
              size={25}
              color={focused ? '#D17842' : '#52555A'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesignIcon
              name="staro"
              size={25}
              color={focused ? '#D17842' : '#52555A'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: 'absolute',
    backgroundColor: 'rgba(12,15,20,0.5)',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
