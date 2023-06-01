import { useSignUpMutation } from "@graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native-gesture-handler";
import {
	Button,
	Form,
	FormTrigger,
	Spacer,
	Spinner,
	XStack,
	YStack
} from "tamagui";
import * as z from "zod";
import { useNavigation } from "@react-navigation/native";
import InputWithErrors from "./atoms/InputWithErrors";

interface RegisterFormProps {}

const registerSchema = z.object({
	firstName: z.string().min(2, { message: "First name is too short" }),
	lastName: z.string().min(2, { message: "Last name is too short" }),
	email: z.string().email({ message: "Invalid email" }),
	phoneNumber: z.string().min(8, { message: "Invalid phone number" }),
	town: z.string().min(2, { message: "Invalid town" }),
	state: z.string().min(2, { message: "Invalid state" }),
	password: z.string().min(8, { message: "Password is too short" })
});

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
	const { navigate } = useNavigation();
	const [signup, { loading }] = useSignUpMutation({
		onCompleted: () => {
			navigate("Login" as unknown as never);
		}
	});
	const {
		handleSubmit,
		getValues,
		control,
		formState: { errors, isValid }
	} = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		mode: "onBlur"
	});

	const onSubmit = async (data: z.infer<typeof registerSchema>) => {
		await signup({ variables: data });
	};

	return (
		<ScrollView>
			<YStack space={20}>
				<Form
					width="100%"
					space
					onSubmit={async () => {
						console.log(getValues());
						console.log("here", errors, isValid);
						await handleSubmit(onSubmit)();
					}}
					borderWidth={1}
					borderRadius="$4"
					backgroundColor="$background"
					borderColor="$borderColor"
					padding="$8"
				>
					<XStack space={4}>
						<Controller
							control={control}
							name="firstName"
							render={({ field: { onChange, onBlur, value } }) => (
								<InputWithErrors
									label="First name"
									name="firstName"
									errors={errors}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
						<Controller
							control={control}
							name="lastName"
							render={({ field: { onChange, onBlur, value } }) => (
								<InputWithErrors
									label="Last name"
									name="lastName"
									errors={errors}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
					</XStack>
					<Controller
						control={control}
						name="email"
						render={({ field: { onChange, onBlur, value } }) => (
							<InputWithErrors
								label="Email"
								name="email"
								errors={errors}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
						)}
					/>
					<Controller
						control={control}
						name="phoneNumber"
						render={({ field: { onChange, onBlur, value } }) => (
							<InputWithErrors
								name="phoneNumber"
								label={"Phone number"}
								errors={errors}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
						)}
					/>
					<XStack space={4}>
						<Controller
							control={control}
							name="town"
							render={({ field: { onChange, onBlur, value } }) => (
								<InputWithErrors
									name="town"
									label={"Town"}
									errors={errors}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
						<Controller
							control={control}
							name="state"
							render={({ field: { onChange, onBlur, value } }) => (
								<InputWithErrors
									label={"State"}
									name="state"
									errors={errors}
									value={value}
									onChange={onChange}
									onBlur={onBlur}
								/>
							)}
						/>
					</XStack>
					<Controller
						control={control}
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<InputWithErrors
								name="password"
								label={"Password"}
								type="password"
								errors={errors}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
						)}
					/>
					<Spacer size={50} />
					<FormTrigger asChild disabled={loading}>
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
