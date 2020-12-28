import React from 'react';
import styles from './UnorderedList.module.css';

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

const UnorderedList: React.FC<UnorderedListProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<ul className={`${styles.unordered_list} ${className}`} {...rest}>
			{children}
		</ul>
	);
};

export default UnorderedList;
