import React, { useContext, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Alert,
    DeviceEventEmitter
} from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';
import { StyledText } from '../components/StyledText';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as WeChat from 'react-native-wechat-lib';

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



    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#137775' }}>

            </View>
        </>
    );
}