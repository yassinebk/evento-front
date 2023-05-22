import { AlignLeft } from "@tamagui/lucide-icons";
import React, { useState } from "react";
import { Avatar, Button, Paragraph, XStack } from "tamagui";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<XStack w={"100%"} justifyContent="space-between" alignItems="center">
			<DrawerButton />

			<Paragraph color="black">Jakarta,Ina</Paragraph>
			<Avatar circular size="$5">
				<Avatar.Image src="http://placekitten.com/200/300" />
				<Avatar.Fallback bc="red" />
			</Avatar>
		</XStack>
	);
};

interface DrawerButtonProps {
	onPress?: () => void;
}
export const DrawerButton: React.FC<DrawerButtonProps> = ({ onPress }) => {
	const [active, setActive] = useState(false);
	return (
		<Button
			onPressIn={() => setActive(true)}
			onPressOut={() => setActive(false)}
			onPress={onPress}
			size={40}
			bg="$colorTransparent"
			color="black"
			pressStyle={{ backgroundColor: "$red10Light" }}
			borderColor="$colorTransparent"
			borderRadius={60}
		>
			<AlignLeft size={20} color={active ? "white" : "black"} />
		</Button>
	);
};

export default Header;
