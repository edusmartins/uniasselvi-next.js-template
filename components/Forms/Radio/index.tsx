import React from 'react';
import styles from './Radio.module.css';

/**
 * @render react
 * @name Radio
 * @description Input tipo radio, usado para questões de multipla escolha onde só há uma única resposta correta, sem possibilidade de marcar mais de uma opção ao mesmo tempo.
 * @component
 * @example
 * <Radio id={1} name='rg-1' checked={true}>Input type radio</Radio>
 *
 * @typedef {Object} Props
 *
 * @property {string} [id] - ID do input
 * @property {string} [name] - Name do input
 * @property {boolean} [disabled] - Se o input está desabilitado. Valor default é `{false}`
 * @property {boolean} [checked] - Se o input está marcado. Valor default é `{false}`
 * @property {boolean} [defaultChecked] - Se o input está inicialmente marcado. Valor default é `{false}`
 * @property {boolean} [required] - Se o input é obrigatório
 * @property {string} [value] - Value do input
 * @property {string} [defaultValue] - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {function} [onChange] - Função `onChange` do input
 * @property {function} [onClick] - Função `onClick` do input
 *
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

/**
 * @param {Props} props
 */
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
