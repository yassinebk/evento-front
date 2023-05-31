import LoginForm from "@components/LoginForm";
import MainLayout from "@components/layouts/MainLayout";
import React from "react";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
	return (
		<MainLayout>
			<LoginForm />
		</MainLayout>
	);
};

export default Login;
