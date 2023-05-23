import MainLayout from "@components/layouts/MainLayout";
import EventsList from "@components/molecules/Feed/EventsList";
import Header from "@components/molecules/Feed/Header";
import { Search, Settings2 } from "@tamagui/lucide-icons";
import React from "react";
import { Button, Input, Paragraph, Spacer, XStack, YStack } from "tamagui";

interface FeedProps {}

export const Feed: React.FC<FeedProps> = ({}) => {
	return (
		<MainLayout>
			<Header />
			<Spacer height={40} />
			<SearchBar />
			<Spacer />
			<YStack>
				<XStack alignItems="center" justifyContent="space-between">
					<Paragraph>Upcoming events</Paragraph>
					<Button>
						<Paragraph>See all</Paragraph>
					</Button>
				</XStack>
				<Spacer />
				<EventsList />
			</YStack>
		</MainLayout>
	);
};

export default Feed;

const SearchBar = () => {
	return (
		<XStack
			maxWidth="90%"
			alignItems="center"
			alignSelf="center"
			minWidth={"92%"}
			// backgroundColor="rgba(131, 125, 124, 0.8)"
			backgroundColor="$background"
			paddingVertical={5}
			maxHeight={80}
			borderRadius={30}
			paddingHorizontal={24}
		>
			<XStack
				marginRight={-30}
				zIndex={2}
				height="100%"
				alignItems="center"
				justifyContent="center"
			>
				<Search size={20} color="black" />
			</XStack>
			<Input
				focusStyle={{
					borderColor: "$colorTransparent"
				}}
				// backgroundColor={"$colorTransparent"}
				borderColor={"$colorTransparent"}
				flex={3}
				borderRadius={20}
				paddingLeft={40}
				color={"black"}
				height="100%"
			/>
			<Button
				unstyled
				zIndex={2}
				height="100%"
				alignItems="center"
				justifyContent="center"
			>
				<Settings2 size={20} color="black" />
			</Button>
		</XStack>
	);
};
