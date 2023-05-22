import {
	BottomTabNavigationOptions,
	createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import BottomNavigation, {
	Route
} from "../../components/molecules/BottomNavigation";
import EventInfo from "./EventInfo";
import Feed from "./Feed";
import MyEvents from "./MyEvents";
import Profile from "./Profile";
import Tickets from "./Tickets";
import UserSettings from "./UserSettings";

import { Heart, Home, User } from "@tamagui/lucide-icons";
const Tab = createBottomTabNavigator();

const tabNavigationOptions: BottomTabNavigationOptions = {
	tabBarActiveTintColor: "#e91e63",
	tabBarInactiveTintColor: "gray",
	headerShown: false,
	tabBarAllowFontScaling: true
};

const routes: Route[] = [
	{
		icon: Home,
		routeName: "Feed",
		label: "Feed"
	},
	{
		icon: Heart,
		routeName: "MyEvents",
		label: "My events"
	},
	{
		icon: User,
		routeName: "Profile",
		label: "Profile"
	}
];

export const UserScreens = () => {
	return (
		<Tab.Navigator
			initialRouteName="Feed"
			screenOptions={tabNavigationOptions}
			tabBar={(props) => <BottomNavigation {...props} routes={routes} />}
		>
			<Tab.Screen name="Feed" component={Feed} />
			<Tab.Screen name="User-Settings" component={UserSettings} />
			<Tab.Screen name="Profile" component={Profile} />
			<Tab.Screen name="MyEvents" component={MyEvents} />
			<Tab.Screen name="Tickets" component={Tickets} />
			<Tab.Screen name="EventInfo" component={EventInfo} />
		</Tab.Navigator>
	);
};
