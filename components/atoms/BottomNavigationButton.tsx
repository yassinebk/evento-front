import { Button, styled } from "tamagui";

const BaseButton = styled(Button, {
	bordered: false,
	width: 60,
	height: 60,
	borderRadius: 30,
	pressStyle: {
		backgroundColor: "white"
	},
	bg: "$colorTransparent",
	borderColor: "$colorTransparent"
});

interface BottomNavigationButtonProps extends React.ComponentProps<any> {
	isActive?: boolean;
	children: React.ReactNode;
}

export const BottomNavigationButton: React.FC<BottomNavigationButtonProps> = ({
	isActive = false,
    children,
    ...props
}) => {
	if (isActive) {
		return (
            <BaseButton {...props}  bg="white" color="white">
				{children}
			</BaseButton>
		);
	}

	return <BaseButton {...props}>{children}</BaseButton>;
};

export default BottomNavigationButton;
