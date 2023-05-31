import React from "react";
import { EventXs } from "@fixtures/events";
import { ScrollView } from "tamagui";
import EventCard from "./EventCard";

interface EventListProps {}

const EventsList: React.FC<EventListProps> = () => {
	return (
		<ScrollView space={50}>
			{EventXs.map((e) => (
				<EventCard key={e.id} event={e} />
			))}
		</ScrollView>
	);
};

export default EventsList;
