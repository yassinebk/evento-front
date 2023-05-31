import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { IconProps } from "@tamagui/lucide-icons/types/IconProps";
import React from "react";

import { XStack } from "tamagui";
import IconButton from "../atoms/IconButton";

export type Route = {
	routeName: string;
	label: string;
	icon: React.NamedExoticComponent<IconProps>;
};
interface BottomNavigationProps extends BottomTabBarProps {
	routes: Route[];
}

const hideOnScreens = ["EventInfo"]; // put here name of screen where you want to hide tabBar

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
	routes,
	navigation,
	state
}) => {
	const { navigate } = navigation;

	const { index, routeNames } = state;

	console.log("Navigated to ", routeNames[index]);

	if (hideOnScreens.includes(routeNames[index])) return null;

	return (
		<XStack
			paddingHorizontal="$6"
			paddingVertical="$4"
			justifyContent="space-between"
			backgroundColor="white"
			
		>
			{routes.map((route) => {
				return (
					<IconButton
						key={route.routeName}
						Icon={route.icon}
						onPress={function (): void {
							navigate(route.routeName as never);
						}}
						isActive={routeNames[index] == route.routeName}
						size={60}
						factor={2.5}
						defaultColor="$red10"
						pressedColor="white"
					/>
				);
			})}
		</XStack>
	);
};

export default BottomNavigation;
