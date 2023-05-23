import React from "react";
import { styled, Card as TamCard } from "tamagui";

interface CardProps {
	children: React.ReactNode;
}

const BaseCard = styled(TamCard, {
	borderRadius: "$12"
});

export const Card: React.FC<CardProps> = ({ children }) => {
	return <BaseCard>{children}</BaseCard>;
};

export default Card;
