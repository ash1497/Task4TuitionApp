import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Home} from '../displays';
import {AddStudent} from '../displays'

import {COLORS, icons} from '../constants';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStudent}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.add}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
