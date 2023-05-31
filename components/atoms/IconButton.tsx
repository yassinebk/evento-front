import React, { useState } from "react";
import { XStack, Button } from "tamagui";

interface IconButtonProps {
	Icon: React.FC<any>;
	onPress: () => void;
	pressedColor?: string;
	defaultColor?: string;
	size: number;
	factor: number;
	bordered?: boolean;
	isActive?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
	Icon,
	onPress,
	defaultColor,
	pressedColor,
	size,
	factor,
	bordered,
	isActive = false
}) => {
	const [isPressed, setPressed] = useState(false);
	return (
		<Button
			unstyled
			borderColor={bordered ? defaultColor : "$colorTransparent"}
			onPress={onPress}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			backgroundColor={isPressed || isActive ? defaultColor : pressedColor}
			pressStyle={{
				backgroundColor: defaultColor
			}}
			height={size}
			width={size}
			justifyContent="center"
			alignItems="center"
			borderRadius={Math.floor(size) + 1}
		>
			<XStack justifyContent="center" alignItems="center">
				<Icon
					color={isPressed || isActive ? pressedColor : defaultColor}
					size={size / factor}
				/>
			</XStack>
		</Button>
	);
};

export default IconButton;
