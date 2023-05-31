import { Image, styled } from "tamagui";
import { View } from "react-native";
import React from "react";

const ImageMask = styled(View, {
	opacity: 0.4,
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: "black",
	width: "100%",
	height: "100%",
	zIndex: 10
});

interface DarkenedImageProps {
	uri: string;
	width: number;
	height: number;
}

const DarkenedImage: React.FC<DarkenedImageProps> = ({
	uri,
	width,
	height
}) => {
	return (
		<>
			<Image
				source={{
					width: width,
					height: height,
					uri: uri
				}}
				style={{ width: "100%", height: "100%" }}
			/>
			<ImageMask />
		</>
	);
};

export default DarkenedImage;
