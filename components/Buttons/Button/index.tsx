import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Button
 * @description Botão simples, apenas com texto.
 * @component
 * @example
 * return(
 * 	<Button rounded={true} filled={true} style='prime' size='large'>Primário</Button>
 * )
 *
 * @typedef {Object} Props
 *
 * @property {'prime' | 'second' | 'third' | 'warning' | 'right' | 'wrong'} [style] - Estilo do botão. Se não definido, o default é `prime`
 * @property {'small' | 'large'} [size] - Tamanho do botão. Se não definido, o default é `null`
 * @property {boolean} [filled] - Se o botão é preenchido. Se não definido, o default é `{false}`
 * @property {boolean} [disabled] - Se o botão está desabilitado. Se não definido, o default é `{false}`
 * @property {boolean} [rounded] - Se o botão tem bordas arredondadas. Se não definido, o default é `{false}`
 * @property {string} [type] - Tipo do botão. Valor default é `button`
 * @property {Function} onClick - Função `onClick` do botão
 *
 */

/** Array com os estilos disponíveis */
const STYLES = ['prime', 'second', 'third', 'warning', 'right', 'wrong'];

/** Array com os tamanhos disponíveis */
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

const StyledButton = styled.button`
	background: transparent;
	cursor: pointer;
	border: 2px solid var(--cinza-claro);
	font-size: var(--fs-16);
	font-family: inherit;
	border-radius: 5px;
	padding: 1em 2em;
	height: 3em;
	display: flex;
	align-items: center;
	line-height: 0;
	text-decoration: none;
	color: var(--cinza-muito-escuro);
	width: fit-content;

	&.small {
		font-size: 0.75em;
		padding: 0 24px;
		height: 36px;
	}
	&.large {
		font-size: var(--fs-24);
		padding: 0 40px;
		height: 60px;
	}

	&.warning {
		color: var(--aviso);
	}
	&.right {
		color: var(--acerto);
	}
	&.wrong {
		color: var(--erro);
	}
	&.prime {
		color: var(--preto);
	}
	&.second {
		color: var(--amarelo);
	}
	&.third {
		color: var(--verde-nao-ouse);
	}

	&.warning:hover {
		border-color: var(--aviso);
	}
	&.right:hover {
		border-color: var(--acerto);
	}
	&.wrong:hover {
		border-color: var(--erro);
	}
	&.prime:hover {
		border-color: var(--cinza-muito-escuro);
	}
	&.second:hover {
		border-color: var(--amarelo);
	}
	&.third:hover {
		border-color: var(--verde-nao-ouse);
	}

	&:focus {
		border-color: var(--cinza-medio);
		color: var(--branco);
		outline: none;
	}
	&.warning:focus {
		background: var(--aviso);
	}
	&.right:focus {
		background: var(--acerto);
	}
	&.wrong:focus {
		background: var(--erro);
	}
	&.prime:focus {
		background: var(--cinza-muito-escuro);
		color: var(--branco);
	}
	&.second:focus {
		background: var(--amarelo);
	}
	&.third:focus {
		background: var(--verde-nao-ouse);
	}

	&:active {
		border-color: transparent;
	}

	&[disabled] {
		pointer-events: none;
		opacity: 0.4;
	}

	&.warning[disabled] {
		color: var(--aviso);
		border-color: var(--aviso);
	}
	&.right[disabled] {
		color: var(--acerto);
		border-color: var(--acerto);
	}
	&.wrong[disabled] {
		color: var(--erro);
		border-color: var(--erro);
	}
	&.prime[disabled] {
		color: var(--preto);
		border-color: var(--preto);
	}
	&.second[disabled] {
		color: var(--amarelo);
		border-color: var(--amarelo);
	}
	&.third[disabled] {
		color: var(--verde-nao-ouse);
		border-color: var(--verde-nao-ouse);
	}

	&.filled {
		color: var(--branco);
		border-color: transparent;
	}

	&.filled.warning {
		background: var(--aviso);
	}
	&.filled.right {
		background: var(--acerto);
	}
	&.filled.wrong {
		background: var(--erro);
	}
	&.filled.prime {
		background: var(--amarelo);
		color: var(--preto);
	}
	&.filled.second {
		background: var(--cinza-muito-escuro);
	}
	&.filled.third {
		background: var(--verde-nao-ouse);
	}

	&.filled.warning:hover {
		background: var(--aviso-claro);
		border-color: transparent;
	}
	&.filled.right:hover {
		background: var(--acerto-claro);
		border-color: transparent;
	}
	&.filled.wrong:hover {
		background: var(--erro-claro);
		border-color: transparent;
	}
	&.filled.prime:hover {
		background: var(--amarelo-claro);
		border-color: transparent;
	}
	&.filled.second:hover {
		background: var(--cinza-escuro);
		border-color: transparent;
	}
	&.filled.third:hover {
		background: var(--verde-claro);
		border-color: transparent;
	}

	&.filled.warning:focus,
	&.filled.right:focus,
	&.filled.wrong:focus,
	&.filled.prime:focus,
	&.filled.second:focus,
	&.filled.third:focus {
		border-color: var(--cinza-medio-escuro);
	}

	&.filled.warning:active {
		background: var(--aviso-escuro);
		border-color: transparent;
	}
	&.filled.right:active {
		background: var(--acerto-escuro);
		border-color: transparent;
	}
	&.filled.wrong:active {
		background: var(--erro-escuro);
		border-color: transparent;
	}
	&.filled.prime:active {
		background: var(--amarelo-escuro);
		border-color: transparent;
	}
	&.filled.second:active {
		background: var(--preto);
		border-color: transparent;
	}
	&.filled.third:active {
		background: var(--verde-escuro);
		border-color: transparent;
	}

	&.filled.warning[disabled] {
		color: var(--branco);
	}
	&.filled.right[disabled] {
		color: var(--branco);
	}
	&.filled.wrong[disabled] {
		color: var(--branco);
	}
	&.filled.prime[disabled] {
		border-color: transparent;
	}
	&.filled.second[disabled] {
		border-color: transparent;
		color: var(--branco);
	}
	&.filled.third[disabled] {
		color: var(--branco);
	}

	&.rounded {
		border-radius: 30px;
	}
`;

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
		<StyledButton
			className={`button 
									${rounded ? 'rounded' : null}
									${filled ? 'filled' : null}
									${checkButtonStyle ? checkButtonStyle : null}
									${checkButtonSize ? checkButtonSize : null}
									${className}
									`}
			onClick={onClick}
			disabled={disabled}
			type={type ? type : 'button'}
			{...rest}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
