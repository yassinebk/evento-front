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
    YStack
} from "tamagui";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
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
						<Label>Email</Label>
						<Input />
					</YStack>
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
							Login
						</Button>
					</FormTrigger>
				</Form>
			</YStack>
		</ScrollView>
	);
};

export default LoginForm;
