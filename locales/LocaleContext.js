import AsyncStorage from '@react-native-community/async-storage'; // 1
import React, { createContext, useState } from 'react';
import { useColorScheme } from 'react-native'
import LocalizedStrings from 'react-native-localization'; // 2
import * as RNLocalize from 'react-native-localize'; // 3
import en from './en';
import zh from './zh';
import zh_cn from './zh_cn';

const DEFAULT_LANGUAGE = 'en-US';
const APP_LANGUAGE = 'appLanguage';

const languages = {
  en,
  zh,
  'en-US': { ...en },
  'zh-Hans-CN': { ...zh_cn },
  'zh-Hant-TW': { ...zh },
  'zh-TW': { ...zh }
};

const themes = {
  light: {
    color: '#000',
    backgroundColor: '#fff',
    borderColor: '#e7e7e7',
    shadowColor: '#222222',

  },
  dark: {
    color: '#e7e7e7',
    backgroundColor: '#222222',
    borderColor: '#e7e7e7',
    shadowColor: '#e7e7e7',

  },
}

const complexTheme = {
  light: {
    overlay: {
      color: '#f5f5f5',
      backgroundColor: '#222222',
    },
    shade: {
      backgroundColor: '#f5f5f5'
    },
    invalid: {
      color: '#727272'
    },
    lightBackground: {
      backgroundColor: '#f3f9f9'
    }
  },
  dark: {
    overlay: {
      color: '#444',
      backgroundColor: '#fff',
    },
    shade: {
      backgroundColor: '#4a4747'
    },
    invalid: {
      color: '#969696'
    },
    lightBackground: {
      backgroundColor: '#f3f9f9'
    }
  }
}

const componentStylesHelper = (themeStyle) => ({
  shadowBox: {
    shadowColor: themeStyle?.color ?? '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 5
  }
})

const t = new LocalizedStrings(languages); // 4

export const LocalizationContext = createContext({ // 5
  t,
  setAppLanguage: () => { }, // 6
  appLanguage: DEFAULT_LANGUAGE, // 7
  initializeAppLanguage: () => { }, // 8
  setAppTheme: () => { },
  appTheme: 'light',
  initializeAppTheme: () => { },
  themeStyle: themes.dark,
  complexTheme: complexTheme.light,
  componentStyles: componentStylesHelper(themes.light)
});

export const LocalizationProvider = ({ children }) => { // 9
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);
  const [appTheme, setAppTheme] = useState(useColorScheme() ?? 'light');
  const [themeStyle, setThemeStyle] = useState(themes?.[`${useColorScheme() ?? 'light'}`]);
  const [complexThemeStyle, setComplexThemeStyle] = useState(complexTheme?.[`${useColorScheme() ?? 'light'}`]);
  const [componentStyles, setComponentStyles] = useState(componentStylesHelper(themes?.[`${useColorScheme() ?? 'light'}`]));


  // 11
  const setLanguage = language => {
    t.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  const setTheme = theme => {
    setAppTheme(theme);
    setThemeStyle(themes?.[`${theme ?? 'light'}`])
    setComplexThemeStyle(complexTheme?.[`${theme ?? 'light'}`])
    setComponentStyles(componentStylesHelper(themes?.[`${theme ?? 'light'}`]))
    AsyncStorage.setItem('appTheme', theme);
  };

  // 12
  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

    // if (currentLanguage) {
    //   setLanguage(currentLanguage);
    // } else {
    //   let localeCode = DEFAULT_LANGUAGE;
    //   const supportedLocaleCodes = t.getAvailableLanguages();
    //   const phoneLocaleCodes = RNLocalize.getLocales().map(
    //     locale => locale.languageTag,
    //   );
    //   console.log('phoneLocaleCodes', phoneLocaleCodes, supportedLocaleCodes)
    //   phoneLocaleCodes.some(code => {
    //     if (supportedLocaleCodes.includes(code)) {
    //       localeCode = code;
    //       return true;
    //     }
    //   });
    //   setLanguage(localeCode);
    // }

    let localeCode = DEFAULT_LANGUAGE;
    const supportedLocaleCodes = t.getAvailableLanguages();
    const phoneLocaleCodes = RNLocalize.getLocales().map(
      locale => locale.languageTag,
    );
    console.log('phoneLocaleCodes', phoneLocaleCodes, supportedLocaleCodes)
    phoneLocaleCodes.some(code => {
      if (supportedLocaleCodes.includes(code)) {
        localeCode = code;
        return true;
      }
    });
    setLanguage(localeCode);
  };

  const initializeAppTheme = async () => {
    const currentTheme = await AsyncStorage.getItem('appTheme');
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      setTheme(useColorScheme() ?? 'light')
    }

  };

  return (
    <LocalizationContext.Provider
      value={{
        t,
        setAppLanguage: setLanguage, // 10
        appLanguage,
        initializeAppLanguage,
        setAppTheme: setTheme,
        appTheme,
        initializeAppTheme,
        themeStyle,
        complexTheme: complexThemeStyle,
        componentStyles
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};