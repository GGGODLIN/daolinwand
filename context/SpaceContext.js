import AsyncStorage from '@react-native-community/async-storage'; // 1
import React, { createContext, useState, useEffect } from 'react';
import { goldenSample } from '../data'

export const SpaceContext = createContext({
    userSpaces: null,
    setUserSpaces: () => { },
    userDevices: null,
    setUserDevices: () => { },
});

export const SpaceProvider = ({ children }) => {

    const [userSpaces, setUserSpaces] = useState(goldenSample?.spaces?.map((space) => ({ ...space, devices: goldenSample?.devices?.filter((device) => device?.spaceId === space?.id) })));
    const [userDevices, setUserDevices] = useState(goldenSample?.devices);

    return (
        <SpaceContext.Provider
            value={{
                userSpaces,
                setUserSpaces,
                userDevices,
                setUserDevices
            }}>
            {children}
        </SpaceContext.Provider>
    );
};