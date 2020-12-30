import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Radio
 * @description Input tipo radio, usado para questões de multipla escolha onde só há uma única resposta correta, sem possibilidade de marcar mais de uma opção ao mesmo tempo.
 * @component
 * @example
 * <Radio id={1} name='rg-1' checked={true}>Input type radio</Radio>
 *
 * @typedef {Object} Props
 *
 * @property {string} [id] - ID do input
 * @property {string} [name] - Name do input
 * @property {boolean} [disabled] - Se o input está desabilitado. Valor default é `{false}`
 * @property {boolean} [checked] - Se o input está marcado. Valor default é `{false}`
 * @property {boolean} [defaultChecked] - Se o input está inicialmente marcado. Valor default é `{false}`
 * @property {boolean} [required] - Se o input é obrigatório
 * @property {string} [value] - Value do input
 * @property {string} [defaultValue] - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {function} [onChange] - Função `onChange` do input
 * @property {function} [onClick] - Função `onClick` do input
 *
 */

interface RadioProps {
	id: string;
	name?: string;
	disabled?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	required?: boolean;
	value?: string;
	defaultValue?: string;
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const StyledDiv = styled.div`
	&.radio {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: flex-start;
	}

	&.radio::before {
		content: '';
		display: none;
	}

	&.radio input[type='radio'] {
		position: absolute;
		opacity: 0;
	}

	&.radio label {
		display: block;
		position: relative;
		z-index: 9;
		cursor: pointer;
		transition: 200ms ease;
		padding-left: calc(16px + 1em);
	}

	&.radio .radio_check {
		display: block;
		position: absolute;
		border: 2px solid var(--cinza-medio-escuro);
		border-radius: 100%;
		height: 1em;
		width: 1em;
		z-index: 5;
		transition: 200ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&.radio .radio_check::before {
		content: '';
		border-radius: 100%;
		height: 0.6em;
		width: 0.6em;
		margin: auto;
		transition: background 200ms ease;
	}

	/* hovers */

	&.radio:hover .radio_check {
		border: 2px solid var(--cinza-muito-escuro);
	}

	&.radio:hover input[type='radio']:checked ~ .radio_check {
		border: 2px solid var(--amarelo-escuro);
	}

	&.radio:hover input[type='radio']:checked ~ .radio_check::before {
		background: var(--amarelo-escuro);
	}

	&.radio:hover label {
		color: var(--cinza-medio-escuro);
	}

	/* checked */

	&.radio input[type='radio']:checked ~ .radio_check {
		border: 2px solid var(--amarelo);
	}

	&.radio input[type='radio']:checked ~ .radio_check::before,
	&.radio:hover input[type='radio']:checked:disabled ~ .radio_check::before {
		background: var(--amarelo);
	}

	/* focus */

	&.radio input[type='radio']:disabled ~ label {
		color: var(--cinza-medio);
		cursor: auto;
	}

	&.radio input[type='radio']:disabled ~ .radio-check {
		border-color: var(--cinza-medio);
	}

	&.radio input[type='radio']:checked:disabled ~ .radio-check,
	&.radio:hover input[type='radio']:checked:disabled ~ .radio-check {
		border-color: var(--amarelo);
		opacity: 0.5;
	}

	/* focus */

	&.radio input[type='radio']:focus ~ label {
		text-decoration: underline;
		text-underline-position: under;
	}
`;

/**
 * @param {Props} props
 */
const Radio: React.FC<RadioProps> = ({
	children,
	id,
	name,
	disabled,
	checked,
	defaultChecked,
	required,
	value,
	defaultValue,
	onChange,
	onClick,
	className,
	...rest
}) => {
	return (
		<StyledDiv className={`radio ${className}`} {...rest}>
			<input
				type='radio'
				name={name}
				id={`${id}`}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				required={required}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onClick={onClick}
			/>
			<label htmlFor={`${id}`}>{children}</label>
			<div className='radio_check'></div>
		</StyledDiv>
	);
};

export default Radio;
