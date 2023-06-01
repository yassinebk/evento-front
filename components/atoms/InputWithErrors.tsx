import React from "react";
import { YStack, Label, Input } from "tamagui";
import { AlertCircle } from "@tamagui/lucide-icons";
import { FieldErrors } from "react-hook-form";

interface InputWithErrorsProps {
	label: string;
	onChange: (..._: any) => void;
	errors: FieldErrors;
	name: string;
	onBlur: (...args: any) => void;
	type?: string;

	value: string;
}

const InputWithErrors: React.FC<InputWithErrorsProps> = ({
	value,
	label,
	onChange,
	onBlur,
	errors,
	name,
	type,
	...props
}) => {
	return (
		<YStack flex={1}>
			<Label>{label}</Label>
			<Input
				{...props}
				onChangeText={onChange}
				onBlur={onBlur}
				value={value}
				secureTextEntry={type === "password"}
			/>
			{errors[name] && (
				<YStack mt={-25}>
					<AlertCircle color="$red10Dark" />
					<Label color="$red10Dark">{errors[name]?.message}</Label>
				</YStack>
			)}
		</YStack>
	);
};

export default InputWithErrors;
