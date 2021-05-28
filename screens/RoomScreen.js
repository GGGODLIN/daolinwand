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

    const [isLoading, setIsloading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [userData, setUserData] = useState(null);
    const [userHomes, setUserHomes] = useState(null);
    const [userScenes, setUserScenes] = useState(null);
    const [userDevices, setUserDevices] = useState(null);

    useFocusEffect(
        useCallback(() => {
            Promise.all([getUserData()])
                .then((e) => {
                    unstable_batchedUpdates(() => {
                        setHasError(false)
                        setIsloading(false)
                    })
                })
                .catch((e) => {
                    unstable_batchedUpdates(() => {
                        setHasError(true)
                        setIsloading(false)
                    })
                })

            return () => console.log("RoomScreen UNFOCUS!");
        }, [])
    );

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
                                        <TouchableOpacity style={[componentStyles?.shadowBox, { padding: 8, backgroundColor: '#fff', width: '30%', aspectRatio: 1, marginVertical: '2.5%', marginHorizontal: (index % 3) === 1 ? '5%' : 0 }]}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={{ fontWeight: 'bold' }}>{device?.name}</Text>
                                                    <Text style={[{ fontSize: 12, color: complexTheme?.placeholderTextColor }]}>{device?.placeName}</Text>
                                                </View>
                                                {/* <VectorIcon iconName={"power-off"} size={16} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} /> */}
                                            </View>
                                            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                                                <VectorIcon iconName={device?.icon} size={((Dimensions.get("window").width - 20) * 0.3 - 54) / 2} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} />
                                                <Text style={[{ fontSize: 12, color: complexTheme?.placeholderTextColor }]}>{device?.state?.displayStatus}</Text>
                                            </View>
                                        </TouchableOpacity>
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

