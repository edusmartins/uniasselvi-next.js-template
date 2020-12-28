import React from 'react';
import styles from './Select.module.css';

/**
 * @name Select
 *
 * @param {string} props.id - id do select
 * @param {string} props.name - name do select
 * @param {string} props.placeHolder - placeholder do select
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
	placeHolder?: string;
	className?: string;
}

//TODO: Fazer um novo select usando input

const Select: React.FC<SelectProps> = ({
	children,
	id,
	name,
	placeHolder,
	className,
	...rest
}) => {
	return (
		<select
			className={`${styles.select} ${className}`}
			placeholder={placeHolder}
			name={name}
			id={id}
			{...rest}
		>
			{children}
		</select>
	);
};

export default Select;
