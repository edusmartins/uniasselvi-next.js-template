import React from 'react';
import styles from './Range.module.css';

/**
 * @render react
 * @name Range
 * @description Input tipo range, usado para medir o nível de algo, o quanto que a resposta tende mais para um dos lados.
 * @component
 * @example
 * <Range filled={true} style='prime' />
 *
 * @typedef {Object} Props
 *
 * @property {'prime' | 'second' | 'third' | 'right' | 'wrong'} [style] - Estilo do input. Se não definido, o default é ''
 * @property {boolean} [filled] - Se o botão é preenchido. Se não definido, o default é `{false}`
 *
 */

// Array com os estilos disponíveis
const STYLES = ['prime', 'second', 'third', 'right', 'wrong'];

interface RangeProps {
	style?: 'prime' | 'second' | 'third' | 'right' | 'wrong';
	filled?: boolean;
	className?: string;
}

/**
 * @param {Props} props
 */
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
