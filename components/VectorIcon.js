import React, { useContext } from 'react'
import { Text } from 'react-native'
import { LocalizationContext } from '../locales/LocaleContext';
import iconMapping from '../mappings/iconMapping';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * https://stackoverflow.com/questions/30465651/passing-keys-to-children-in-react-js
 */
export const VectorIcon = ({ iconName, style, size, onPress, color }, ...rest) => {

    const localizationContext = useContext(LocalizationContext)
    const passedStyles = Array.isArray(style) ? style : [style]
    const elementProps = {
        name: iconMapping?.[`${iconName}`]?.name,
        size: size ?? 32,
        onPress: onPress?.(),
        style: style,
        color: color
    }
    console.log('VectorIcon', iconName, style, size, onPress, color)

    // return (
    //     <Text>H</Text>
    // )

    return (
        React.createElement((iconMapping?.[`${iconName}`]?.lib ?? FontAwesome), elementProps)
    )
}