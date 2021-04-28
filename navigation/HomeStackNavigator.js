import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen'

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

        </Stack.Navigator>
    );
}

export default HomeStackNavigator;