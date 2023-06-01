import {
	DrawerNavigationOptions,
	createDrawerNavigator
} from "@react-navigation/drawer";
import { Landing, Login, Register } from "@screens/guest-screens";

const Drawer = createDrawerNavigator();

const drawerNavigationOptions: DrawerNavigationOptions = {
	drawerPosition: "left",
	drawerType: "slide",
	drawerStyle: {
		width: "80%"
	}
};

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Register"
			screenOptions={drawerNavigationOptions}
		>
			<Drawer.Screen
				name="Home"
				component={Landing}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen name="Login" component={Login} />
			<Drawer.Screen name="Register" component={Register} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigation;
