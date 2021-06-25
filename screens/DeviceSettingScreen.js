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

export const DeviceSettingScreen = ({ navigation }) => {

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

