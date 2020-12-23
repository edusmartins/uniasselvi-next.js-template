import React from 'react';

import styles from './Range.module.css';

/**
 * Range
 *
 * @component
 * @example
 * return(
 * <Range filled={true} style='prime' />
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['prime', 'second', 'third', 'right', 'wrong'];

interface RangeProps {
	/**
	 * Estilo do input. Se não definido, o default é ''.
	 * @type {string}
	 */
	style?: string;
	/**
	 * Se o botão é preenchido. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	filled?: boolean;
	className?: string;
}

const Range: React.FC<RangeProps> = ({
	children,
	style,
	filled,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a Range. Se não, define o estilo como '' */
	const checkRangeStyle = STYLES.includes(style) ? style : '';

	return (
		<input
			type='range'
			className={`
        ${styles.input}
        ${styles[`${checkRangeStyle}`]}
				${styles[`${filled ? 'filled' : ''}`]}
				${className}
      `}
			{...rest}
		>
			{children}
		</input>
	);
};

export default Range;
