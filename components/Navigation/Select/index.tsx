import React from 'react';

import styles from './Select.module.css';

/**
 * Select
 *
 * @component
 * @example
 * return(
 * 	<Select></Select>
 * )
 */

interface SelectProps {
	id?: string;
	name?: string;
	placeholder?: string;
	className?: string;
}

//TODO: Fazer um novo select usando input

const Select: React.FC<SelectProps> = ({
	children,
	id,
	name,
	placeholder,
	className,
	...rest
}) => {
	return (
		<select
			className={`${styles.select} ${className}`}
			placeholder={placeholder}
			name={name}
			id={id}
			{...rest}
		>
			{children}
		</select>
	);
};

export default Select;
