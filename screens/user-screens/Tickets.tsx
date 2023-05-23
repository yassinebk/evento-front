import React from "react";
import { Paragraph } from "tamagui";
import MainLayout from "../../components/layouts/MainLayout";

interface TicketsProps {}

export const Tickets: React.FC<TicketsProps> = ({}) => {
	return (
		<MainLayout>
			<Paragraph>Tickets View</Paragraph>
		</MainLayout>
	);
};

export default Tickets;
