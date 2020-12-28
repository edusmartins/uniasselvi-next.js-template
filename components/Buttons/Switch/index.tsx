import React from 'react';
import styles from './Switch.module.css';

/**
 * @render react
 * @name Switch
 * @description Toogle Switch simples, usado para que o usuário possa habilitar ou desabilitar algo dentro da aplicação.
 * @component
 * @example
 * <Switch checked={true} rounded={true}></Switch>
 *
 * @typedef {Object} Props
 *
 * @property {'small' | 'large'} [size] - Tamanho do switch. Se não definido, o default é ''
 * @property {boolean} [disabled] - Se o switch está desabilitado. Se não definido, o default é `{false}`
 * @property {boolean} [checked] - Se o botão está marcado. Se não definido, o default é `{false}`
 * @property {boolean} [defaultChecked] - Se o input está inicialmente marcado. Valor default é `{false}`
 * @property {boolean} [rounded] - Se o botão tem bordas arredondadas. Se não definido, o default é `{false}`
 * @property {string} [value] - valor do input
 * @property {string} [defaultValue] - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {function} [onChange] - Função `onChange` do input checkbox dentro do componente
 * @property {function} [onClick] - Função `onClick` do input
 *
 */

// Array com os tamanhos disponíveis
const SIZES = ['small', 'large'];

interface SwitchProps {
	size?: 'small' | 'large';
	disabled?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	rounded?: boolean;
	value?: string;
	defaultValue?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	className?: string;
}

/**
 * @param {Props} props
 */
const Switch: React.FC<SwitchProps> = ({
	children,
	size,
	disabled,
	checked,
	defaultChecked,
	rounded,
	onChange,
	onClick,
	value,
	defaultValue,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos tamanhos disponíveis para o botão. Se não, define o tamanho como '' */
	const checkButtonSize = SIZES.includes(size) ? size : '';

	return (
		<div
			className={`
      ${styles.switch}
      ${styles[`${checkButtonSize}`]}
			${styles[`${rounded ? 'rounded' : ''}`]}
			${className}
      `}
		>
			<input
				type='checkbox'
				className={`${styles.checkbox}`}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onClick={onClick}
				{...rest}
			></input>
			<div className={`${styles.knobs}`}>
				<span></span>
			</div>
			<div className={`${styles.layer}`}></div>
		</div>
	);
};

export default Switch;
