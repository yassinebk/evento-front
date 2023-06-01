import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import * as z from "zod";
import { Button, Form, FormTrigger, Spacer, Spinner, YStack } from "tamagui";
import { useNavigation } from "@react-navigation/core";
import { useLoginMutation } from "@graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import InputWithErrors from "./atoms/InputWithErrors";
import { setAuthToken } from "@utils/auth";

interface LoginFormProps { }

const loginSchema = z.object({
	email: z.string(),
	password: z.string()
});

export const LoginForm: React.FC<LoginFormProps> = ({ }) => {
	const { navigate } = useNavigation();
	const [login, { loading }] = useLoginMutation({
		onCompleted: async (data) => {
			console.log(data);
			await setAuthToken(data.login.access_token);
			navigate("Authenticated" as unknown as never);
		}
	});

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		mode: "onBlur"
	});

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		console.log(data);
		await login({ variables: data });
	};

	return (
		<ScrollView>
			<YStack space={20}>
				<Form
					width="100%"
					space
					onSubmit={() => {
						console.log("here");
						handleSubmit(onSubmit)();
					}}
					borderWidth={1}
					borderRadius="$4"
					backgroundColor="$background"
					borderColor="$borderColor"
					padding="$8"
				>
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
						name="password"
						render={({ field: { onChange, onBlur, value } }) => (
							<InputWithErrors
								label="Password"
								type="password"
								name="password"
								errors={errors}
								value={value}
								onChange={onChange}
								onBlur={onBlur}
							/>
						)}
					/>
					<Spacer size={50} />
					<FormTrigger asChild>
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
