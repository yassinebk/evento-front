import { AlignLeft } from "@tamagui/lucide-icons";
import { useState } from "react";
import { Button } from "tamagui";
import React from "react";

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
			bg="$backgroundTransparent"
			color="black"
			pressStyle={{ backgroundColor: "$red10" }}
			borderColor="$colorTransparent"
			borderWidth={0}
			borderRadius={60}
		>
			<AlignLeft size={20} color={active ? "white" : "black"} />
		</Button>
	);
};

export default DrawerButton;
