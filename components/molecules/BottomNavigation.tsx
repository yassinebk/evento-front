import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { IconProps } from "@tamagui/lucide-icons/types/IconProps";
import React from "react";
import { XStack, YStack } from "tamagui";
import BottomNavigationButton from "../atoms/BottomNavigationButton";

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
			paddingHorizontal="$10"
			paddingVertical="$4"
			justifyContent="space-around"
			backgroundColor="$red1"
		>
			{routes.map((route) => {
				console.log(
					routeNames[index] == route.routeName,
					routeNames[index],
					route.routeName
				);
				return (
					<BottomNavigationButton
						key={route.routeName}
						isActive={routeNames[index] == route.routeName}
						onPress={() => {
							// console.log("presseed", route.routeName);
							navigate(route.routeName as never);
						}}
					>
						<YStack alignContent="center">
							<route.icon size={24} />
						</YStack>
					</BottomNavigationButton>
				);
			})}
		</XStack>
	);
};

export default BottomNavigation;
