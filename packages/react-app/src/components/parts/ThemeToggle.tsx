import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();

	const actions = (
		<>
			{/* Default to dark mode*/}
			<Button
				onClick={toggleColorMode}
			>
				{colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
			</Button>
		</>
	);

	return <ButtonGroup>{actions}</ButtonGroup>;
};

export default ThemeToggle;
