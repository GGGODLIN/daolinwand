import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { Dimensions, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Alert, ScrollView, unstable_batchedUpdates, Platform, StatusBar } from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';
import { BackendContext } from '../backend/BackendContext';
import { StyledText } from '../components/StyledText';
import { StyledContainer } from '../components/StyledContainer';
import { dispatchFetchRequest } from "../constants/Backend";
import { useFocusEffect } from '@react-navigation/native';
import { LoadingPage } from '../components/LoadingPage';
import { Tooltip } from 'react-native-elements';
import { VectorIcon } from '../components/VectorIcon'
import { DropDownPicker } from '../components/DropDownPicker';

export const HomeScreen = ({ navigation }) => {

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

    const homePickerRef = useRef(null);

    const [isLoading, setIsloading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [userData, setUserData] = useState(null);
    const [selectedHomeIndex, setSelectedHomeIndex] = useState(0);
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

            return () => console.log("HomeScreen UNFOCUS!");
        }, [])
    );

    // const getUserData = async () => {
    //     let res = await dispatchFetchRequest(
    //         api(jsonServerBaseUrl)?.homeScreen.getUserHomeData,
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //         },
    //         response => {
    //             response.json().then(data => {
    //                 unstable_batchedUpdates(() => {
    //                     setUserData(data)
    //                     setUserHomes(data?.userHomes)
    //                     setUserScenes(data?.userScenes)
    //                     setUserDevices(data?.favoriteDevice)
    //                 })
    //             })
    //         },
    //         response => {
    //             console.warn('getUserDataFail', response)
    //         }
    //     )
    //     return await res.json()
    // }

    const getUserData = async () => {
        let data = {
            "userName": "Jagger",
            "userHomes": [
                {
                    "homeName": "?????????"
                },
                {
                    "homeName": "????????????"
                }
            ],
            "userScenes": [
                {
                    "name": "??????",
                    "active": true,
                    "icon": "TheDoorIsClosed"
                },
                {
                    "name": "??????",
                    "active": false,
                    "icon": "DoorOpen"
                },
                {
                    "name": "??????",
                    "active": false,
                    "icon": "moon"
                },
                {
                    "name": "??????",
                    "active": false,
                    "icon": "dinner"
                },
                {
                    "name": "??????",
                    "active": false,
                    "icon": "party"
                },
                {
                    "name": "??????",
                    "active": false,
                    "icon": "television"
                }
            ],
            "favoriteDevice": [
                {
                    "name": "??????",
                    "icon": "ALamp",
                    "placeName": "1F??????",
                    "state": {
                        "active": true,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "???1",
                    "icon": "ALamp",
                    "placeName": "1F??????",
                    "state": {
                        "active": true,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "???2",
                    "icon": "ALamp",
                    "placeName": "1F??????",
                    "state": {
                        "active": true,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "??????",
                    "icon": "CloseDoorsAndWindows",
                    "placeName": "1F??????",
                    "state": {
                        "active": true,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "??????",
                    "icon": "DoorsAndWindows",
                    "placeName": "??????",
                    "state": {
                        "active": false,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "??????",
                    "icon": "ALamp",
                    "placeName": "??????2",
                    "state": {
                        "active": true,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "??????7",
                    "icon": "ALamp",
                    "placeName": "??????7",
                    "state": {
                        "active": false,
                        "displayStatus": "???"
                    }
                },
                {
                    "name": "??????8",
                    "icon": "ALamp",
                    "placeName": "??????8",
                    "state": {
                        "active": false,
                        "displayStatus": "???"
                    }
                }
            ]
        }

        unstable_batchedUpdates(() => {
            setUserData(data)
            setUserHomes(data?.userHomes)
            setUserScenes(data?.userScenes)
            setUserDevices(data?.favoriteDevice)
        })
    }

    if (isLoading) {
        return (<LoadingPage />)
    }
    else if (hasError) {
        return (<LoadingPage color={'red'} />)
    }
    else {
        return (

            <StyledContainer >
                <ScrollView >
                    <View style={{ padding: 10, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData?.userName}</Text>

                            <View style={{ marginLeft: 10 }}>
                                <DropDownPicker pickerOptions={userHomes} selectedIndex={selectedHomeIndex} setSelectedIndex={(index) => {
                                    if (index === userHomes?.length) {
                                        navigation.navigate('AddHomeFormScreen')
                                    } else
                                        setSelectedHomeIndex(index)
                                }} />
                            </View>
                        </View>
                        {/* dashboard */}
                        <View style={{ height: 150, width: '100%', backgroundColor: '#fff', marginVertical: 14, borderRadius: 14 }}>

                        </View>
                        {/* ???????????? */}
                        <UserScenesComponent userScenes={userScenes} />
                        {/* ???????????? */}
                        <View style={{ marginTop: 10, width: '100%' }}>
                            <View style={{ borderLeftWidth: 5, borderColor: complexTheme?.mainThemeColor, marginVertical: 10 }}>
                                <Text style={[{ marginLeft: 5 }, componentStyles?.sectionTitle]}>{t('homeScreen.favoriteDevice')}</Text>
                            </View>
                            <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                {userDevices?.map?.((device, index) => (
                                    <TouchableOpacity style={[componentStyles?.shadowBox, { padding: 8, backgroundColor: '#fff', width: '30%', aspectRatio: 1, marginVertical: '2.5%', marginHorizontal: (index % 3) === 1 ? '5%' : 0 }]}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={{ fontWeight: 'bold' }}>{device?.name}</Text>
                                                <Text style={[{ fontSize: 12, color: complexTheme?.placeholderTextColor }]}>{device?.placeName}</Text>
                                            </View>
                                            <VectorIcon iconName={"power-off"} size={16} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} />
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

        );
    }
}

const UserScenesComponent = ({ userScenes }) => {
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
    return (
        <View style={{ width: '100%' }}>
            <View style={{ borderLeftWidth: 5, borderColor: complexTheme?.mainThemeColor, marginVertical: 10 }}>
                <Text style={[{ marginLeft: 5 }, componentStyles?.sectionTitle]}>{t('homeScreen.scene')}</Text>
            </View>
            <ScrollView
                style={[componentStyles?.shadowBox, { width: '100%', height: 120, backgroundColor: '#fff', borderRadius: 10, paddingVertical: 10 }]}
                horizontal
                pagingEnabled
                contentContainerStyle={{ width: `${Math.ceil(userScenes.length / 5)}00%`, }}
            >
                {userScenes?.map?.((scene) => (
                    <TouchableOpacity style={{ height: '100%', width: `${20 / Math.ceil(userScenes.length / 5)}%`, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={[{ width: '70%', height: '90%', alignItems: 'center' }, (scene?.active && { ...componentStyles?.shadowBox, borderRadius: 100, backgroundColor: '#fff' })]}>
                            <View style={[{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: '100%', aspectRatio: 1, borderRadius: 100 }, (scene?.active ? { borderRadius: 100, ...complexTheme?.lightBackground } : { ...componentStyles?.shadowBox, borderRadius: 100, backgroundColor: '#fff' })]}>
                                <VectorIcon iconName={scene?.icon ?? 'Building'} size={40} color="green" />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[{ fontSize: 12, color: scene?.active ? complexTheme?.mainThemeColor : complexTheme?.invalid?.color }]}>{scene?.name}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}