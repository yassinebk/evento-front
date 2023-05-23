import {
	createBottomTabNavigator,
	BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs";
import { Home, Heart, Ticket, User } from "@tamagui/lucide-icons";
import BottomNavigation from "../components/molecules/BottomNavigation";
import EventInfo from "../screens/user-screens/EventInfo";
import Feed from "../screens/user-screens/Feed";
import MyEvents from "../screens/user-screens/MyEvents";
import Profile from "../screens/user-screens/Profile";
import Tickets from "../screens/user-screens/Tickets";
import UserSettings from "../screens/user-screens/UserSettings";
import { Route } from "../components/molecules/BottomNavigation";

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
		icon: Ticket,
		routeName: "Tickets",
		label: "My Tickets"
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
