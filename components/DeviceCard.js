import React, { useContext, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { BackendContext } from '../backend/BackendContext';
import { VectorIcon } from '../components/VectorIcon';
import { LocalizationContext } from '../locales/LocaleContext';

export const DeviceCard = ({ pickerOptions, selectedIndex, setSelectedIndex }) => {
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


    return (
        <View style={{ marginTop: 10, width: '100%' }}>

            <View style={{ width: '100%', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                {userDevices?.map?.((device, index) => (
                    <TouchableOpacity style={[componentStyles?.shadowBox, { padding: 8, backgroundColor: '#fff', width: '30%', aspectRatio: 1, marginVertical: '2.5%', marginHorizontal: (index % 3) === 1 ? '5%' : 0 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontWeight: 'bold' }}>{device?.name}</Text>
                                <Text style={[{ fontSize: 12, color: complexTheme?.placeholderTextColor }]}>{device?.placeName}</Text>
                            </View>
                            {/* <VectorIcon iconName={"power-off"} size={16} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} /> */}
                        </View>
                        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                            <VectorIcon iconName={device?.icon} size={((Dimensions.get("window").width - 20) * 0.3 - 54) / 2} color={!!device?.state?.active ? "green" : complexTheme?.invalid?.color} />
                            <Text style={[{ fontSize: 12, color: complexTheme?.placeholderTextColor }]}>{device?.state?.displayStatus}</Text>
                        </View>
                    </TouchableOpacity>
                ))}


            </View>
        </View>
    )
}
