// Create a new file: src/api/services/tokenManager.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  return await AsyncStorage.getItem('authToken');
};

export const setToken = async (token) => {
  await AsyncStorage.setItem('authToken', token);
};
