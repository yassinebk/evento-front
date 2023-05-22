import { Search } from "@tamagui/lucide-icons";
import React from "react";
import { XStack } from "tamagui";
import MainLayout from "../../components/layouts/MainLayout";
import Header from "../../components/molecules/Authenticated/Header";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
	return (
		<MainLayout>
			<XStack>
				<Search/>
			</XStack>
			<Header />
		</MainLayout>
	);
};

export default Feed;
