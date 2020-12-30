import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Switch
 * @description Toogle Switch simples, usado para que o usuário possa habilitar ou desabilitar algo dentro da aplicação.
 * @component
 * @example
 * <Switch checked={true} rounded={true}></Switch>
 *
 * @typedef {Object} Props
 *
 * @property {'small' | 'large'} [size] - Tamanho do switch. Se não definido, o default é ''
 * @property {boolean} [disabled] - Se o switch está desabilitado. Se não definido, o default é `{false}`
 * @property {boolean} [checked] - Se o botão está marcado. Se não definido, o default é `{false}`
 * @property {boolean} [defaultChecked] - Se o input está inicialmente marcado. Valor default é `{false}`
 * @property {boolean} [rounded] - Se o botão tem bordas arredondadas. Se não definido, o default é `{false}`
 * @property {string} [value] - valor do input
 * @property {string} [defaultValue] - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {function} [onChange] - Função `onChange` do input checkbox dentro do componente
 * @property {function} [onClick] - Função `onClick` do input
 *
 */

interface SwitchProps {
	size?: 'small' | 'large';
	disabled?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	rounded?: boolean;
	value?: string;
	defaultValue?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	className?: string;
}

// Array com os tamanhos disponíveis
const SIZES = ['small', 'large'];

const StyledSvg = styled.svg`
	&.checkIcon {
		left: 0.5em;
	}

	&.closeIcon {
		right: 0.5em;
		filter: invert();
	}

	&.checkIcon,
	&.closeIcon {
		height: 1em;
		width: 1em;
		position: absolute;
		top: 0.4em;
		z-index: 1;
	}
`;

const StyledDiv = styled.div`
	&.knobs,
	&.layer {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	&.switch {
		position: relative;
		width: 4em;
		height: 2em;
		border-radius: 5px;
	}

	& .checkbox {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		opacity: 0;
		cursor: pointer;
		z-index: 3;
	}

	&.switch.small {
		font-size: 12px;
	}

	&.switch.large {
		font-size: 24px;
	}

	&.knobs {
		z-index: 2;
	}

	&.layer {
		width: 100%;
		background-color: var(--cinza-muito-escuro);
		transition: 0.3s ease all;
		z-index: 1;
		border-radius: 5px;
	}

	&.switch .knobs span {
		position: absolute;
		border-radius: 5px;
		left: 0.3em;
		top: 0.3em;
		background-color: var(--branco);
		z-index: 2;
		height: 1.4em;
		width: 1.4em;
		transition: 200ms ease;
		box-shadow: -3px 0px 6px #00000029;
	}

	&.switch .checkbox:checked + .knobs span {
		left: 2.3em;
	}

	&.switch .checkbox:checked ~ .layer {
		background-color: var(--amarelo);
	}

	&.switch .checkbox:disabled ~ .layer,
	&.switch .checkbox:disabled ~ .knobs {
		opacity: 0.5;
	}

	&.switch .checkbox:focus ~ .layer {
		box-shadow: 0 0 0 2px var(--cinza-escuro);
	}

	&.switch.rounded .knobs span {
		border-radius: 1em;
	}

	&.switch.rounded .layer {
		border-radius: 2em;
	}
`;

function CheckIcon() {
	return (
		<StyledSvg
			className='checkIcon'
			id='Camada_1'
			data-name='Camada 1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
		>
			<g id='icone-certo'>
				<path
					id='Caminho_421'
					data-name='Caminho 421'
					d='M36,81.53h0a4,4,0,0,1-2.85-1.21L6.1,52.63A4,4,0,1,1,11.78,47l.07.06,24.2,24.79L88.22,19.64a4,4,0,1,1,5.67,5.68l-55,55A4,4,0,0,1,36,81.53Z'
				/>
			</g>
		</StyledSvg>
	);
}

function CloseIcon() {
	return (
		<StyledSvg
			className='closeIcon'
			id='Camada_1'
			data-name='Camada 1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
		>
			<g id='icone-fechar'>
				<path
					id='Caminho_430'
					data-name='Caminho 430'
					className='cls-1'
					d='M84.75,88.62a3.67,3.67,0,0,1-2.58-1.07L12.4,17.78a3.65,3.65,0,0,1,5.16-5.16L87.34,82.39a3.65,3.65,0,0,1-2.58,6.23Z'
				/>
				<path
					id='Caminho_431'
					data-name='Caminho 431'
					className='cls-1'
					d='M15.09,88.61a3.65,3.65,0,0,1-2.58-6.23L82.44,12.45a3.65,3.65,0,0,1,5.16,5.17h0L17.66,87.55A3.64,3.64,0,0,1,15.09,88.61Z'
				/>
			</g>
		</StyledSvg>
	);
}

/**
 * @param {Props} props
 */
const Switch: React.FC<SwitchProps> = ({
	children,
	size,
	disabled,
	checked,
	defaultChecked,
	rounded,
	onChange,
	onClick,
	value,
	defaultValue,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos tamanhos disponíveis para o botão. Se não, define o tamanho como '' */
	const checkButtonSize = SIZES.includes(size) ? size : '';

	return (
		<StyledDiv
			className={`
				switch
				${checkButtonSize}
				${rounded ? 'rounded' : ''}
				${className}
      `}
		>
			<input
				type='checkbox'
				className={`checkbox`}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onClick={onClick}
				{...rest}
			></input>
			<StyledDiv className='knobs'>
				<CheckIcon />
				<span></span>
				<CloseIcon />
			</StyledDiv>
			<StyledDiv className='layer'></StyledDiv>
		</StyledDiv>
	);
};

export default Switch;
