import AsyncStorage from "@react-native-async-storage/async-storage";

export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export const setLocalSatorageItem = async (key: string, value: string) => {
  await AsyncStorage.setItem(key, value);
};

export const getLocalSatorageItem = async (key: string) => {
  await AsyncStorage.getItem(key);
};

export const removeLocalSatorageItem = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
