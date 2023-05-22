import React from "react";
import { Paragraph } from "tamagui";
import MainLayout from "../../components/layouts/MainLayout";
import Header from "../../components/molecules/Authenticated/Header";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
	return (
		<MainLayout>
			<Header />
			<Paragraph>Feed</Paragraph>
		</MainLayout>
	);
};

export default Feed;
