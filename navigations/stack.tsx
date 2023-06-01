import MainLayout from "@components/layouts/MainLayout";
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions
} from "@react-navigation/native-stack";
import { isAuthenticated } from "@utils/auth";
import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";
import { Spinner, YStack } from "tamagui";
import DrawerNavigation from "./drawer-navigation";

const Stack = createNativeStackNavigator<any>();

interface GuestScreensProps {
	AuthenticatedNavigation: React.FC<any>;
}

const stackNavigationOptions: NativeStackNavigationOptions = {
	headerShown: false,
	gestureEnabled: true
};

export const GuestScreens: React.FC<GuestScreensProps> = ({
	AuthenticatedNavigation
}) => {
	const [initialRoute, setInitialRoute] = useState("Guest");
	const [loading, setLoading] = useState(true);
	const checkAuthenticated = async () => {
		const isUserAuthenticated = await isAuthenticated();
		console.log(isUserAuthenticated);
		if (isUserAuthenticated) setInitialRoute("Authenticated");
		setLoading(false);
	};

	useEffect(() => {
		console.log("here");
		checkAuthenticated();
	}, []);
	if (loading) {
		return <LoadingScreen />;
	}
	return (
		<Stack.Navigator
			initialRouteName={initialRoute}
			screenOptions={stackNavigationOptions}
		>
			<Stack.Screen name="Guest" component={DrawerNavigation} />
			<Stack.Screen name="Authenticated" component={AuthenticatedNavigation} />
		</Stack.Navigator>
	);
};

const LoadingScreen = () => {
	const { height } = useWindowDimensions();

	return (
		<MainLayout>
			<YStack height={height - 100} alignItems="center" justifyContent="center">
				<Spinner color="$red7Dark" size={80 as unknown as "large"} />
			</YStack>
		</MainLayout>
	);
};
