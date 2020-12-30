import React from 'react';
import styled from 'styled-components';

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
 * @property {number} [min] - Valor mínimo.
 * @property {number} [max] - Valor máximo.
 * @property {number} [step] - Específica intervalo numérico válido para o input.
 * @property {string} [value] - Value do input
 *
 */

// Array com os estilos disponíveis
const STYLES = ['prime', 'second', 'third', 'right', 'wrong'];

interface RangeProps {
	style?: 'prime' | 'second' | 'third' | 'right' | 'wrong';
	filled?: boolean;
	max?: number;
	min?: number;
	step: number;
	value?: string;
	className?: string;
}

const StyledInput = styled.input`
	/* 
	?
	? ----> input type range
	?
*/

	width: 100%;
	margin: 1em 0;
	background-color: transparent !important;
	-webkit-appearance: none;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--cinza-escuro);
		border-radius: 100px;
	}

	/* chrome */
	&::-webkit-slider-runnable-track {
		background: var(--cinza-claro);
		border: 0;
		border-radius: 100px;
		width: 100%;
		height: 0.5em;
		cursor: pointer;
	}
	&::-webkit-slider-thumb {
		margin-top: -0.5em;
		width: 1.5em;
		height: 1.5em;
		background: #ffffff;
		border: 2px solid var(--amarelo);
		border-radius: 2em;
		cursor: pointer;
		-webkit-appearance: none;
	}

	/* mozila */
	&::-moz-range-track {
		background: var(--cinza-claro);
		border: 0;
		border-radius: 2em;
		width: 100%;
		height: 1em;
		cursor: pointer;
	}
	&::-moz-range-thumb {
		width: 1.5em;
		height: 1.5em;
		background: #ffffff;
		border: 2px solid var(--amarelo);
		border-radius: 2em;
		cursor: pointer;
	}

	/** temas **/
	&.filled::-webkit-slider-runnable-track {
		background: var(--amarelo);
	}
	&.filled::-moz-range-track {
		background: var(--amarelo);
	}

	&.second::-webkit-slider-thumb {
		border: 2px solid var(--preto);
	}
	&.second::-moz-range-thumb {
		border: 2px solid var(--preto);
	}
	&.second.filled::-webkit-slider-runnable-track {
		background: var(--preto);
	}
	&.second.filled::-moz-range-track {
		background: var(--preto);
	}

	&.third::-webkit-slider-thumb {
		border: 2px solid var(--verde-nao-ouse);
	}
	&.third::-moz-range-thumb {
		border: 2px solid var(--verde-nao-ouse);
	}
	&.third.filled::-webkit-slider-runnable-track {
		background: var(--verde-nao-ouse);
	}
	&.third.filled::-moz-range-track {
		background: var(--verde-nao-ouse);
	}

	&.right::-webkit-slider-thumb {
		border: 2px solid var(--acerto);
	}
	&.right::-moz-range-thumb {
		border: 2px solid var(--acerto);
	}
	&.right.filled::-webkit-slider-runnable-track {
		background: var(--acerto);
	}
	&.right.filled::-moz-range-track {
		background: var(--acerto);
	}

	&.wrong::-webkit-slider-thumb {
		border: 2px solid var(--erro);
	}
	&.wrong::-moz-range-thumb {
		border: 2px solid var(--erro);
	}
	&.wrong.filled::-webkit-slider-runnable-track {
		background: var(--erro);
	}
	&.wrong.filled::-moz-range-track {
		background: var(--erro);
	}
`;

/**
 * @param {Props} props
 */
const Range: React.FC<RangeProps> = ({
	children,
	style,
	filled,
	max,
	min,
	step,
	value,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a Range. Se não, define o estilo como '' */
	const checkRangeStyle = STYLES.includes(style) ? style : '';

	return (
		<StyledInput
			type='range'
			max={max}
			min={min}
			step={step}
			value={value}
			className={`
        input
        ${checkRangeStyle}
				${filled ? 'filled' : ''}
				${className}
      `}
			{...rest}
		>
			{children}
		</StyledInput>
	);
};

export default Range;
