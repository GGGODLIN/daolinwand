import React, { useContext } from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { LocalizationContext } from '../locales/LocaleContext';
import { BackendContext } from '../backend/BackendContext';
import iconMapping from '../mappings/iconMapping';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


//
//<VectorIcon iconName={'caretDown'} size={16} color={complexTheme?.mainThemeColor} />

export const VectorIcon = ({ iconName, style, size, onPress, color }, ...rest) => {

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
        iconSet,
        baseUrl,
        iconPath
    } = useContext(BackendContext)

    const passedStyles = Array.isArray(style) ? style : [style]
    const elementProps = {
        name: iconMapping?.[`${iconName}`]?.name,
        size: size ?? 32,
        onPress: onPress?.(),
        style: style,
        color: color
    }

    if (!!iconSet?.[`${iconName}`]?.path) {
        return (
            <TouchableOpacity
                disabled={!onPress}
                onPress={onPress}
            >
                <Image
                    source={{ uri: `${baseUrl}${iconPath}${iconSet?.[`${iconName}`]?.path}`, headers: { Authorization: token } }}
                    style={[{ width: size ?? 28, height: size ?? 28, tintColor: color ?? complexTheme?.mainThemeColor }, style]}
                />
            </TouchableOpacity>
        )
    } else {
        return (
            React.createElement((iconMapping?.[`${iconName}`]?.lib ?? FontAwesome), elementProps)
        )
    }

    // return (
    //     <Image
    //         source={{ uri: 'http://192.168.1.14:3000/static/icons/b-2.png', headers: { Authorization: token } }}
    //         style={{ width: 28, height: 28, tintColor: complexTheme?.mainThemeColor }}
    //     />
    // )


}