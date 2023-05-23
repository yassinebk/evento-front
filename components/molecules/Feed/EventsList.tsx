import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
	YStack,
	Card,
	Heading,
	XStack,
	Paragraph,
	ScrollView,
	Image,
	Button
} from "tamagui";

interface EventListProps {}

const EventsList: React.FC<EventListProps> = () => {
	const { navigate } = useNavigation();
	return (
		<ScrollView>
			<YStack>
				<Card
					height={300}
					paddingHorizontal={10}
					paddingVertical={32}
					theme="light"
					onPress={() => navigate("EventInfo" as never, { id: 1 } as never)}
				>
					<Card.Header>
						<Heading>Event A</Heading>
					</Card.Header>
					<Card.Background>
						<Image
							source={{
								width: 300,
								height: 300,
								uri: "https://picsum.photos/300"
							}}
							width="100%"
							height="100%"
						/>
					</Card.Background>
					<Card.Footer>
						<XStack justifyContent="space-between" w="100%">
							<YStack>
								<Paragraph>Oliver Tree Concert</Paragraph>
								<Paragraph>Jakarta Indonesia - 10:00PM</Paragraph>
							</YStack>
							<Button>$45.90</Button>
						</XStack>
					</Card.Footer>
				</Card>
			</YStack>
		</ScrollView>
	);
};

export default EventsList;
