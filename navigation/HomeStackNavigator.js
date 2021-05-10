import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen'
import { AddHomeFormScreen } from '../screens/AddHomeFormScreen'

const Stack = createStackNavigator();

function HomeStackNavigator(props) {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ navigation, route }) => ({
                headerTitleStyle: { color: 'black' }
            })}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation, route }) => ({
                    headerShown: false

                })}
            />
            <Stack.Screen
                name="AddHomeFormScreen"
                component={AddHomeFormScreen}
                options={({ navigation, route }) => ({
                    headerShown: true

                })}
            />

        </Stack.Navigator>
    );
}

export default HomeStackNavigator;