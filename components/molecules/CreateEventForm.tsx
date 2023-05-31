import ImageUploadButton from "@components/ImageUploadButton";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
	Button,
	Form,
	FormTrigger,
	Input,
	Label,
	Spacer,
	Spinner,
	TextArea,
	XStack,
	YStack
} from "tamagui";
import ColorPicker from "./ColorPicker";
import { useNavigation, useNavigationState } from "@react-navigation/native";

interface CreateEventFormProps {}

export const CreateEventForm: React.FC<CreateEventFormProps> = ({}) => {
	const loading = false;

	return (
		<ScrollView>
			<YStack space={20}>
				<Form
					width="100%"
					space
					onSubmit={() => console.log("here")}
					borderWidth={1}
					borderRadius="$4"
					backgroundColor="$background"
					borderColor="$borderColor"
					padding="$8"
				>
					<YStack>
						<Label>Event's code</Label>
						<Input />
					</YStack>

					<YStack>
						<Label>Display name</Label>
						<Input />
					</YStack>
					<YStack>
						<Label>Event's color</Label>
						<ColorPicker />
					</YStack>

					<YStack>
						<XStack>
							<Label>Description</Label>
						</XStack>
						<TextArea
							minHeight={50}
							paddingVertical={20}
							textAlign="left"
							alignItems="flex-start"
						/>
					</YStack>

					<YStack>
						<Label>Banner</Label>
						<ImageUploadButton />
					</YStack>
					<Spacer size={50} />
					<FormTrigger>
						<Button
							size={60}
							backgroundColor="$red11Dark"
							color="white"
							icon={loading ? () => <Spinner /> : undefined}
						>
							Submit
						</Button>
					</FormTrigger>
				</Form>
			</YStack>
		</ScrollView>
	);
};

export default CreateEventForm;
