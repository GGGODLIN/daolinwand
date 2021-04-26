import React, { useContext, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Alert,
    DeviceEventEmitter
} from 'react-native';
import { LocalizationContext } from '../locales/LocaleContext';
import { StyledText } from '../components/StyledText';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as WeChat from 'react-native-wechat-lib';

export const LoginScreen = (props) => {
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


    // useEffect(() => {
    //     initializeAppLanguage()
    //     DeviceEventEmitter.addListener('WeChat_Resp', resp => {
    //         console.log('res:', resp)
    //         if (resp.type === 'WXLaunchMiniProgramReq.Resp') { // 从小程序回到APP的事件
    //             console.log('WXLaunchMiniProgramReq.Resp', resp)
    //         } else if (resp.type === 'SendMessageToWX.Resp') { // 发送微信消息后的事件
    //             console.log('SendMessageToWX.Resp', resp)
    //         } else if (resp.type === 'PayReq.Resp') { // 支付回调
    //             console.log('PayReq.Resp', resp)
    //         }
    //     });
    // }, [])

    useEffect(() => {
        (async () => {
            let isRegisterApp = await WeChat.registerApp('1111771316', 'https://www.google.com')
            console.log('isRegisterApp2', isRegisterApp)
        })();
    }, []);

    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#137775' }}>
                <View style={{ marginTop: '60%', marginLeft: 10 }}>
                    <Text style={{ color: "#fff", fontSize: 24 }}>{t?.loginScreen?.welcome}</Text>
                    <Text style={{ color: "#fff" }}>{t?.loginScreen?.loginFirst}</Text>
                </View>
            </View>
            <View style={{
                position: 'absolute',
                bottom: 0,
                height: '50%',
                width: '100%',
                backgroundColor: '#fff',
                borderTopLeftRadius: 50,
                justifyContent: 'space-evenly',
                paddingBottom: '20%'
            }}>
                <View style={[complexTheme?.lightBackground, { alignSelf: 'center', padding: 10, borderRadius: 10 }]}>
                    <MaterialCommunityIcons name="home-city" size={40} color="green" />
                </View>
                <View>
                    <TouchableOpacity
                        style={[
                            componentStyles?.shadowBox,
                            complexTheme?.lightBackground,
                            { padding: 10, marginHorizontal: '15%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }
                        ]}
                        onPress={async () => {
                            setAppLanguage('zh-Hans-CN')
                            //console.log('isWXAppSupportApi', await WeChat.openWXApp())
                            let scope = 'snsapi_userinfo';
                            let state = 'UR0162UEVNof0uIK';
                            console.log("sending auth request for scope ", scope)
                            //  WeChat.shareText({
                            //     text: 'Text content.',
                            //     scene: 0,
                            // });
                            props?.setIsLogin?.(true)
                            WeChat.sendAuthRequest("snsapi_userinfo", state)
                                .then(responseCode => {
                                    //返回code码，通过code获取access_token
                                    console.log('responseCode', responseCode)
                                })
                                .catch(err => {
                                    console.log('err', err)
                                })

                            //判断微信是否安装
                            // WeChat.isWXAppInstalled()
                            //     .then(async (isInstalled) => {
                            //         if (isInstalled) {
                            //             //发送授权请求
                            //             //console.log("shareText ", await WeChat.shareText({ text: 'Hello', scene: 2 }))
                            //             console.log("sending auth request for scope ", scope)
                            //             WeChat.sendAuthRequest("snsapi_userinfo", state)
                            //                 .then(responseCode => {
                            //                     //返回code码，通过code获取access_token
                            //                     console.log('responseCode', responseCode)
                            //                 })
                            //                 .catch(err => {
                            //                     console.log('err', err)
                            //                 })



                            //         }
                            //     })

                        }}
                    >
                        <AntDesignIcons name="wechat" size={24} color="green" />
                        <StyledText style={{ marginLeft: 10 }}>{t?.loginScreen?.wechatLogin}</StyledText>
                    </TouchableOpacity>
                    <Text style={[complexTheme?.invalid, { marginLeft: 10, textAlign: 'center', fontSize: 12 }]}>{t?.loginScreen?.userAgree}  [  {t?.loginScreen?.agreement}  ]</Text>
                </View>
            </View>
            <View style={{
                zIndex: 100,
                position: 'absolute',
                right: '-10%',
                height: '20%',
                backgroundColor: '#fff',
                borderRadius: 1000000,
                top: '40%',
                aspectRatio: 1
            }}>
                <LinearGradient
                    colors={['#fff', '#137775']}
                    locations={[0, 1]}
                    style={{ flex: 1, borderRadius: 1000000, margin: 2, justifyContent: 'center' }}
                >
                </LinearGradient>
            </View>
        </>
    );
}