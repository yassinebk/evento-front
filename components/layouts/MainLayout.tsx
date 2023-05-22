import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { YStack } from "tamagui";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<SafeAreaView>
			{/* <LinearGradient
				colors={["#28100A", "#39160D", "#43170F", "#4A1910", "#4C1A0F"]}
				locations={[0.2, 0.4]}
				height={900}
				width={600}
			> */}
			<YStack paddingHorizontal="$4" py={"$5"}>
				{children}
			</YStack>
			{/* </LinearGradient> */}
		</SafeAreaView>
	);
};

export default MainLayout;
