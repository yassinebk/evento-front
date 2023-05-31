import {
	createNativeStackNavigator,
	NativeStackNavigationOptions
} from "@react-navigation/native-stack";
import Landing from "@screens/guest-screens/Landing";
import Login from "@screens/guest-screens/Login";
import Register from "@screens/guest-screens/Register";
import React from "react";
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
	return (
		<Stack.Navigator
			initialRouteName="Guest"
			screenOptions={stackNavigationOptions}
		>
			<Stack.Screen name="Guest" component={DrawerNavigation} />
			<Stack.Screen name="Authenticated" component={AuthenticatedNavigation} />
		</Stack.Navigator>
	);
};
