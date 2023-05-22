import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { YStack } from "tamagui";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<SafeAreaView>
			<YStack paddingHorizontal="$4">{children}</YStack>
		</SafeAreaView>
	);
};

export default MainLayout;
