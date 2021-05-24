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
import AmazingCropper, { DefaultFooter } from 'react-native-amazing-cropper';
import Modal from 'react-native-modal';
import RNFS from 'react-native-fs';
import Exif from 'react-native-exif'

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
    const onSubmit = data => setModalVisible(true);

    const [modalVisible, setModalVisible] = useState(false);

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
        launchImageLibrary({ includeBase64: true, quality: 0.1 }, (e) => {
            if (!!e?.base64) {
                onChange(e)
                Image.getSize(e?.uri, (width, height) => {
                    console.log('getSize Lib', width, height)
                })
            }
        })
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
                            <View
                                style={[componentStyles?.inputBox, componentStyles?.shadowBox, { flexDirection: 'column', flex: !!value ? 1 : 0 }]}

                            >
                                <TouchableOpacity
                                    onPress={() => { openPhonePicture(onChange) }}
                                    style={{ flexDirection: 'row', minHeight: 50, alignItems: 'center' }}>
                                    <Text>{t('addHomeForm.homePic')}</Text>

                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <VectorIcon iconName={'right'} size={20} color={complexTheme?.mainThemeColor} />
                                    </View>
                                </TouchableOpacity>
                                {!!value && <TouchableOpacity style={{ width: '100%', flex: 1 }}
                                    onPress={() => {
                                        Image.getSize(value?.uri, (width, height) => {
                                            console.log('getSize', width, height)
                                            //onChange({ ...value, height: height, width: width })
                                            setModalVisible(true)
                                        })

                                    }}
                                >
                                    <Image
                                        style={{ width: '100%', flex: 1 }}
                                        source={{
                                            uri: value?.uri,
                                        }}
                                        resizeMode='center'
                                    />
                                </TouchableOpacity>}
                                <Modal
                                    isVisible={modalVisible}
                                    backdropOpacity={0.7}
                                    onBackdropPress={() => setModalVisible(false)}
                                    useNativeDriver
                                    hideModalContentWhileAnimating
                                    style={{ margin: 0 }}
                                >
                                    <AmazingCropper
                                        // Pass custom text to the default footer
                                        footerComponent={<DefaultFooter doneText='完成' rotateText='旋轉' cancelText='取消' />}
                                        onDone={(croppedImageUri) => {

                                            RNFS.readFile(croppedImageUri, 'base64')
                                                .then(base64String => {
                                                    Image.getSize(croppedImageUri, (width, height) => {
                                                        console.log('getSize', width, height)
                                                        onChange({ uri: croppedImageUri, height: height, width: width, base64: base64String })
                                                        setModalVisible(false);
                                                    })
                                                });
                                        }}
                                        onError={() => { }}
                                        onCancel={() => { setModalVisible(false) }}
                                        imageUri={value?.uri}
                                        imageWidth={value?.width}
                                        imageHeight={value?.height}
                                        BORDER_WIDTH={10}
                                    />
                                </Modal>
                            </View>
                        )}
                        name="homePic"
                        defaultValue={null}
                    />



                </View>
            </StyledContainer>
        </>
    );
}