import React from "react";
import { Paragraph, XStack } from "tamagui";

interface TagProps {
	children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ children }) => {
	return (
		<XStack>
			<Paragraph> {children}</Paragraph>
		</XStack>
	);
};

export default Tag;
