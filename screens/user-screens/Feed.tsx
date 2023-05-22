import { Search } from "@tamagui/lucide-icons";
import React from "react";
import { XStack } from "tamagui";
import MainLayout from "../../components/layouts/MainLayout";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
	return (
		<MainLayout>
			<Header></Header>
			<XStack>
				<Search/>
			</XStack>
		</MainLayout>
	);
};

export default Feed;
