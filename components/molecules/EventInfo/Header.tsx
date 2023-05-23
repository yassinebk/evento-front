import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Share } from "@tamagui/lucide-icons";
import React from "react";
import { XStack, useWindowDimensions } from "tamagui";
import IconButton from "@components/atoms/IconButton";
import { BlurView } from "expo-blur";

interface HeaderProps {}

const BackButton = () => {
	const { canGoBack, goBack } = useNavigation();

	const navigateBack = () => {
		if (canGoBack()) goBack();
	};

	return (
		<IconButton
			Icon={ArrowLeft}
			onPress={navigateBack}
			size={50}
			factor={2.5}
		></IconButton>
	);
};

export const Header: React.FC<HeaderProps> = ({}) => {
	const { width } = useWindowDimensions();
	return (
		<XStack
			zIndex={10}
			width={width}
			// backgroundColor="black"
			justifyContent="space-between"
			alignItems="center"
			position="absolute"
			top={30}
			paddingHorizontal={10}
			marginHorizontal="auto"
		>
			<BlurView />
			<BackButton />
			<IconButton
				Icon={Share}
				size={50}
				factor={2.5}
				onPress={() => console.log("Sharing event")}
			/>
		</XStack>
	);
};

export default Header;
