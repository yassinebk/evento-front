import {
	NativeStackNavigationOptions,
	createNativeStackNavigator
} from "@react-navigation/native-stack";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import React from "react";

// interface GuestStackParamList {
// 	Login: {
// 		screen: string;
// 	};
// 	Register: {
// 		screen: string;
// 	};
// 	Home: {
// 		screen: string;
// 	};
// }

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
