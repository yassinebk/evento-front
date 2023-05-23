import React from "react";
import { Image, useWindowDimensions } from "tamagui";
import Header from "@components/molecules/EventInfo/Header";
import MainLayout from "@components/layouts/MainLayout";

interface EventInfoProps {}

export const EventInfo: React.FC<EventInfoProps> = ({}) => {
	const { height, width } = useWindowDimensions();
	const imgHeight = (2.75 * height) / 5;
	const imgWidth = width;
	return (
		<MainLayout paddingHorizontal={"$0"}>
			<Header />
			<Image
				source={{
					width: imgWidth,
					height: imgHeight,
					uri: "https://picsum.photos/600/500"
				}}
				width={imgWidth}
				height={imgHeight}
			/>
		</MainLayout>
	);
};

export default EventInfo;
