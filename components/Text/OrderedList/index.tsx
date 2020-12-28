import React from 'react';
import styles from './OrderedList.module.css';

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

const OrderedList: React.FC<OrderedListProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<ol className={`${styles.ordered_list} ${className}`} {...rest}>
			{children}
		</ol>
	);
};

export default OrderedList;
