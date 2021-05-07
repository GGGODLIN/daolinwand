import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { StyleSheet, Text, useColorScheme, View, TouchableOpacity, Alert, ScrollView, unstable_batchedUpdates, Platform, StatusBar } from 'react-native';
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

export const HomeScreen = () => {

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
                        setSelectedHomeIndex(0)
                        setUserHomes(data?.userHomes)
                        setUserScenes(data?.userScenes)
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
                <StyledContainer >
                    <View style={{ padding: 10, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData?.userName}</Text>

                            <View style={{ marginLeft: 10 }}>
                                <DropDownPicker pickerOptions={userHomes} selectedIndex={selectedHomeIndex} setSelectedIndex={setSelectedHomeIndex} />
                            </View>
                        </View>
                        <View style={{ height: 150, width: '100%', backgroundColor: '#fff', marginVertical: 14, borderRadius: 14 }}>

                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ borderLeftWidth: 5, borderColor: complexTheme?.mainThemeColor, marginVertical: 10 }}>
                                <Text style={{ marginLeft: 5, fontWeight: 'bold' }}>{t('homeScreen.scene')}</Text>
                            </View>
                            <ScrollView
                                style={[componentStyles?.shadowBox, { width: '100%', height: 120, backgroundColor: '#fff', borderRadius: 10, paddingVertical: 10 }]}
                                horizontal
                                pagingEnabled
                                contentContainerStyle={{ minWidth: `${Math.ceil(userScenes.length / 5)}00%`, backgroundColor: 'green' }}
                            >
                                {userScenes?.map?.((scene) => (
                                    <View style={{ height: '100%', backgroundColor: 'pink', minWidth: `${20 / Math.ceil(userScenes.length / 5)}%`, alignItems: 'center' }}>
                                        <Text>123123213123123213131</Text>
                                        <Text>123</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>

                    </View>

                </StyledContainer>
            </>
        );
    }
}