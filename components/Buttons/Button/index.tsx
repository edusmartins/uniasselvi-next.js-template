import React from 'react';
import styles from './Button.module.css';

/**
 * Button
 *
 * @component
 * @example
 * return(
 * 	<Button rounded={true} filled={true} style='prime' size='large'>Primário</Button>
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

/** Array com os tamanhos disponíveis */
const SIZES = ['small', 'large'];

interface ButtonProps {
	/**
	 * Estilo do botão. Se não definido, o default é 'prime'
	 * @type {string}
	 */
	style?: 'prime' | 'second' | 'third' | 'warning' | 'right' | 'wrong';
	/**
	 * Tamanho do botão. Se não definido, o default é null
	 * @type {string}
	 */
	size?: 'small' | 'large';
	/**
	 * Se o botão é preenchido. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	filled?: boolean;
	/**
	 * Se o botão está desabilitado. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	disabled?: boolean;
	/**
	 * Se o botão tem bordas arredondadas. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	rounded?: boolean;
	/**
	 * Função onClick do botão
	 * @type {Function}
	 */
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	/**
	 * Tipo do botão. Valor default é 'button'.
	 * @type {string}
	 */
	type?: 'button' | 'submit' | 'reset';
	/**
	 * className do botão.
	 * @type {string}
	 */
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	style,
	size,
	filled,
	disabled,
	rounded,
	onClick,
	className,
	type,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para o botão. Se não, define o estilo como 'prime' */
	const checkButtonStyle = STYLES.includes(style) ? style : STYLES[0];

	/** Checa se foi passado algum dos tamanhos disponíveis para o botão. Se não, define o tamanho como null */
	const checkButtonSize = SIZES.includes(size) ? size : null;

	return (
		<button
			className={`${styles.button} 
									${styles[`${rounded ? 'rounded' : null}`]}
									${styles[`${filled ? 'filled' : null}`]}
									${styles[`${checkButtonStyle ? checkButtonStyle : null}`]}
									${styles[`${checkButtonSize ? checkButtonSize : null}`]}
									${className}
									`}
			onClick={onClick}
			disabled={disabled}
			type={type ? type : 'button'}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
