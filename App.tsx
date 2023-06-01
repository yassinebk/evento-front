import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import "react-native-gesture-handler";

import { TamaguiProvider, Theme } from "tamagui";
import { GuestScreens } from "@navigations/stack";
import { UserScreens } from "@navigations/authenticated-tabbar";
import config from "./tamagui.config";
import { ApolloProvider } from "@apollo/client";
import client from "./services/client";
export default function App() {
	// const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
	});
	if (!loaded) {
		return null;
	}
	return (
		<ApolloProvider client={client}>
			<TamaguiProvider config={config}>
				<Theme name="light">
					<Theme name="red">
						<NavigationContainer>
							<GuestScreens AuthenticatedNavigation={UserScreens} />
						</NavigationContainer>
					</Theme>
				</Theme>
			</TamaguiProvider>
		</ApolloProvider>
	);
}
