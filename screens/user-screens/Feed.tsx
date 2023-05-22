import React from "react";
import { Paragraph } from "tamagui";
import MainLayout from "../../components/layouts/MainLayout";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
	return (
		<MainLayout>
			<Paragraph>Feed</Paragraph>
		</MainLayout>
	);
};

export default Feed;
