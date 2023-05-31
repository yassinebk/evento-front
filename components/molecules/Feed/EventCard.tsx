import DarkenedImage from "@components/atoms/DarkenedImage";
import { EventX } from "@fixtures/events";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";

import {
	Card,
	Paragraph,
	YStack,
	Heading,
	Button,
	Theme,
	XStack
} from "tamagui";

interface EventCardProps {
	event: EventX;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	const { navigate } = useNavigation();
	return (
		<Card
			height={300}
			paddingHorizontal={10}
			paddingVertical={32}
			theme="light"
			onPress={() => navigate("EventInfo" as never, { id: 1 } as never)}
		>
			<Card.Header>
				<Heading color="white">{event.name}</Heading>
			</Card.Header>
			<Card.Background>
				<DarkenedImage
					uri="https://picsum.photos/300"
					width={300}
					height={300}
				/>
			</Card.Background>
			<Card.Footer>
				<XStack
					justifyContent="space-between"
					w="100%"
					alignItems="center"
					space={10}
					paddingHorizontal={5}
				>
					<Theme name="dark">
						<YStack maxWidth={"70%"} space={10}>
							<Paragraph fontWeight="600" fontSize="$5">
								{event.organizer}
							</Paragraph>
							<Paragraph fontSize="$2">
								{event.location} - {moment(event.date).format("h:mm a")}
							</Paragraph>
						</YStack>
					</Theme>
					<Button>{event.price} $</Button>
				</XStack>
			</Card.Footer>
		</Card>
	);
};

export default EventCard;
