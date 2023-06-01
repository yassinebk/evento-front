import { ArrowRight, PersonStanding } from "@tamagui/lucide-icons";
import React, { useState } from "react";
import { Image, StyleSheet, useWindowDimensions } from "react-native";
import {
	Button,
	Card,
	CardBackground,
	Heading,
	Overlay,
	Paragraph,
	Spacer,
	XStack,
	YStack
} from "tamagui";
import FirstOnboarding from "../../assets/onboarding1.png";
import SecondOnboarding from "../../assets/onboarding2.png";
import ThirdOnboarding from "../../assets/onboarding3.png";

interface LandingProps {
	navigation: any;
}

export const Landing: React.FC<LandingProps> = ({ navigation }) => {
	return <OnboardingScreen navigation={navigation} />;
};

export default Landing;

const OnboardingScreen = ({ navigation }: any) => {
	const [currentPage, setCurrentPage] = useState(0);

	const handleNext = () => {
		setCurrentPage(currentPage + 1);
	};

	const handleRegister = () => {
		navigation.navigate("Register");
	};

	const RenderPage = (
		image: any,
		title: string,
		description: string,
		currentPage: number,
		handleNext: any,
		handleRegister: any
	) => {
		const { height, width } = useWindowDimensions();
		return (
			<Card height={height} width={width}>
				<CardBackground>
					<Overlay />
					<Image
						source={image}
						style={{ height, width, overlayColor: "black" }}
						blurRadius={4}
					/>
				</CardBackground>
				<YStack marginTop={height / 3} space={20} paddingHorizontal="$4">
					<Heading color="$red10Dark" fontSize="$9" fontWeight="bold">
						{title}
					</Heading>
					<Paragraph color="white" fontSize="$7" fontWeight="bold">
						{description}
					</Paragraph>
					<Spacer size={40} />
					{currentPage < 2 ? (
						<>
							<Button onPress={handleNext} iconAfter={ArrowRight}>
								Next
							</Button>
						</>
					) : (
						<Button onPress={handleRegister} iconAfter={PersonStanding}>
							Register Now
						</Button>
					)}
				</YStack>
			</Card>
		);
	};

	return (
		<>
			{currentPage === 0 &&
				RenderPage(
					FirstOnboarding,
					"Welcome to Evento",
					"Discover and buy tickets for your favorite events, concerts, and shows with ease.",
					currentPage,
					handleNext,
					handleRegister
				)}
			{currentPage === 1 &&
				RenderPage(
					SecondOnboarding,
					"Find Your Events",
					"Search for events by location, date, or category. Never miss out on the best experiences in your city.",
					currentPage,
					handleNext,
					handleRegister
				)}
			{currentPage === 2 &&
				RenderPage(
					ThirdOnboarding,
					"Easy Ticket Management",
					"Keep track of your tickets and event details in one place. Access your tickets anytime, anywhere.",
					currentPage,
					handleNext,
					handleRegister
				)}
			<XStack></XStack>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	pageContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
		paddingVertical: 40
	},
	image: {
		height: 500,
		width: 500,
		resizeMode: "contain"
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 30,
		marginBottom: 10,
		textAlign: "center"
	},
	description: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 30
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		width: "100%",
		position: "absolute",
		bottom: 50
	},
	next: {
		fontSize: 16,
		color: "#007AFF"
	},
	registerButton: {
		backgroundColor: "#007AFF",
		borderRadius: 10,
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	registerText: {
		fontSize: 16,
		color: "#fff"
	}
});
