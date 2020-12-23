import React from 'react';

import styles from './Label.module.css';

/**
 * Label
 *
 * @component
 * @example
 * return(
 * 	<Label style='prime'>Info</Label>
 * 	<Label style='prime' single={true}>11</Label>
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

interface LabelProps {
	/**
	 * Estilo da label. Se não definido, o default é 'prime'
	 * @type {string}
	 */
	style?: string;
	/**
	 * Se o botão tem conteúdo pequeno, como um número com até 2 algarismos.
	 * @type {boolean}
	 */
	single?: boolean;
	className?: string;
}

const Label: React.FC<LabelProps> = ({
	children,
	style,
	single,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a label. Se não, define o estilo como 'prime' */
	const checkLabelStyle = STYLES.includes(style) ? style : STYLES[0];

	return (
		<span
			className={`${styles.label} 
									${styles[`${single ? 'single' : ''}`]}
									${styles[`${checkLabelStyle}`]}
									${className}
                `}
			{...rest}
		>
			{children}
		</span>
	);
};

export default Label;