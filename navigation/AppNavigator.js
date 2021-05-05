import React, { useContext, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocalizationContext } from '../locales/LocaleContext';
import { VectorIcon } from '../components/VectorIcon'
import HomeStackNavigator from './HomeStackNavigator'
import RoomStackNavigator from './RoomStackNavigator'
import SceneStackNavigator from './SceneStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  const {
    t,
    complexTheme,
    themeStyle
  } = useContext(LocalizationContext)
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
      >
        <Tab.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
          options={({ navigation, route }) => ({
            tabBarLabel: ({ focused, color, size }) => <Text style={{ color: focused ? themeStyle?.color : color, fontSize: size ?? 12 }}>{t?.('tabBarLabel.homeStack')}</Text>,
            tabBarIcon: ({ focused, color, size }) => <VectorIcon iconName={'home-filled'} size={size} color={focused ? complexTheme?.mainThemeColor : color} />

          })}
        />
        <Tab.Screen
          name="RoomStackNavigator"
          component={RoomStackNavigator}
          options={({ navigation, route }) => ({
            tabBarLabel: ({ focused, color, size }) => <Text style={{ color: focused ? themeStyle?.color : color, fontSize: size ?? 12 }}>{t?.('tabBarLabel.roomStack')}</Text>,
            tabBarIcon: ({ focused, color, size }) => <VectorIcon iconName="sensor-door" size={size} color={focused ? complexTheme?.mainThemeColor : color} />

          })}
        />
        <Tab.Screen
          name="SceneStackNavigator"
          component={SceneStackNavigator}
          options={({ navigation, route }) => ({
            tabBarLabel: ({ focused, color, size }) => <Text style={{ color: focused ? themeStyle?.color : color, fontSize: size ?? 12 }}>{t?.('tabBarLabel.sceneStack')}</Text>,
            tabBarIcon: ({ focused, color, size }) => <VectorIcon iconName="appstore1" size={size} color={focused ? complexTheme?.mainThemeColor : color} />

          })}
        />
        <Tab.Screen
          name="ProfileStackNavigator"
          component={ProfileStackNavigator}
          options={({ navigation, route }) => ({
            tabBarLabel: ({ focused, color, size }) => <Text style={{ color: focused ? themeStyle?.color : color, fontSize: size ?? 12 }}>{t?.('tabBarLabel.profileStack')}</Text>,
            tabBarIcon: ({ focused, color, size }) => <VectorIcon iconName="user" size={size} color={focused ? complexTheme?.mainThemeColor : color} />

          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;