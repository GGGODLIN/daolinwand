import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodoPage } from '../screens/TodoPage'

const Stack = createStackNavigator();

function RoomStackNavigator(props) {
    return (
        <Stack.Navigator
            initialRouteName="TodoPage"
            screenOptions={({ navigation, route }) => ({
                headerTitleStyle: { color: 'black' }
            })}
        >
            <Stack.Screen
                name="TodoPage"
                component={TodoPage}
                options={({ navigation, route }) => ({
                    headerShown: false

                })}
            />

        </Stack.Navigator>
    );
}

export default RoomStackNavigator;