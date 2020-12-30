import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Header
 * @description Título das páginas. Podem ter tamanhos variados dependento da seção que o título se encontra.
 * @component
 * @example
 * <Header size='h1'>Meu Título</Header>
 *
 * @typedef {Object} Props
 *
 * @property {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [size] - Tamanho do header. Se não definido, o default é 'h1'
 *
 */

interface HeaderProps {
	size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
	ref?: any;
}

const StyledHeaderOne = styled.h1`
	font-family: var(--ff-neo);
	font-weight: bold;
	font-size: var(--fs-60);
	letter-spacing: var(--letter-spacing-light);
`;
const StyledHeaderTwo = styled.h2`
	font-family: var(--ff-neo);
	font-weight: medium;
	font-size: var(--fs-48);
	letter-spacing: var(--letter-spacing-light);
`;
const StyledHeaderThree = styled.h3`
	font-family: var(--ff-neo);
	font-weight: normal;
	font-size: var(--fs-40);
	letter-spacing: var(--letter-spacing-light);
`;
const StyledHeaderFour = styled.h4`
	font-family: var(--ff-rubik);
	font-weight: bold;
	font-size: var(--fs-30);
	letter-spacing: var(--letter-spacing-light);
`;
const StyledHeaderFive = styled.h5`
	font-family: var(--ff-rubik);
	font-weight: medium;
	font-size: var(--fs-24);
	letter-spacing: var(--letter-spacing-light);
`;
const StyledHeaderSix = styled.h6`
	font-family: var(--ff-rubik);
	font-weight: normal;
	font-size: var(--fs-18);
	letter-spacing: var(--letter-spacing-light);
`;

/**
 * @param {Props} props
 */
const Header: React.FC<HeaderProps> = ({
	children,
	size,
	className,
	ref,
	...rest
}) => {
	switch (size) {
		case 'h6':
			return (
				<StyledHeaderSix className={className} {...rest} ref={ref}>
					{children}
				</StyledHeaderSix>
			);
		case 'h5':
			return (
				<StyledHeaderFive className={className} {...rest} ref={ref}>
					{children}
				</StyledHeaderFive>
			);
		case 'h4':
			return (
				<StyledHeaderFour className={className} {...rest} ref={ref}>
					{children}
				</StyledHeaderFour>
			);
		case 'h3':
			return (
				<StyledHeaderThree className={className} {...rest} ref={ref}>
					{children}
				</StyledHeaderThree>
			);
		case 'h2':
			return (
				<StyledHeaderTwo className={className} {...rest} ref={ref}>
					{children}
				</StyledHeaderTwo>
			);
		case 'h1':
		default:
			return (
				<StyledHeaderOne className={className} {...rest} ref={ref}>
					{children}
				</StyledHeaderOne>
			);
	}
};

export default Header;
