import { Upload } from "@tamagui/lucide-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, XStack, YStack } from "tamagui";

import { Button } from "tamagui";

export default function ImageUploadButton() {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			selectionLimit: 1,

			allowsEditing: true,
			aspect: [4, 3],
			quality: 1
		});

		console.log(result);

		if (!(result as any).canceled) {
			setImage(result!.assets[0].uri);
			console.log(result.assets);
		}
	};

	return (
		<YStack space={10} alignItems="center">
			<XStack space={10} alignItems="center" width={"100%"}>
				{image && (
					<Image
						onPress={pickImage}
						borderRadius={40}
						source={{ uri: image }}
						style={{ width: "100%", minHeight: 300 }}
					/>
				)}
			</XStack>
			{!image && (
				<Button color="black" onPress={pickImage}>
					<Upload /> Pick an image for your event
				</Button>
			)}
		</YStack>
	);
}
