import React, { useContext } from 'react'
import { View } from 'react-native'
import { LocalizationContext } from '../locales/LocaleContext';

export const StyledContainer = ({ children }) => {

    const localizationContext = useContext(LocalizationContext)

    return (
        <View style={[localizationContext.themeStyle, { flex: 1 }]}>
            {children}
        </View>
    )
}