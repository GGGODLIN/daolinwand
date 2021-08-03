import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoPage } from '../screens/TodoPage'
import { RoomScreen } from '../screens/RoomScreen'
import RoomTabNavigator from './RoomTabNavigator'
import { DeviceLightSettingScreen } from '../screens/DeviceLightSettingScreen'

const Stack = createStackNavigator();

function RoomStackNavigator(props) {
    return (
        <Stack.Navigator
            initialRouteName="RoomTabNavigator"
            screenOptions={({ navigation, route }) => ({
                headerTitleStyle: { color: 'black' }
            })}
        >
            <Stack.Screen
                name="RoomTabNavigator"
                component={RoomTabNavigator}
                options={({ navigation, route }) => ({
                    headerShown: false

                })}
            />
            <Stack.Screen
                name="DeviceLightSettingScreen"
                component={DeviceLightSettingScreen}
                options={({ navigation, route }) => ({
                    headerShown: false

                })}
            />

        </Stack.Navigator>
    );
}

export default RoomStackNavigator;