import { CheckCircle } from "@tamagui/lucide-icons";
import { Paragraph, XStack } from "tamagui";

interface CheckMarkInfoProps {
	info: string;
}

const CheckmarkInfo: React.FC<CheckMarkInfoProps> = ({ info }) => {
	return (
		<XStack space={6} alignItems="flex-start">
			<CheckCircle color="#BAF2BB" size={20} />
			<Paragraph>{info}</Paragraph>
		</XStack>
	);
};

export default CheckmarkInfo;
