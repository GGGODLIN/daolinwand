import React, { useContext } from 'react'
import { View } from 'react-native'
import { LocalizationContext } from '../locales/LocaleContext';
import { ActivityIndicator } from 'react-native-paper';

export const LoadingPage = () => {

    const localizationContext = useContext(LocalizationContext)

    return (
        <View style={[localizationContext.themeStyle, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator animating={true} color={localizationContext?.complexTheme?.mainThemeColor} size={40} />
        </View>
    )
}