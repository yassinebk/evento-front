import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import { useColorScheme } from "react-native";
import "react-native-gesture-handler";

import { TamaguiProvider, Theme } from "tamagui";
import { GuestScreens } from "./screens/guest-screens";
import { UserScreens } from "./screens/user-screens";
import config from "./tamagui.config";
export default function App() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
	});
	if (!loaded) {
		return null;
	}
	return (
		<TamaguiProvider config={config}>
			<Theme name={colorScheme === "light" ? "light" : "dark"}>
				<NavigationContainer>
					<GuestScreens AuthenticatedNavigation={UserScreens} />
				</NavigationContainer>
			</Theme>
		</TamaguiProvider>
	);
}
