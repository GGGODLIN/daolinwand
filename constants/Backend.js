import { AsyncStorage } from 'react-native'


export const storage = {
  clientAccessToken: 'token',
  clientUsername: 'clientUsername',
  clientPassword: 'clientPassword'
}


export const baseUrl = 'http://192.168.1.107:4000'


export const api = {
  baseUrl,
  homeScreen: {
    getUserHomeData: `${baseUrl}/getUserHomeData`,
  }
}

export const getToken = async () => {

  token = await AsyncStorage.getItem(storage.clientAccessToken)


  return JSON.parse(token)
}

export const removeToken = async () => {
  await AsyncStorage.removeItem(storage.clientAccessToken)
}



export const dispatchFetchRequest = async (
  endpoint,
  payload,
  successCallback,
  failCallback
) => {

  return dispatchFetchRequestWithOption(endpoint, payload, { defaultMessage: true }, successCallback, failCallback)
}

export const dispatchFetchRequestWithOption = async (
  endpoint,
  payload,
  options,
  successCallback,
  failCallback
) => {
  try {
    //with token
    // let token = await AsyncStorage.getItem(storage.clientAccessToken)


    // if (token != null) {
    //   const tokenObj = JSON.parse(token)
    //   payload.headers.Authorization = payload?.headers?.Authorization ?? `Bearer ${tokenObj.access_token}`

    //   const response = await fetch(endpoint, payload)

    //   if (!response.ok) {

    //     if (failCallback !== undefined) {
    //       failCallback(response)
    //     }
    //   } else {

    //     !!successCallback && successCallback(response)
    //   }

    //   return response
    // } else {
    //   const errorMessage = 'Token does not exist. Please consult your service provider.'

    //   console.warn(errorMessage)
    // }

    const response = await fetch(endpoint, payload)

    if (!response.ok) {

      if (failCallback !== undefined) {
        failCallback(response.clone())
      }
    } else {

      !!successCallback && successCallback(response.clone())
    }

    return response
  } catch (error) {
    console.error('Token Err', error)
    failCallback?.(error)
  }
}


