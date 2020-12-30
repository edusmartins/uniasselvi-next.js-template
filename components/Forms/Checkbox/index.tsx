import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Checkbox
 * @description Input tipo checkbox, usado para questões de multipla escolha onde há a possibilidade de marcar mais de uma alterantiva ao mesmo tempo.
 * @component
 * @example
 * <Checkbox id={1} name='rg-1' checked={true}>Input type checkbox</Checkbox>
 *
 * @typedef {Object} Props
 *
 * @property {string} props.id - ID do input
 * @property {string} props.value - Value do input
 * @property {string} props.defaultValue - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {boolean} props.disabled - Se o input está desabilitado. Valor default é {false}
 * @property {boolean} props.checked - Se o input está marcado. Valor default é {false}
 * @property {boolean} props.defaultChecked - Se o input está inicialmente marcado. Valor default é {false}
 * @property {boolean} props.required - Se o input é obrigatório. Valor default é {false}
 * @property {number} props.tabIndex - tabindex do input
 * @property {string} props.name - name do input
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Função onChange do input
 * @property {(event: React.MouseEvent<HTMLInputElement>) => void} props.onClick - Função onClick do input
 *
 */

interface CheckboxProps {
	id?: string;
	value?: string;
	defaultValue?: string;
	disabled?: boolean;
	checked?: boolean;
	defaultChecked?: boolean;
	required?: boolean;
	tabIndex?: number;
	name?: string;
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const StyledSvg = styled.svg`
	&.checkIcon {
		visibility: hidden;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: absolute;
		top: 0.1em;
		left: 0.05em;
		height: 0.8em;
		width: 0.8em;
		transition: 200ms ease;
	}
`;

const StyledDiv = styled.div`
	&.checkbox {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: flex-start;
	}

	&.checkbox::before {
		content: '';
		display: none;
	}

	&.checkbox input[type='checkbox'] {
		position: absolute;
		opacity: 0;
	}

	&.checkbox label {
		display: block;
		position: relative;
		z-index: 9;
		cursor: pointer;
		transition: 200ms ease;
		padding-left: calc(16px + 1em);
	}

	&.checkbox .checkbox_check {
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

	&.checkbox .checkbox_check {
		border-radius: 5px;
	}

	/** hovers **/

	&.checkbox:hover .checkbox_check {
		border: 2px solid var(--cinza-muito-escuro);
	}

	&.checkbox:hover input[type='checkbox']:checked ~ .checkbox_check {
		border: 2px solid var(--amarelo-escuro);
		background: var(--amarelo-escuro);
	}

	&.checkbox:hover label {
		color: var(--cinza-medio-escuro);
	}

	/** checked **/

	&.checkbox input[type='checkbox']:checked ~ .checkbox_check,
	&.checkbox:hover input[type='checkbox']:checked:disabled ~ .checkbox_check {
		border: 2px solid var(--amarelo);
		background: var(--amarelo);
	}

	&.checkbox input[type='checkbox']:checked ~ .checkbox_check .checkIcon {
		visibility: visible;
	}

	/** disabled **/

	&.checkbox input[type='checkbox']:disabled ~ label {
		color: var(--cinza-medio);
		cursor: auto;
	}

	&.checkbox input[type='checkbox']:disabled ~ .checkbox_check {
		border-color: var(--cinza-medio);
	}

	&.checkbox input[type='checkbox']:checked:disabled ~ .checkbox_check {
		opacity: 0.5;
		border-color: var(--amarelo);
	}

	/** focus **/

	&.checkbox input[type='checkbox']:focus ~ label {
		text-decoration: underline;
		text-underline-position: under;
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

/**
 * @param {Props} props
 */
const Checkbox: React.FC<CheckboxProps> = ({
	children,
	id,
	value,
	defaultValue,
	disabled,
	checked,
	defaultChecked,
	tabIndex,
	required,
	name,
	className,
	onChange,
	onClick,
	...rest
}) => {
	return (
		<StyledDiv className={`checkbox ${className}`}>
			<input
				type='checkbox'
				id={id}
				name={name}
				value={value}
				defaultValue={defaultValue}
				tabIndex={tabIndex}
				disabled={disabled}
				required={required}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={onChange}
				onClick={onClick}
				{...rest}
			/>
			<label htmlFor={id}>{children}</label>
			<div className='checkbox_check'>
				<CheckIcon />
			</div>
		</StyledDiv>
	);
};

export default Checkbox;
