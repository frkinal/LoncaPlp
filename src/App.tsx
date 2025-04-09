import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabNavigator} from '@navigators';
import {ProductDetailScreen} from '@screens';
import {HomeTabParamList} from '@navigators/types';
const Stack = createNativeStackNavigator<HomeTabParamList>();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tab"
          component={HomeTabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Product"
          component={ProductDetailScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
