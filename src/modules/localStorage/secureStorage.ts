import * as SecureStore from 'expo-secure-store'

import {SecureStorageKeys} from '../../global'

const setItem = async (key: SecureStorageKeys, value: string) => {
  try {
    return await SecureStore.setItemAsync(key, value)
  } catch (error) {
    throw error
  }
}

const getItem = async (key: SecureStorageKeys) => {
  try {
    return await SecureStore.getItemAsync(key)
  } catch (error) {
    throw error
  }
}

const deleteItem = async (key: SecureStorageKeys) => {
  try {
    return await SecureStore.deleteItemAsync(key)
  } catch (error) {
    throw error
  }
}

export {setItem, getItem, deleteItem}
