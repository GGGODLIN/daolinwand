import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, Image } from "react-native";
import { LocalizationContext } from '../locales/LocaleContext';
import { BackendContext } from '../backend/BackendContext';
import { StyledText } from '../components/StyledText';
import { StyledContainer } from '../components/StyledContainer';
import { dispatchFetchRequest } from "../constants/Backend";
import { useFocusEffect } from '@react-navigation/native';
import { LoadingPage } from '../components/LoadingPage';
import { VectorIcon } from '../components/VectorIcon'
import { useForm, Controller } from "react-hook-form";
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export const AddHomeFormScreen = ({ navigation, route }) => {
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

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log('onSubmit', data);

    const [homePic, setHomePic] = useState(null);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // in your app, you can extract the arrow function into a separate component
            // to avoid creating a new one every time you update the options
            headerRight: () => (
                <Item title={t('common.done')} onPress={handleSubmit(onSubmit)} />
            ),
        });
    }, [navigation]);

    const openPhonePicture = (onChange) => {
        launchImageLibrary({ includeBase64: true }, (e) => { e?.base64 && onChange(e) })
    }


    return (
        <>
            <StyledContainer>
                <View style={{ padding: 10, flex: 1 }}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={[componentStyles?.inputBox, componentStyles?.shadowBox]}>
                                <Text>{t('common.name')}</Text>
                                <TextInput
                                    style={componentStyles?.rootInput}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="name"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.name && <Text style={componentStyles?.inputErrorText}>{t('common.require')}</Text>}

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={[componentStyles?.inputBox, componentStyles?.shadowBox]}>
                                <Text>{t('addHomeForm.gwModel')}</Text>
                                <TextInput
                                    style={componentStyles?.rootInput}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        rules={{ required: true }}
                        name="gwModel"
                        defaultValue=""
                    />
                    {errors.gwModel && <Text style={componentStyles?.inputErrorText}>{t('common.require')}</Text>}

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TouchableOpacity
                                style={[componentStyles?.inputBox, componentStyles?.shadowBox, { flexDirection: 'column', flex: !!value ? 1 : 0 }]}
                                onPress={() => { openPhonePicture(onChange) }}
                            >
                                <View style={{ flexDirection: 'row', minHeight: 50, alignItems: 'center' }}>
                                    <Text>{t('addHomeForm.homePic')}</Text>

                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <VectorIcon iconName={'right'} size={20} color={complexTheme?.mainThemeColor} />
                                    </View>
                                </View>
                                {!!value && <View style={{ width: '100%', flex: 1 }}>
                                    <Image
                                        style={{ width: '100%', flex: 1 }}
                                        source={{
                                            uri: `data:${value?.type};base64,${value?.base64}`,
                                        }}
                                        resizeMode='center'
                                    />
                                </View>}
                            </TouchableOpacity>
                        )}
                        name="homePic"
                        defaultValue={null}
                    />



                </View>
            </StyledContainer>
        </>
    );
}