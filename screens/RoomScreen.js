import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Alert, ScrollView, unstable_batchedUpdates, Platform, StatusBar } from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';
import { BackendContext } from '../backend/BackendContext';
import { StyledText } from '../components/StyledText';
import { StyledContainer } from '../components/StyledContainer';
import { dispatchFetchRequest } from "../constants/Backend";
import { useFocusEffect } from '@react-navigation/native';
import { LoadingPage } from '../components/LoadingPage';
import { VectorIcon } from '../components/VectorIcon'
import { goldenSample } from '../data'
import { testStr } from '../utils/mqttService';
import mqttService from '../utils/mqttService';
import { Client } from '../utils/mqttService';

export const RoomScreen = ({ navigation, route }) => {
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

    const [isLoading, setIsloading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [userData, setUserData] = useState(null);
    const [userHomes, setUserHomes] = useState(null);
    const [userScenes, setUserScenes] = useState(null);
    const [userDevices, setUserDevices] = useState(route?.params?.devices);
    const [userSpaces, setUserSpaces] = useState(null);


    useEffect(() => {
        mqttService.subscribe(
            Client,
            `/GOLD/telemetry/GOLD-WuFLXpRyItnE/#`,
        );
        const callBack = (payload) => {
            //console.log('cb payload', payload);
            let result;
            result = handlePayload(payload);
            console.log('onMessage callback', result, JSON.parse(payload));
        };
        mqttService.onMessage(Client, callBack);

        return () => mqttService.closeConnection(Client);

    }, []);


    const handlePayload = (payload) => {
        // console.log('handlePayload', payload);

        const { dvId, dvType, contents } = JSON.parse(payload);
        if (dvType === 265) {
            console.log('dvType === 265');
            dispatch({
                type: 'SWITCH_LIGHT',
                payload: {
                    dvId: dvId,
                    contents: contents,
                },
            });
        }
    };
    // useFocusEffect(
    //     useCallback(() => {
    //         Promise.all([getUserData(), getUserData_Demo()])
    //             .then((e) => {
    //                 unstable_batchedUpdates(() => {
    //                     setHasError(false)
    //                     setIsloading(false)
    //                 })
    //             })
    //             .catch((e) => {
    //                 unstable_batchedUpdates(() => {
    //                     setHasError(true)
    //                     setIsloading(false)
    //                 })
    //             })

    //         return () => console.log("RoomScreen UNFOCUS!");
    //     }, [])
    // );

    const getUserData = async () => {
        let res = await dispatchFetchRequest(
            api(jsonServerBaseUrl)?.homeScreen.getUserHomeData,
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
                        setUserData(data)
                        setUserHomes(data?.userHomes)
                        setUserScenes(data?.userScenes)
                        setUserDevices(data?.favoriteDevice)
                    })
                })
            },
            response => {
                console.warn('getUserDataFail', response)
            }
        )
        return await res.json()
    }

    const getUserData_Demo = async () => {
        let tempSpaces = goldenSample?.spaces
        setUserSpaces(tempSpaces?.map((space) => ({ ...space, devices: goldenSample?.devices?.filter((device) => device?.spaceId === space?.id) })))
    }

    if (isLoading) {
        return (<LoadingPage />)
    }
    else if (hasError) {
        return (<LoadingPage color={'red'} />)
    }


    else {
        return (
            <>
                <StyledContainer>
                    <ScrollView >
                        <View style={{ padding: 10, flex: 1 }}>
                            {/* picture */}
                            <View style={{ height: 150, width: '100%', backgroundColor: '#fff', marginBottom: 14, borderRadius: 14 }}>

                            </View>
                            {/* 常用設備 */}
                            <View style={{ marginTop: 10, width: '100%' }}>

                                <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                    {userDevices?.map?.((device, index) => (
                                        <DeviceCard device={device} index={index} />
                                    ))}


                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </StyledContainer>
            </>
        );
    }

}



const DeviceCard = ({ device, index }) => {
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


    const handlePublish = () => {
        let notificationObj = {
            cts: new Date().getTime(),
            msgType: 'notify',
            postman: 'shl-GW123',
            from: 'shl-afd11123',
            to: device?.dvId,
            ntfTp: 1,
            contents: [
                {
                    objId: 1,
                    name: 'Switch',
                    rt: [`oic.r.switch.binary`],
                    value: true,
                },
            ],
        };
        mqttService.publish(
            Client,
            `/GOLD/notify/GOLD-WuFLXpRyItnE/`,
            JSON.stringify(notificationObj),
        );
    };


    return (
        <TouchableOpacity
            style={[componentStyles?.shadowBox,
            (!!device?.state?.active ? { backgroundColor: "#50ab94" } : { backgroundColor: "#fff" }),
            { padding: 8, width: '30%', aspectRatio: 1, marginVertical: '2.5%', marginHorizontal: (index % 3) === 1 ? '5%' : 0 }]}
            onPress={() => handlePublish()}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[{ fontWeight: 'bold' }, (!!device?.state?.active ? { color: "#fff" } : { color: "gray" })]}>{device?.name}</Text>
                    {/* <Text style={[{ fontSize: 12, color: complexTheme?.placeholderTextColor }]}>{device?.placeName}</Text> */}
                </View>
                <VectorIcon iconName={"power-off"} size={16} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} />
            </View>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                <VectorIcon iconName={device?.icon} size={((Dimensions.get("window").width - 20) * 0.3 - 54) / 2} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} />
                <Text style={[{ fontSize: 12 }, (!!device?.state?.active ? { color: "#fff" } : { color: "gray" })]}>{device?.state?.displayStatus}</Text>
            </View>
        </TouchableOpacity>
    )
}