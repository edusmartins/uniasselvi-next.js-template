import React from 'react';
import styles from './Select.module.css';

/**
 * @render react
 * @name Select
 * @description Select simples. Usado para que o usuário possa escolher uma opção dentre diversas.
 * @component
 * @example
 * <Select></Select>
 *
 * @typedef {Object} Props
 *
 * @property {string} [id] - id do select
 * @property {string} [name] - name do select
 * @property {string} [placeHolder] - placeholder do select
 *
 */

interface SelectProps {
	id?: string;
	name?: string;
	placeHolder?: string;
	className?: string;
}

/**
 * @param {Props} props
 */
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
