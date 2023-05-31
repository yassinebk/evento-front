import RegisterForm from "@components/RegisterForm";
import MainLayout from "@components/layouts/MainLayout";
import React from "react";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
	return <MainLayout>
		<RegisterForm/>
	</MainLayout>;
};

export default Register;
