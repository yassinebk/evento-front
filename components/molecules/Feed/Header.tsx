import React from "react";
import { Avatar, Paragraph, XStack } from "tamagui";
import DrawerButton from "./DrawerButton";

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

export default Header;
