import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Label
 * @description Usado para informar algo sobre um elemento ou notificar o usuário.
 * @component
 * @example
 * <Label style='prime' single={true}>11</Label>
 *
 * @typedef {Object} Props
 *
 * @property {'prime' | 'second' | 'third' | 'warning' | 'right' | 'wrong'} [style] - Estilo da label. Se não definido, o default é 'prime'
 * @property {boolean} [single] - Se o botão tem conteúdo pequeno, como um número com até 2 algarismos
 *
 */

interface LabelProps {
	style?: 'prime' | 'second' | 'third' | 'warning' | 'right' | 'wrong';
	single?: boolean;
	className?: string;
}

// Array com os estilos disponíveis
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

const StyledSpan = styled.span`
	&.label {
		padding: 0.5em 1em;
		color: var(--branco);
		border-radius: 5px;
		width: fit-content;
		height: fit-content;
	}

	&.label.single {
		padding: 0.5em;
	}

	&.label.prime {
		background: var(--cinza-muito-escuro);
	}

	&.label.warning {
		background: var(--aviso);
	}

	&.label.right {
		background: var(--acerto);
	}

	&.label.wrong {
		background: var(--erro);
	}

	&.label.second {
		background: var(--amarelo);
		color: var(--preto);
	}
	&.label.third {
		background: var(--verde-nao-ouse);
		color: var(--branco);
	}
`;

/**
 * @param {Props} props
 */
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
		<StyledSpan
			className={`label
									${single ? 'single' : ''}
									${checkLabelStyle}
									${className}
                `}
			{...rest}
		>
			{children}
		</StyledSpan>
	);
};

export default Label;
