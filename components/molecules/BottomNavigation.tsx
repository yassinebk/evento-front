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

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
	routes,
	navigation,
	state
}) => {
	const { navigate } = navigation;
	const { index, routeNames } = state;

	return (
		<XStack
			paddingHorizontal="$6"
			paddingVertical="$4"
			justifyContent="space-between"
			backgroundColor="$red1"
		>
			{routes.map((route) => {
				console.log(
					routeNames[index] == route.routeName,
					routeNames[index],
					route.routeName
				);
				return (
					<IconButton
						key={route.routeName}
						Icon={route.icon}
						onPress={function (): void {
							navigate(route.routeName as never);
						}}
						size={60}
						factor={2.5}
						defaultColor="red"
						pressedColor="white"
					></IconButton>
				);
			})}
		</XStack>
	);
};

export default BottomNavigation;
