import React, { useContext, useEffect } from 'react';
import { LocalizationContext } from '../locales/LocaleContext';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen'
import { AddHomeFormScreen } from '../screens/AddHomeFormScreen'

const Stack = createStackNavigator();

function HomeStackNavigator(props) {
    const {
        t,
        complexTheme,
        themeStyle
    } = useContext(LocalizationContext)
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ navigation, route }) => ({
                headerTitleAlign: 'center',
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
                    headerShown: true,
                    title: t('addHomeForm.title')
                })}
            />

        </Stack.Navigator>
    );
}

export default HomeStackNavigator;