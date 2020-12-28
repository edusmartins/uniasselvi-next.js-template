import React from 'react';
import styles from './Checkbox.module.css';

/**
 * @name Checkbox
 *
 * @param {string} props.id - ID do input
 * @param {string} props.value - Value do input
 * @param {string} props.defaultValue - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @param {boolean} props.disabled - Se o input está desabilitado. Valor default é {false}
 * @param {boolean} props.checked - Se o input está marcado. Valor default é {false}
 * @param {boolean} props.defaultChecked - Se o input está inicialmente marcado. Valor default é {false}
 * @param {boolean} props.required - Se o input é obrigatório. Valor default é {false}
 * @param {number} props.tabIndex - tabindex do input
 * @param {string} props.name - name do input
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Função onChange do input
 * @param {(event: React.MouseEvent<HTMLInputElement>) => void} props.onClick - Função onClick do input
 *
 * @component
 * @example
 * return(
 * 	<Checkbox id={1} name='rg-1' checked={true}>Input type checkbox</Checkbox>
 * )
 */

interface CheckboxProps {
	id?: string;
	value?: string;
	defaultValue?: string;
	disabled?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	required?: boolean;
	tabIndex?: number;
	name?: string;
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
	children,
	id,
	value,
	defaultValue,
	disabled,
	checked,
	defaultChecked,
	tabIndex,
	required,
	name,
	className,
	onChange,
	onClick,
	...rest
}) => {
	return (
		<div className={`${styles.checkbox} ${className}`}>
			<input
				type='checkbox'
				id={id}
				name={name}
				value={value}
				defaultValue={defaultValue}
				tabIndex={tabIndex}
				disabled={disabled}
				required={required}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={onChange}
				onClick={onClick}
				{...rest}
			/>
			<label htmlFor={id}>{children}</label>
			<div className={styles.checkbox_check}></div>
		</div>
	);
};

export default Checkbox;
