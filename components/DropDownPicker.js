import React, { useContext, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { BackendContext } from '../backend/BackendContext';
import { VectorIcon } from '../components/VectorIcon';
import { LocalizationContext } from '../locales/LocaleContext';

export const DropDownPicker = ({ pickerOptions, selectedIndex, setSelectedIndex }) => {
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

    const pickerRef = useRef(null);

    // const [selectedIndex, setSelectedIndex] = useState(selectedIndex);
    // const [pickerOptions, setPickerOptions] = useState(options);

    return (
        <Tooltip
            ref={pickerRef}
            height={40 * (!!pickerOptions?.length ? pickerOptions?.length + 1 : 1)}
            skipAndroidStatusBar
            pointerColor={complexTheme?.mainThemeColor}
            containerStyle={{ backgroundColor: '#fff', borderWidth: 1, borderColor: complexTheme?.mainThemeColor, width: 100, padding: 0 }}
            popover={
                <View style={{ flex: 1, justifyContent: 'space-between', width: '100%' }}>
                    {pickerOptions?.map?.((home, index) =>
                        <TouchableOpacity
                            key={`pickerOptions_${index}`}
                            style={[index === selectedIndex ? [complexTheme?.lightBackground, (index === 0 ? { borderTopRightRadius: 10, borderTopLeftRadius: 10 } : {})] : {}, { flex: 1, justifyContent: 'center', paddingLeft: 14 }]}
                            onPress={() => {
                                pickerRef?.current?.toggleTooltip?.()
                                setSelectedIndex(index)
                            }}
                        >
                            <Text style={{ color: index === selectedIndex ? complexTheme?.highlightThemeColor : '#000' }}>{home?.homeName}</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity
                        style={{ flex: 1, justifyContent: 'center', paddingLeft: 14 }}
                        onPress={() => {
                            pickerRef?.current?.toggleTooltip?.()
                            setSelectedIndex(pickerOptions?.length)
                        }}
                    >
                        <Text>{t('common.add')}</Text>
                    </TouchableOpacity>
                </View>
            }
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text >{pickerOptions?.[selectedIndex]?.homeName}</Text>
                <VectorIcon iconName={'caret-down'} size={16} color={complexTheme?.mainThemeColor} />
                <Text style={{ color: themeStyle?.backgroundColor }}>{pickerOptions?.[selectedIndex]?.homeName}</Text>
            </View>
        </Tooltip>
    )
}
