import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen'


const Stack = createStackNavigator();

function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation, route }) => ({
          headerTitleStyle: { color: 'black' }
        })}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            title: 'Echo Square (v9_0425)',

          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;