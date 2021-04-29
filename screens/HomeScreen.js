import React, { useContext, useEffect, useCallback, useState } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Alert,
    DeviceEventEmitter,
    unstable_batchedUpdates
} from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';
import { StyledText } from '../components/StyledText';
import { StyledContainer } from '../components/StyledContainer';
import { api, dispatchFetchRequest } from "../constants/Backend";
import { useFocusEffect } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LoadingPage } from '../components/LoadingPage';

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

    const [userData, setUserData] = useState(null);
    const [selectedHome, setSelectedHome] = useState(null);
    const [userHomes, setUserHomes] = useState(null);
    const [testCount1, settestCount1] = useState(null);
    const [testCount2, settestCount2] = useState(null);

    useFocusEffect(
        useCallback(() => {
            getUserData()

            return () => console.log("HomeScreen UNFOCUS!");
        }, [])
    );

    const getUserData = () => {
        dispatchFetchRequest(
            api.homeScreen.getUserHomeData,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            },
            response => {
                response.json().then(data => {
                    console.log('getUserData', JSON.stringify(data), data?.userHomes?.[0])
                    unstable_batchedUpdates(() => {
                        setUserData(data)
                        setSelectedHome(data?.userHomes?.[0])
                        setUserHomes(data?.userHomes)
                    })
                })
            },
            response => {
                console.warn('getUserDataFail', response)
                response.text().then(data => {
                    console.warn('getUserDataFail', data)
                })
            }
        )

    }

    if (!userData || !selectedHome || !userHomes) {
        return (<LoadingPage />)
    }

    return (
        <>
            <StyledContainer >
                <View style={{ padding: 10, flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData?.userName}</Text>
                        <DropDownPicker
                            items={!!userHomes ? userHomes?.map?.((home) => ({ label: home?.homeName, value: home?.homeName, ...home })) : []}
                            defaultValue={selectedHome?.homeName}
                            containerStyle={{ height: 40, flex: 1 }}
                            style={{ backgroundColor: '#fafafa' }}
                            placeholderStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1
                            }}
                            activeLabelStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: 1
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => setSelectedHome({ homeName: item?.value })}
                        />

                    </View>
                </View>

            </StyledContainer>
        </>
    );
}