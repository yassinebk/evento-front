import MainLayout from "@components/layouts/MainLayout";
import CreateEventForm from "@components/molecules/CreateEventForm";
import React from "react";
import { Paragraph } from "tamagui";

interface MyEventsProps {}

export const MyEvents: React.FC<MyEventsProps> = ({}) => {
	return (
		<MainLayout>
			<CreateEventForm />
		</MainLayout>
	);
};

export default MyEvents;
