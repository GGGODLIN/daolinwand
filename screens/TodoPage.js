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
import { StyledContainer } from '../components/StyledContainer';

export const TodoPage = () => {
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
            <StyledContainer>
                <Text>Todo</Text>
            </StyledContainer>
        </>
    );
}