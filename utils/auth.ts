import AsyncStorage from "@react-native-async-storage/async-storage";
export const setAuthToken = async (token: string) => {
	await AsyncStorage.setItem("token", token);
};
export const isAuthenticated = async () => {
	const token = await AsyncStorage.getItem("token");
	console.log(token);
	if (token !== null && token.length > 5) {
		return true;
	}

	return false;
};

export const findToken = async () => {
	return await AsyncStorage.getItem("token");
};
