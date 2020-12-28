import React from 'react';
import styles from './IconButton.module.css';

/**
 * @name IconButton
 *
 * @param {string} props.style - Estilo do botão. Se não definido, o default é 'prime'
 * @param {string} props.size - Tamanho do botão. Se não definido, o default é null
 * @param {boolean} props.disabled - Se o botão está desabilitado. Se não definido, o default é {false}
 * @param {boolean} props.filled - Se o botão tem preenchimento. Se não definido, o default é {true}
 * @param {boolean} props.rounded - Se o botão tem bordas arredondadas. Se não definido, o default é {false}
 * @param {boolean} props.wide - Se o botão tem a classe .wide ou não. Se não definido, o default é {false}
 * @param {string} props.src - Caminho do ícone que o botão mostrará
 * @param {string} props.textBefore - Texto que será mostrado antes do ícone
 * @param {string} props.textAfter - Texto que será mostrado depois do ícone
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onClick - Função onClick do botão
 * @param {string} props.type - Tipo do botão. Valor default é 'button'
 *
 * @component
 * @example
 * return(
 * 	<IconButton src='/img/ico/add.svg' rounded={true} style='prime' size='large' textAfter='Upload'></IconButton>
 * )
 */

// Array com os estilos disponíveis
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

// Array com os tamanhos disponíveis
const SIZES = ['small', 'large'];

interface IconButtonProps {
	style?: 'prime' | 'second' | 'third' | 'warning' | 'right' | 'wrong';
	size?: 'small' | 'large';
	disabled?: boolean;
	filled?: boolean;
	rounded?: boolean;
	wide?: boolean;
	src: string;
	textBefore?: string;
	textAfter?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
	children,
	style,
	size,
	disabled,
	filled,
	rounded,
	wide,
	src,
	onClick,
	textBefore,
	textAfter,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para o botão. Se não, define o estilo como 'prime' */
	const checkButtonStyle = STYLES.includes(style) ? style : STYLES[0];

	/** Checa se foi passado algum dos tamanhos disponíveis para o botão. Se não, define o tamanho como null */
	const checkButtonSize = SIZES.includes(size) ? size : null;

	/** Checa se há texto antes do ícone. Se houver, uma tag span é gerada com o conteúdo da prop*/
	const spanTextBefore = textBefore ? (
		<span className='span'>{textBefore}</span>
	) : null;

	/** Checa se há texto depois do ícone. Se houver, uma tag span é gerada com o conteúdo da prop*/
	const spanTextAfter = textAfter ? (
		<span className='span'>{textAfter}</span>
	) : null;

	return (
		<button
			className={`${styles.button} 
									${styles.icon}
									${styles[`${spanTextAfter == null && spanTextBefore == null ? 'only' : null}`]}
									${styles[`${wide ? 'wide' : null}`]} 
									${styles[`${rounded ? 'rounded' : null}`]}
									${styles[`${filled == false ? null : 'filled'}`]}
									${styles[`${checkButtonStyle ? checkButtonStyle : null}`]}
									${styles[`${checkButtonSize ? checkButtonSize : null}`]}
									${className}
									`}
			onClick={onClick}
			disabled={disabled}
			{...rest}
		>
			{spanTextBefore}
			<img className='img' src={src} alt='icone' />
			{spanTextAfter}
		</button>
	);
};

export default IconButton;
