import React, { useContext } from 'react'
import { Text } from 'react-native'
import { LocalizationContext } from '../locales/LocaleContext';

/**
 * https://stackoverflow.com/questions/30465651/passing-keys-to-children-in-react-js
 */
export const StyledText = ({ id, style, children }, ...rest) => {

  const localizationContext = useContext(LocalizationContext)
  const passedStyles = Array.isArray(style) ? style : [style]

  return (
    <Text
      key={id}
      style={[{ color: passedStyles[0]?.color ?? localizationContext.themeStyle.color, borderColor: passedStyles[0]?.borderColor ?? localizationContext.themeStyle.color }, ...passedStyles]}
      {...rest}
    >
      {children}
    </Text>
  )
}
