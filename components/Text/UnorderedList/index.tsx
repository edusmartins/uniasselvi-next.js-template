import React from 'react';
import styled from 'styled-components';

/**
 *
 * @render react
 * @name UnorderedList
 * @description Componente de lista não ordenada. Recebe `<li>` tags como children.
 * @component
 * @example
 * 	<UnorderedList>
 * 		<li>Item 1</li>
 * 		<li>Item 2</li>
 * 		<li>Item 3</li>
 * 	</UnorderedList>
 *
 */

interface UnorderedListProps {
	className?: string;
}

const StyledUl = styled.ul`
	&.unordered_list {
		margin: 1em 0;
		padding: 0;
		list-style: none;
		display: grid;
		grid-gap: 1em;
	}

	&.unordered_list li {
		display: grid;
		grid-template-columns: 0 1fr;
		grid-gap: 1.75em;
		align-items: start;
	}

	&.unordered_list li::before {
		content: '•';
		font-size: 36px;
		color: var(--cinza-escuro);
		line-height: 1.5rem;
	}
`;

const UnorderedList: React.FC<UnorderedListProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<StyledUl className={`unordered_list ${className}`} {...rest}>
			{children}
		</StyledUl>
	);
};

export default UnorderedList;
