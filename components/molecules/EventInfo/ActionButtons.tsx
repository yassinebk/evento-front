import IconButton from "@components/atoms/IconButton";
import { Heart } from "@tamagui/lucide-icons";
import { Button, Circle, XStack } from "tamagui";

const ActionsButtons = () => {
	return (
		<XStack
			width={"100%"}
			position="absolute"
			bottom={0}
			left={0}
			right={0}
			justifyContent="space-around"
			backgroundColor="$red1Dark"
			paddingVertical={10}
			alignItems="center"
			space={20}
			paddingHorizontal={40}
		>
			<Circle backgroundColor="white" padding={4}>
				<IconButton
					Icon={Heart}
					defaultColor={"red"}
					pressedColor="white"
					size={30}
					onPress={function (): void {
						console.log("ejre");
					}}
					factor={1.2}
				/>
			</Circle>
			<Button
				backgroundColor="$red10Dark"
				color="white"
				fontSize={16}
				fontWeight="bold"
				size={60}
				flex={2}
				borderRadius={30}
			>
				Get a ticket
			</Button>
		</XStack>
	);
};

export default ActionsButtons;
