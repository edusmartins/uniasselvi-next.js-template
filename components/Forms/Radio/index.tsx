import React from 'react';
import styles from './Radio.module.css';

/**
 * @name Radio
 *
 * @param {string} props.id - ID do input
 * @param {string} props.name - Name do input
 * @param {boolean} props.disabled - Se o input está desabilitado. Valor default é {false}
 * @param {boolean} props.checked - Se o input está marcado. Valor default é {false}
 * @param {boolean} props.defaultChecked - Se o input está inicialmente marcado. Valor default é {false}
 * @param {boolean} props.required - Se o input é obrigatório
 * @param {string} props.value - Value do input
 * @param {string} props.defaultValue - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Função onChange do input
 * @param {(event: React.MouseEvent<HTMLInputElement>) => void} props.onClick - Função onClick do input
 *
 * @component
 * @example
 * return(
 * 	<Radio id={1} name='rg-1' checked={true}>Input type radio</Radio>
 * )
 */

interface RadioProps {
	id: string;
	name?: string;
	disabled?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	required?: boolean;
	value?: string;
	defaultValue?: string;
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
	children,
	id,
	name,
	disabled,
	checked,
	defaultChecked,
	required,
	value,
	defaultValue,
	onChange,
	onClick,
	className,
	...rest
}) => {
	return (
		<div className={`${styles.radio} ${className}`} {...rest}>
			<input
				type='radio'
				name={name}
				id={`${id}`}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				required={required}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onClick={onClick}
			/>
			<label htmlFor={`${id}`}>{children}</label>
			<div className={styles.radio_check}></div>
		</div>
	);
};

export default Radio;
