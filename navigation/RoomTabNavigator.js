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
import { goldenSample } from '../data'
import mqttService from '../utils/mqttService';
import { Client } from '../utils/mqttService';
import { SpaceContext } from '../context/SpaceContext'
import { connect } from 'mqtt/dist/mqtt';

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
        <View style={[componentStyles?.shadowBox, { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 0 }]}>
            <FlatList
                horizontal
                ref={roomTabRef}
                //style={{ width: '100%' }}
                //contentContainerStyle={{ width: `${Math.ceil(state.routes.length / 4)}00%`, backgroundColor: 'pink' }}
                data={state.routes}
                showsHorizontalScrollIndicator={false}
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
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[{ minWidth: 100, borderColor: complexTheme?.highlightThemeColor, borderBottomWidth: isFocused ? 2 : 0, paddingBottom: isFocused ? 0 : 2, height: 50, justifyContent: 'center', alignItems: 'center' }]}
                        >
                            <Animated.Text style={[{ opacity, color: isFocused ? complexTheme?.mainThemeColor : complexTheme?.invalid?.color }]}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                }}
            >


            </FlatList >
            <View style={{ width: 50, borderLeftWidth: 1 }}>

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

    const {
        userSpaces,
        setUserSpaces,
        userDevices,
        setUserDevices,
        handlePayload
    } = useContext(SpaceContext)

    const [userRooms, setUserRooms] = useState(null);
    //const [userSpaces, setUserSpaces] = useState(goldenSample?.spaces?.map((space) => ({ ...space, devices: goldenSample?.devices?.filter((device) => device?.spaceId === space?.id) })));
    const [isLoading, setIsloading] = useState(true)
    const [refreshFlag, setRefreshFlag] = useState(true)


    useFocusEffect(
        useCallback(() => {
            getUserRooms()

            return () => { };
        }, [])
    );

    const getUserRooms = async () => {
        // let res = await dispatchFetchRequest(
        //     api(jsonServerBaseUrl)?.roomScreen.getUserRooms,
        //     {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json'
        //         },
        //     },
        //     response => {
        //         response.json().then(data => {
        //             unstable_batchedUpdates(() => {
        //                 setUserRooms(data)
        //                 setIsloading(false)
        //             })
        //         })
        //     },
        //     response => {
        //         console.warn('getUserDataFail', response)
        //     }
        // )
        // return await res.json()

        //let tempSpaces = goldenSample?.spaces
        //setUserSpaces(tempSpaces?.map((space) => ({ ...space, devices: goldenSample?.devices?.filter((device) => device?.spaceId === space?.id) })))
        setIsloading(false)
    }

    // useEffect(() => {
    //     console.log('getClient!')
    //     let Client = mqttService.getClient()

    //     const callBack = (payload, userDevices) => {
    //         console.log('cb payload', JSON.stringify(payload));
    //         handlePayload(payload, userDevices);
    //         setRefreshFlag(!refreshFlag)
    //     };
    //     mqttService.subscribe(
    //         Client,
    //         `/GOLD/telemetry/GOLD-WuFLXpRyItnE/#`,
    //         callBack,
    //         userDevices
    //     );
    //     //mqttService.onMessage(Client, callBack, userDevices);

    //     return () => {
    //         console.log('closeConnection')
    //         mqttService.closeConnection(Client)
    //     };

    // }, [refreshFlag]);

    useEffect(() => {

        const callBack = (payload, userDevices) => {
            console.log('cb payload', JSON.stringify(payload));
            handlePayload(payload);
            setRefreshFlag(!refreshFlag)
        };
        mqttService.subscribe(
            Client,
            `/GOLD/telemetry/GOLD-WuFLXpRyItnE/#`,
            callBack,
            userDevices
        );
        //mqttService.onMessage(Client, callBack, userDevices);

        return () => {
            console.log('closeConnection')
            mqttService.closeConnection(Client)
        };

    }, []);

    // useEffect(() => {
    //     const websocketUrl = 'ws://elderwand2.g13.group:8083/mqtt';

    //     const options = {
    //         clean: true, // ????????????
    //         connectTimeout: 40000, // ????????????
    //         clientId: 'web_mqttjs_2763cd800a',
    //         username: 'admin',
    //         password: 'public',
    //     };

    //     const client = connect(websocketUrl, options);

    //     client.on('connect', function () {
    //         client.subscribe(`/GOLD/telemetry/GOLD-WuFLXpRyItnE/#`, function (err) {
    //             if (!err) {
    //                 //client.publish('presence', 'Hello mqtt')
    //                 console.log('subscribe')
    //             }
    //         })
    //     })

    //     client.on('message', function (topic, payload) {
    //         // message is Buffer

    //         const message = String.fromCharCode.apply(null, new Uint8Array(payload));
    //         console.log('client.on', message);
    //         handlePayload(message, userDevices);
    //         setRefreshFlag(!refreshFlag)

    //     })





    //     // console.log('getClient!')
    //     // let Client = mqttService.getClient()

    //     // const callBack = (payload, userDevices) => {
    //     //     console.log('cb payload', JSON.stringify(payload));
    //     //     handlePayload(payload, userDevices);
    //     //     setRefreshFlag(!refreshFlag)
    //     // };
    //     // mqttService.subscribe(
    //     //     Client,
    //     //     `/GOLD/telemetry/GOLD-WuFLXpRyItnE/#`,
    //     //     callBack,
    //     //     userDevices
    //     // );
    //     // //mqttService.onMessage(Client, callBack, userDevices);

    //     return () => {
    //         client.end()
    //     };

    // }, [refreshFlag]);



    // const handlePayload = (payload, userDevices) => {
    //     console.log('handlePayload', payload);

    //     const { dvId, dvType, contents } = JSON.parse(payload);
    //     let newDevices = userDevices?.map((device) => {
    //         if (device?.dvId === dvId) {
    //             let newAttrs = [...device?.attrs]
    //             newAttrs = newAttrs?.map((attr) => {
    //                 let matchAttr = contents?.find((content) => attr?.createdRT === content?.rt?.[0])
    //                 if (!!matchAttr) {
    //                     return ({ ...attr, value: matchAttr?.value })
    //                 } else {
    //                     return attr
    //                 }
    //             })
    //             return { ...device, attrs: newAttrs }
    //         } else {
    //             return device
    //         }
    //     })
    //     //console.log('newDevices', JSON.stringify(newDevices?.find((device) => device?.dvId === 'GOLD-BqqNkb2WH1pL')))
    //     setUserDevices(newDevices)
    //     setUserSpaces(userSpaces?.map((space) => ({ ...space, devices: newDevices?.filter((device) => device?.spaceId === space?.id) })))

    // };

    //console.log("userSpaces UP?", JSON.stringify(userSpaces))


    if (isLoading) {
        return (<LoadingPage />)
    }

    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
        >{userSpaces?.map?.((space) =>
            <Tab.Screen
                name={`RoomScreen_${space?.id}`}
                component={RoomScreen}
                options={({ navigation, route }) => ({
                    title: space?.name
                })}
                initialParams={{ ...space }}
            />)}
        </Tab.Navigator>
    );
}


//testing
function RoomTabNavigator_2(props) {
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
            tabBar={props => <MyTabBar {...props} />}
        >{userSpaces?.map?.((space) =>
            <Tab.Screen
                name={`RoomScreen_${space?.id}`}
                component={RoomScreen}
                options={({ navigation, route }) => ({
                    title: space?.name
                })}
                initialParams={{ ...space }}
            />)}
        </Tab.Navigator>
    );
}

export default RoomTabNavigator;