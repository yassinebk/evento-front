import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Share } from "@tamagui/lucide-icons";
import React from "react";
import { XStack, useWindowDimensions, styled } from "tamagui";
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
			defaultColor="$red1"
			Icon={ArrowLeft}
			onPress={navigateBack}
			size={50}
			factor={2.5}
		></IconButton>
	);
};

const BlurViewStyled = styled(BlurView, {
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	height: "100%",
	width: "100%",
	zIndex: -1
});

export const Header: React.FC<HeaderProps> = ({}) => {
	const { width } = useWindowDimensions();
	return (
		<XStack
			zIndex={60}
			width={width}
			// backgroundColor="black"
			// backgroundColor="black"
			justifyContent="space-between"
			alignItems="center"
			position="absolute"
			top={20}
			paddingHorizontal={1}
			marginHorizontal="auto"
		>
			<BlurViewStyled />
			<XStack
				width="100%"
				paddingHorizontal={4}
				justifyContent="space-between"
				alignItems="center"
			>
				<BackButton />
				<IconButton
					Icon={Share}
					size={50}
					factor={2.5}
					defaultColor="$red1"
					onPress={() => console.log("Sharing event")}
				/>
			</XStack>
		</XStack>
	);
};

export default Header;
