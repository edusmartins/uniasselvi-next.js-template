import React from 'react';
import styles from './Switch.module.css';

/**
 * @name Switch
 *
 * @param {string} props.size - Tamanho do switch. Se não definido, o default é ''
 * @param {boolean} props.disabled - Se o switch está desabilitado. Se não definido, o default é {false}
 * @param {boolean} props.checked - Se o botão está marcado. Se não definido, o default é {false}
 * @param {boolean} props.defaultChecked - Se o input está inicialmente marcado. Valor default é {false}
 * @param {boolean} props.rounded - Se o botão tem bordas arredondadas. Se não definido, o default é {false}
 * @param {string} props.value - valor do input
 * @param {string} props.defaultValue - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Função onChange do input checkbox dentro do componente
 * @param {(event: React.MouseEvent<HTMLInputElement>) => void} props.onClick - Função onClick do input
 *
 * @component
 * @example
 *
 * Esse componente retorna um input type=checkbox
 *
 * return(
 * 	<Switch checked={true} rounded={true}></Switch>
 * )
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
