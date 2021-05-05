import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Alert,
    DeviceEventEmitter,
    unstable_batchedUpdates,
    Platform,
    StatusBar
} from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';
import { BackendContext } from '../backend/BackendContext';
import { StyledText } from '../components/StyledText';
import { StyledContainer } from '../components/StyledContainer';
import { dispatchFetchRequest } from "../constants/Backend";
import { useFocusEffect } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { LoadingPage } from '../components/LoadingPage';
import { Tooltip } from 'react-native-elements';
//import Tooltip from 'react-native-walkthrough-tooltip';
import { VectorIcon } from '../components/VectorIcon'

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

    const [userData, setUserData] = useState(null);
    const [selectedHome, setSelectedHome] = useState(null);
    const [userHomes, setUserHomes] = useState(null);
    const [homePickerVisible, setHomePickerVisible] = useState(false);

    useFocusEffect(
        useCallback(() => {
            getUserData()

            return () => console.log("HomeScreen UNFOCUS!");
        }, [])
    );

    const getUserData = () => {
        dispatchFetchRequest(
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
    else {
        return (
            <>
                <StyledContainer >
                    <View style={{ padding: 10, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData?.userName}</Text>
                            {/* <DropDownPicker
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
                        /> */}
                            <View style={{ marginLeft: 10 }}>
                                <Tooltip
                                    ref={homePickerRef}
                                    height={40 * (!!userHomes?.length ? userHomes?.length + 1 : 1)}
                                    skipAndroidStatusBar
                                    pointerColor={complexTheme?.mainThemeColor}
                                    containerStyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: complexTheme?.mainThemeColor, width: 100, padding: 0 }}
                                    popover={
                                        <View style={{ flex: 1, justifyContent: 'space-between', width: '100%' }}>
                                            {userHomes?.map?.((home, index) =>
                                                <TouchableOpacity
                                                    key={`userHomes_${index}`}
                                                    style={[home === selectedHome ? [complexTheme?.lightBackground, (index === 0 ? { borderTopRightRadius: 10, borderTopLeftRadius: 10 } : {})] : {}, { flex: 1, justifyContent: 'center', paddingLeft: 14 }]}
                                                    onPress={() => {
                                                        setSelectedHome(home)
                                                        homePickerRef?.current?.toggleTooltip?.()
                                                    }}
                                                >
                                                    <Text style={{ color: home === selectedHome ? complexTheme?.highlightThemeColor : '#000' }}>{home?.homeName}</Text>
                                                </TouchableOpacity>
                                            )}
                                            <TouchableOpacity
                                                style={{ flex: 1, justifyContent: 'center', paddingLeft: 14 }}
                                            >
                                                <Text>{t('common.add')}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text >{selectedHome?.homeName}</Text>
                                        <VectorIcon iconName={'caret-down'} size={16} color={complexTheme?.mainThemeColor} />
                                        <Text style={{ color: themeStyle?.backgroundColor }}>{selectedHome?.homeName}</Text>
                                    </View>
                                </Tooltip>
                                {/* <Tooltip
                                isVisible={homePickerVisible}
                                contentStyle={{ maxHeight: 40, flex: 1, borderWidth: 5 }}
                                arrowStyle={{ borderWidth: 0, borderColor: 'red' }}
                                childrenWrapperStyle={{ maxHeight: 40, flex: 1 }}
                                tooltipStyle={{ maxHeight: 40, flex: 1 }}
                                content={
                                    <View style={{ flex: 1 }}>
                                        {userHomes?.map?.((home) => <Text>{home?.homeName}</Text>)}
                                    </View>
                                }
                                placement="bottom"
                                onClose={() => { setHomePickerVisible(false); setUserHomes([...userHomes, userHomes[0]]) }}
                                displayInsets={{ top: 0, bottom: 0, left: 24, right: 24 }}
                            //topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                            >
                                <TouchableOpacity
                                    onPress={() => setHomePickerVisible(true)}
                                >
                                    <Text>Press me</Text>
                                </TouchableOpacity>
                            </Tooltip> */}
                            </View>
                        </View>

                    </View>

                </StyledContainer>
            </>
        );
    }
}