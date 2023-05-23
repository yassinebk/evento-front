import {
	createNativeStackNavigator,
	NativeStackNavigationOptions
} from "@react-navigation/native-stack";
import Landing from "@screens/guest-screens/Landing";
import Login from "@screens/guest-screens/Login";
import Register from "@screens/guest-screens/Register";
import React from "react";

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
			initialRouteName="Authenticated"
			screenOptions={stackNavigationOptions}
		>
			<Stack.Screen name="Home" component={Landing} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
			<Stack.Screen name="Authenticated" component={AuthenticatedNavigation} />
		</Stack.Navigator>
	);
};
