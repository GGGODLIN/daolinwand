import AsyncStorage from '@react-native-community/async-storage'; // 1
import React, { createContext, useState, useEffect } from 'react';
import { goldenSample } from '../data'

export const SpaceContext = createContext({
    userSpaces: null,
    setUserSpaces: () => { },
    userDevices: null,
    setUserDevices: () => { },
    handlePayload: () => { },
    event: null
});

export const SpaceProvider = ({ children }) => {

    const [userSpaces, setUserSpaces] = useState(goldenSample?.spaces?.map((space) => ({ ...space, devices: goldenSample?.devices?.filter((device) => (device?.spaceId === space?.id && !device?.attrs?.[0]?.appHidden)) })));
    const [userDevices, setUserDevices] = useState(goldenSample?.devices);
    const [event, setEvent] = useState(null);


    // const handlePayload = (payload) => {
    //     console.log('handlePayload', payload);

    //     const { dvId, dvType, contents } = JSON.parse(payload);
    //     let newDevices = userDevices?.map((device) => {
    //         if (device?.dvId === dvId) {
    //             let newAttrs = [...device?.attrs]
    //             newAttrs = newAttrs?.map((attr) => {
    //                 let matchAttr = contents?.find((content) => attr?.createdRT === content?.rt?.[0])
    //                 if (!!matchAttr) {
    //                     return ({ ...attr, value: matchAttr?.value })
    //                 } else {
    //                     return attr
    //                 }
    //             })
    //             return { ...device, attrs: newAttrs }
    //         } else {
    //             return device
    //         }
    //     })
    //     setUserDevices(newDevices)
    //     setUserSpaces(userSpaces?.map((space) => ({ ...space, devices: newDevices?.filter((device) => (device?.spaceId === space?.id && !device?.attrs?.[0]?.appHidden)) })))

    // };

    const handlePayload = (payload) => {
        console.log('handlePayload', payload);

        setEvent(payload)

    };

    return (
        <SpaceContext.Provider
            value={{
                userSpaces,
                setUserSpaces,
                userDevices,
                setUserDevices,
                handlePayload,
                event
            }}>
            {children}
        </SpaceContext.Provider>
    );
};