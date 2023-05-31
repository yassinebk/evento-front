import { useEffect, useState } from "react";
import { Button, ListItem, Paragraph, Sheet, YStack } from "tamagui";

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

const ColorPicker = () => {
	const [selected, setSelected] = useState("");
	const [open, setOpen] = useState(false);
	const [position, setPosition] = useState(0);
	const { addListener } = useNavigation();
	useEffect(() => {
		addListener("state", () => setOpen(false));

        return ()=>removeEventListener("state", () => setOpen(false))
	},[]);

	return (
		<YStack space>
			<Button
				backgroundColor={selected}
				borderColor={"black"}
				onPress={() => {
					setOpen(true);
					console.log("pressed", open);
				}}
			>
				{selected === "" ? "Select Color" : selected}
			</Button>
			<Sheet
				forceRemoveScrollEnabled={open}
				modal={true}
				open={open}
				onOpenChange={setOpen}
				snapPoints={[85, 50, 25]}
				dismissOnSnapToBottom
				position={position}
				onPositionChange={setPosition}
				zIndex={100_000}
				animation="bouncy"
			>
				<Sheet.Overlay />
				<Sheet.Handle />
				<Sheet.Frame
					flex={1}
					padding="$4"
					justifyContent="center"
					alignItems="center"
					space="$5"
				>
					<Sheet.ScrollView>
						<Paragraph>Choose a color</Paragraph>
						<YStack space={5}>
							{COLORS.map((color) => (
								<ListItem
									backgroundColor={color}
									width={300}
									key={color}
									onPress={() => {
										setSelected(color);
										setOpen(false);
									}}
								/>
							))}
						</YStack>
					</Sheet.ScrollView>
				</Sheet.Frame>
			</Sheet>
		</YStack>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center"
	},
	main: {
		alignItems: "center"
	}
});

export default ColorPicker;
