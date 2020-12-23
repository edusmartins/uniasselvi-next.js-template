import React from 'react';

import styles from './IconButton.module.css';

/**
 * IconButton
 *
 * @component
 * @example
 * return(
 * 	<IconButton src='/img/ico/add.svg' rounded={true} style='prime' size='large' textAfter='Upload'></IconButton>
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

/** Array com os tamanhos disponíveis */
const SIZES = ['small', 'large'];

interface IconButtonProps {
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
	 * Se o botão está desabilitado. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	disabled?: boolean;
	/**
	 * Se o botão tem preenchimento. Se não definido, o default é {true}
	 * @type {boolean}
	 */
	filled?: boolean;
	/**
	 * Se o botão tem bordas arredondadas. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	rounded?: boolean;
	/**
	 * Se o botão tem a classe .wide ou não. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	wide?: boolean;
	/**
	 * Caminho do ícone que o botão mostrará
	 * @type {string}
	 */
	src: string;
	/**
	 * Texto que será mostrado antes do ícone
	 * @type {string}
	 */
	textBefore?: string;
	/**
	 * Texto que será mostrado depois do ícone
	 * @type {string}
	 */
	textAfter?: string;
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
