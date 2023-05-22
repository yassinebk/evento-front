import { Button, styled } from "tamagui";
import React from "react";

const BaseButton = styled(Button, {
	bordered: false,
	width: 60,
	height: 60,
	borderRadius: 30,
	pressStyle: {
		backgroundColor: "white"
	},
	backgroundColor: "$colorTransparent",
	borderColor: "$colorTransparent"
});

interface BottomNavigationButtonProps {
	isActive?: boolean;
	readonly children: React.ReactNode;
	onPress: () => void;
}

export const BottomNavigationButton: React.FC<BottomNavigationButtonProps> = ({
	isActive = false,
	children,
	...props
}) => {
	if (isActive) {
		return (
			<BaseButton {...props} backgroundColor="white" color="white">
				{children}
			</BaseButton>
		);
	}

	return <BaseButton {...props}>{children}</BaseButton>;
};

export default BottomNavigationButton;
