import ActionsButtons from "@components/molecules/EventInfo/ActionButtons";
import CheckmarkInfo from "@components/molecules/EventInfo/CheckMarkInfo";
import Header from "@components/molecules/EventInfo/Header";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	Button,
	Heading,
	Image,
	Paragraph,
	ScrollView,
	Spacer,
	Text,
	Theme,
	XStack,
	YStack,
	useWindowDimensions
} from "tamagui";

interface EventInfoProps {}

export const EventInfo: React.FC<EventInfoProps> = ({}) => {
	const { height, width } = useWindowDimensions();
	const imgHeight = (2.5 * height) / 5;
	const imgWidth = width;
	return (
		<>
			<StatusBar hidden />
			<YStack paddingHorizontal={"$0"} flex={1} minHeight={height}>
				<Header />
				<Image
					source={{
						width: imgWidth,
						height: imgHeight,
						uri: "https://picsum.photos/600/500"
					}}
					width={imgWidth}
					zIndex={20}
					marginTop={-40}
					height={imgHeight}
				/>
				<Theme name="dark">
					<YStack height={height - imgHeight} backgroundColor="black">
						<ScrollView
							flex={1}
							paddingHorizontal="$5"
							backgroundColor="$red1Dark"
							scrollEnabled
							onScrollBeginDrag={(s) => console.log(s)}
							paddingVertical={30}
							paddingBottom={100}
							scrollToOverflowEnabled
							showsHorizontalScrollIndicator
						>
							<YStack>
								<XStack justifyContent="space-between" paddingVertical="$3">
									<YStack>
										<Heading fontWeight="bold">Olivier Tree</Heading>
										<Paragraph fontSize={12} color="$gray10">
											Concert: Jakarta,Indonenisia
										</Paragraph>
									</YStack>
									<Button disabled backgroundColor="$red5Light" color="black">
										$45.90
									</Button>
								</XStack>
								<XStack space={30}>
									<YStack>
										<Paragraph fontWeight="bold" fontSize={17}>
											29
										</Paragraph>
										<Paragraph color="$gray10" fontSize={16}>
											December
										</Paragraph>
									</YStack>
									<YStack>
										<Paragraph fontWeight="bold" fontSize={17}>
											Tuesday
										</Paragraph>
										<Paragraph color="$gray10" fontSize={16}>
											10:00PM - End
										</Paragraph>
									</YStack>
								</XStack>

								<Spacer size={30} />
								<Paragraph>
									<Text fontWeight="bold" fontSize={16}>
										About this event{"   "}
									</Text>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Aperiam possimus nobis unde odit ipsa itaque quod quasi minus
									quidem. Repellendus aperiam commodi autem magnam suscipit
									voluptate consequatur fugit voluptatem repudiandae? Vero et
									assumenda dicta molestias aliquid placeat. Dolore dolor fugiat
									ipsa natus, autem quo ullam officiis dolores. Itaque dolor
									esse ipsum, at atque id quisquam doloribus, nobis laudantium
									voluptatibus facilis. Dolore debitis perspiciatis vel, tempora
									suscipit facere esse aut quaerat itaque harum corporis numquam
									quo, commodi fuga ab quam laudantium sapiente rerum? Tempora
									et excepturi odio assumenda? rerum? Tempora et excepturi odio
									assumenda? rerum? Tempora et excepturi odio assumenda?
								</Paragraph>

								<Spacer size={30} />
								<Heading>Description</Heading>
								<Spacer size={20} />
								<YStack space={10} paddingHorizontal={14}>
									<CheckmarkInfo
										info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, illum
        expedita animi provident suscipit alias harum libero hic aliquid
									repellat"
									/>
									<CheckmarkInfo info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, illum expedita animi provident suscipit alias harum libero hic aliquid repellat" />
								</YStack>
							</YStack>
						</ScrollView>
					</YStack>
				</Theme>
				<ActionsButtons />
			</YStack>
		</>
	);
};

export default EventInfo;
