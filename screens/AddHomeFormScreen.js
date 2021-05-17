import React, { useContext, useEffect, useCallback, useState, useRef } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity } from "react-native";
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

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // in your app, you can extract the arrow function into a separate component
            // to avoid creating a new one every time you update the options
            headerRight: () => (
                <Item title={t('common.done')} onPress={handleSubmit(onSubmit)} />
            ),
        });
    }, [navigation]);

    return (
        <>
            <StyledContainer>
                <View style={{ padding: 10 }}>
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
                        name="gwModel"
                        defaultValue=""
                    />

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View style={[componentStyles?.inputBox, componentStyles?.shadowBox]}>
                                <Text>{t('addHomeForm.homePic')}</Text>
                                <TextInput
                                    style={componentStyles?.rootInput}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="homePic"
                        defaultValue=""
                    />



                </View>
            </StyledContainer>
        </>
    );
}