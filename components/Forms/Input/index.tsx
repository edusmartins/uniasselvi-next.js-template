import React from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Input
 * @description Input básico, do tipo 'text' por padrão, mas pode receber outros tipos. Usado em formulários para receber alguma informação do usuário.
 * @component
 * @example
 * <Input value='Completo' style='done' />
 *
 * @typedef {Object} Props
 *
 * @property {'done' | 'warning' | 'right' | 'wrong'} [style] - Estilo do input. Se não definido, o default é `null`
 * @property {'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'} [type] - Tipo do input
 * @property {string} [value] - Texto pré-definido para o input se ele for read-only
 * @property {string} [defaultValue] - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {boolean} [readOnly] - Se o input é apenas de leitura
 * @property {boolean} [disabled] - Se o input está desabilitado. Valor default é `{false}`
 * @property {number} [size] - A largura visível (em caracteres) do campo de input. Funciona com inputs do tipo text, search, tel, url, email e password
 * @property {number} [maxLength] - Número máximo de caracteres
 * @property {number} [min] - Valor mínimo. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week
 * @property {number} [max] - Valor máximo. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week
 * @property {boolean} [multiple] - Se o input aceita múltiplos valores. Funciona com inputs do tipo email e file
 * @property {string} [pattern] - Padrão do input. Funciona com os inputs do tipo text, date, search, url, tel, email e password
 * @property {string} [placeHolder] - Texto do input antes de receber algum valor. Funciona os inputs do tipo  text, search, url, tel, email e password
 * @property {boolean} [required] - Se o input é obrigatório. Funciona os inputs do tipo text, search, url, tel, email, password, date pickers, number, checkbox, radio e file
 * @property {number} [step] - Específica intervalo numérico válido para o input. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week
 * @property {boolean} [autoFocus] - Se o input entra em foco quando a página carrega
 * @property {number} [height] - Específica altura para input do tipo image
 * @property {number} [width] - Específica largura para input do tipo image
 * @property {string} [list] - Indica qual a lista (datalist) de opções pré-definidas para o input
 * @property {string} [autoComplete] - Se o input deve ter ou não autocomplete. Funciona os inputs do tipo text, search, url, tel, email, password, datepickers, range e color
 * @property {string} [icon] - Caminho do icone para o input
 * @property {string} [id] - id do input
 * @property {string} [name] - name do input
 * @property {string} [accept] - accept do input
 * @property {function} [onClick] - Função `onClick` do input
 * @property {function} [onChange] - Função `onChange` do input
 *
 */

interface InputProps {
	style?: 'done' | 'warning' | 'right' | 'wrong';
	type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	value?: string;
	defaultValue?: string;
	readOnly?: boolean;
	disabled?: boolean;
	size?: number;
	maxLength?: number;
	min?: number;
	max?: number;
	multiple?: boolean;
	pattern?: string;
	placeHolder?: string;
	required?: boolean;
	step?: number;
	autoFocus?: boolean;
	height?: number;
	width?: number;
	list?: string;
	autoComplete?: string;
	icon?: string;
	id?: string;
	name?: string;
	className?: string;
	accept?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Array com os estilos disponíveis
const STYLES = ['done', 'warning', 'right', 'wrong'];

const StyledInput = styled.input`
	&.input {
		padding: 0.5em 1em;
		color: var(--cinza-muito-escuro);
		border: 2px solid var(--cinza-medio);
		border-radius: 5px;
		font-family: inherit;
		font-size: 1em;
	}

	&.input::placeholder {
		color: var(--cinza-medio-escuro);
	}

	&.input:hover {
		border-color: var(--cinza-medio-escuro);
	}

	&.input:focus {
		border-color: var(--seleções) !important;
		/* color: inherit !important; */
		background: var(--branco);
		outline: none;
	}

	&.input:disabled {
		opacity: 0.5;
		pointer-events: none;
	}

	&.input.done {
		border-color: var(--cinza-muito-escuro);
	}
	&.input.warning {
		border-color: var(--aviso);
		color: var(--aviso);
	}
	&.input.right {
		border-color: var(--acerto);
		color: var(--acerto);
	}
	&.input.wrong {
		border-color: var(--erro);
		color: var(--erro);
	}
`;

const StyledDiv = styled.div`
	&.input_wrapper {
		position: relative;
		display: flex;
		align-items: center;
	}

	&.input_wrapper img {
		position: absolute;
		left: 1em;
		height: 1em;
	}

	&.input_wrapper img + .input {
		padding-left: 3em;
		margin: 0;
	}
`;

/**
 * @param {Props} props
 */
const Input: React.FC<InputProps> = ({
	children,
	style,
	type,
	value,
	defaultValue,
	readOnly,
	disabled,
	size,
	maxLength,
	min,
	max,
	multiple,
	pattern,
	placeHolder,
	required,
	step,
	autoFocus,
	height,
	width,
	list,
	autoComplete,
	icon,
	id,
	name,
	className,
	accept,
	onClick,
	onChange,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a Input. Se não, define o estilo como null */
	const checkInputStyle = STYLES.includes(style) ? style : null;

	/** Checa se há icon para algum icone. Se houver, chegar uma tag <img> e a coloca antes do texto do input*/
	const iconImg = icon ? <img src={icon} alt='Icone' /> : null;

	return (
		<StyledDiv
			className={`
		input_wrapper
		${className}
    `}
		>
			{iconImg}
			<StyledInput
				type={type ? type : 'text'}
				value={value}
				defaultValue={defaultValue}
				readOnly={readOnly}
				disabled={disabled}
				size={size}
				maxLength={maxLength}
				min={min}
				max={max}
				multiple={multiple}
				pattern={pattern}
				placeholder={placeHolder}
				required={required}
				step={step}
				autoFocus={autoFocus}
				height={height}
				width={width}
				list={list}
				autoComplete={autoComplete}
				accept={accept}
				{...rest}
				className={`
					input
					${checkInputStyle ? checkInputStyle : null} 
			  `}
				id={id}
				name={name}
				onClick={onClick}
				onChange={onChange}
			/>
			{children}
		</StyledDiv>
	);
};

export default Input;
