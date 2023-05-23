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
}

export const IconButton: React.FC<IconButtonProps> = ({
	Icon,
	onPress,
	defaultColor,
	pressedColor,
	size,
	factor,
	bordered
}) => {
	const [active, setActive] = useState(false);
	return (
		<Button
			borderColor={bordered ? defaultColor : "$colorTransparent"}
			onPress={onPress}
			onPressIn={() => setActive(true)}
			onPressOut={() => setActive(false)}
			backgroundColor={pressedColor}
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
					color={active ? pressedColor : defaultColor}
					size={size / factor}
				/>
			</XStack>
		</Button>
	);
};

export default IconButton;
