import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';

export const LoginScreen = () => {
    const {
        t,
        appLanguage,
        setAppLanguage,
        initializeAppLanguage,
        themeStyle,
        appTheme,
        setAppTheme
    } = useContext(LocalizationContext)

    initializeAppLanguage()

    return (
        <View style={{ flex: 1, backgroundColor: '#137775' }}>
            <Text>{t['menu']['home']}</Text>
            <TouchableOpacity
                onPress={() => {
                    setAppLanguage('en')
                    setAppTheme(appTheme === 'light' ? 'dark' : 'light')
                }}
            >
                <Text style={themeStyle}>{t['menu']['home']}</Text>
            </TouchableOpacity>
        </View>
    );
}