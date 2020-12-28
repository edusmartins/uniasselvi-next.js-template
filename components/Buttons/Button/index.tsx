import React from 'react';
import styles from './Button.module.css';

/**
 * @name Button
 *
 * @param {string} props.size - Tamanho do botão. Se não definido, o default é null
 * @param {boolean} props.filled - Se o botão é preenchido. Se não definido, o default é {false}
 * @param {boolean} props.disabled - Se o botão está desabilitado. Se não definido, o default é {false}
 * @param {boolean} props.rounded - Se o botão tem bordas arredondadas. Se não definido, o default é {false}
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onClick - Função onClick do botão
 * @param {string} props.type - Tipo do botão. Valor default é 'button'
 *
 * @component
 * @example
 * return(
 * 	<Button rounded={true} filled={true} style='prime' size='large'>Primário</Button>
 * )
 */

// Array com os estilos disponíveis
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

// Array com os tamanhos disponíveis
const SIZES = ['small', 'large'];

interface ButtonProps {
	style?: 'prime' | 'second' | 'third' | 'warning' | 'right' | 'wrong';
	size?: 'small' | 'large';
	filled?: boolean;
	disabled?: boolean;
	rounded?: boolean;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	type?: 'button' | 'submit' | 'reset';
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
