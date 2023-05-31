import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
	Button,
	Form,
	FormTrigger,
	Input,
	Label,
	Spacer,
	Spinner,
	XStack,
	YStack
} from "tamagui";

interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
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
					<XStack space={10}>
						<YStack flex={1}>
							<Label>First name</Label>
							<Input />
						</YStack>
						<YStack flex={1}>
							<Label>Last name</Label>
							<Input />
						</YStack>
					</XStack>
					<YStack>
						<Label>Email</Label>
						<Input />
					</YStack>
					<YStack>
						<Label>Phone number</Label>
						<Input />
					</YStack>
					<XStack space={10}>
						<YStack flex={1}>
							<Label>Town</Label>
							<Input />
						</YStack>
						<YStack flex={1}>
							<Label>State</Label>
							<Input />
						</YStack>
					</XStack>

					<YStack>
						<Label>Password</Label>
						<Input />
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

export default RegisterForm;
