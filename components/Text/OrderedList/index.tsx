import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name OrderedList
 * @description Componente de lista ordenada. Recebe `<li>` tags como children.
 * @component
 * @example
 * <OrderedList>
 * 		<li>Item 1</li>
 * 		<li>Item 2</li>
 * 		<li>Item 3</li>
 * 	</OrderedList>
 */

interface OrderedListProps {
	className?: string;
}

const StyledOl = styled.ol`
	&.ordered_list {
		margin: 1em 0;
		padding: 0;
		list-style: none;
		display: grid;
		grid-gap: 1em;
		counter-reset: orderedlist;
	}

	&.ordered_list > li {
		display: grid;
		grid-template-columns: 0 1fr;
		grid-gap: 1.75em;
		align-items: start;
	}

	&.ordered_list li::before {
		counter-increment: orderedlist;
		content: counter(orderedlist);
		width: 1rem;
		padding: 0 4px;
		margin-left: -8px;
		text-align: center;
		color: var(--branco);
		background-color: var(--cinza-escuro);
		border-radius: 5px;
	}
`;

const OrderedList: React.FC<OrderedListProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<StyledOl className={`ordered_list ${className}`} {...rest}>
			{children}
		</StyledOl>
	);
};

export default OrderedList;
