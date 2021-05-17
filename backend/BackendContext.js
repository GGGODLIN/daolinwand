import AsyncStorage from '@react-native-community/async-storage'; // 1
import React, { createContext, useState, useEffect } from 'react';


export const BackendContext = createContext({
    baseUrl: null,
    jsonServerBaseUrl: null,
    iconPath: null,
    token: null,
    getToken: () => { },
    api: () => { },
    iconSet: null
});

export const BackendProvider = ({ children }) => {
    console.log('BackendProvider Render!')

    const [baseUrl, setBaseUrl] = useState('http://192.168.1.14:3000');
    const [jsonServerBaseUrl, setJsonServerBaseUrl] = useState('http://192.168.81.73:4000');
    const [iconPath, setIconPath] = useState('/static/icons/');
    const [username, setUsername] = useState('skymap_admin');
    const [password, setPassword] = useState('password');
    const [token, setToken] = useState(null);
    const [iconSet, setIconSet] = useState(null);

    const api = (baseUrl) => ({
        getToken: `${baseUrl}/api/login`,
        getIcons: `${baseUrl}/getIconSet`,
        homeScreen: {
            getUserHomeData: `${baseUrl}/getUserHomeData`,
        },

    })

    useEffect(() => {
        (async () => {
            getToken()
            getIcons()
        })();
    }, []);

    const getToken = async () => {
        try {
            let response = await fetch(api(baseUrl)?.getToken, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            if (!response.ok) {
                console.warn('getTokenFailed', await response.text())
            } else {
                let res = await response.json()
                console.log('getToken', res, response.headers.map.authorization)
                setToken(response.headers.map.authorization)
            }
        } catch (error) {
            console.error('getTokenError', error)
        }

    }

    const getIcons = async () => {
        let response = await fetch(api(jsonServerBaseUrl)?.getIcons, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        if (!response.ok) {
            console.warn('getIconsFailed', await response.text())
        } else {
            let res = await response.json()
            //console.log('getIcons', res)
            let iconMap = {}
            res?.forEach?.((item) => {
                iconMap.[`${item?.name}`] = { ...item }
            })
            setIconSet(iconMap)
        }
    }

    return (
        <BackendContext.Provider
            value={{
                baseUrl,
                jsonServerBaseUrl,
                iconPath,
                token,
                getToken,
                api,
                iconSet
            }}>
            {children}
        </BackendContext.Provider>
    );
};