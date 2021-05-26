import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { unstable_batchedUpdates, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { TodoPage } from '../screens/TodoPage'
import { RoomScreen } from '../screens/RoomScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LoadingPage } from '../components/LoadingPage';
import { BackendContext } from '../backend/BackendContext';
import { LocalizationContext } from '../locales/LocaleContext';
import { dispatchFetchRequest } from "../constants/Backend";
import { useFocusEffect } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
    const {
        t,
        appLanguage,
        setAppLanguage,
        initializeAppLanguage,
        themeStyle,
        appTheme,
        setAppTheme,
        componentStyles,
        complexTheme
    } = useContext(LocalizationContext)

    useEffect(() => {
        roomTabRef?.current?.scrollToIndex({ index: state?.index, viewPosition: 0.5 })
    }, [state?.index]);

    const roomTabRef = useRef(null);
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
            <FlatList
                horizontal
                ref={roomTabRef}
                //style={{ width: '100%' }}
                //contentContainerStyle={{ width: `${Math.ceil(state.routes.length / 4)}00%`, backgroundColor: 'pink' }}
                data={state.routes}
                renderItem={({ item: route, index }) => {

                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = Animated.interpolateNode(position, {
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 1)),
                    });

                    return (
                        <TouchableOpacity
                            // accessibilityRole="button"
                            // accessibilityState={isFocused ? { selected: true } : {}}
                            // accessibilityLabel={options.tabBarAccessibilityLabel}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[{ minWidth: 100, borderBottomWidth: isFocused ? 2 : 0, paddingBottom: isFocused ? 0 : 2, height: 50, justifyContent: 'center', alignItems: 'center' }]}
                        >
                            <Animated.Text style={[{ opacity, color: isFocused ? complexTheme?.mainThemeColor : complexTheme?.invalid?.color }]}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                }}
            >
                {/* {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = Animated.interpolateNode(position, {
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 1)),
                    });

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[state?.routes?.length <= 4 ? { flex: 1 } : { width: `${25 / Math.ceil(state?.routes?.length / 4)}%` }, { backgroundColor: '#fff', height: 50, justifyContent: 'center', alignItems: 'center' }]}
                        >
                            <Animated.Text style={[{ opacity, color: isFocused ? complexTheme?.mainThemeColor : complexTheme?.invalid?.color }]}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })} */}

            </FlatList >
            <View style={{ width: 50 }}>

            </View>
        </View >
    );
}


function RoomTabNavigator(props) {
    const {
        t,
        appLanguage,
        setAppLanguage,
        initializeAppLanguage,
        themeStyle,
        appTheme,
        setAppTheme,
        componentStyles,
        complexTheme
    } = useContext(LocalizationContext)
    const {
        token,
        getToken,
        api,
        jsonServerBaseUrl,
    } = useContext(BackendContext)

    const [userRooms, setUserRooms] = useState(null);
    const [isLoading, setIsloading] = useState(true)


    useFocusEffect(
        useCallback(() => {
            getUserRooms()

            return () => { };
        }, [])
    );

    const getUserRooms = async () => {
        let res = await dispatchFetchRequest(
            api(jsonServerBaseUrl)?.roomScreen.getUserRooms,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            },
            response => {
                response.json().then(data => {
                    unstable_batchedUpdates(() => {
                        setUserRooms(data)
                        setIsloading(false)
                    })
                })
            },
            response => {
                console.warn('getUserDataFail', response)
            }
        )
        return await res.json()
    }

    if (isLoading) {
        return (<LoadingPage />)
    }

    return (
        <Tab.Navigator
            // tabBarOptions={{
            //     activeTintColor: complexTheme?.mainThemeColor,
            //     inactiveTintColor: complexTheme?.invalid?.color,
            //     labelStyle: { fontWeight: 'bold' },
            //     indicatorStyle: { backgroundColor: complexTheme?.highlightThemeColor },
            //     scrollEnabled: true,
            //     tabStyle: { width: 100 },
            //     style: { width: 300 },
            //     bounces: true
            // }}
            tabBar={props => <MyTabBar {...props} />}
        >{userRooms?.map?.((room) =>
            <Tab.Screen
                name={`RoomScreen_${room?.id}`}
                component={RoomScreen}
                options={({ navigation, route }) => ({
                    title: room?.name
                })}
            />)}
        </Tab.Navigator>
    );
}

export default RoomTabNavigator;