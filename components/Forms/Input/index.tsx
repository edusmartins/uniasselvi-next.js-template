import React from 'react';

import styles from './Input.module.css';

/**
 * Input
 *
 * @component
 * @example
 * return(
 * <Input value='Completo' style='done' />
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['done', 'warning', 'right', 'wrong'];

interface InputProps {
	/**
	 * Estilo do input. Se não definido, o default é null.
	 * @type {string}
	 */
	style?: string;
	/**
	 * Tipo do input.
	 * @type {string}
	 */
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
	/**
	 * Texto pré-definido para o input se ele for read-only .
	 * @type {string}
	 */
	value?: string;

	/**
	 * Texto pré-definido para o input se o usuário puder mudar esse valor.
	 * @type {string}
	 */
	defaultValue?: string;

	/**
	 * Se o input é apenas de leitura.
	 * @type {boolean}
	 */
	readonly?: boolean;

	/**
	 * Se o input está desabilitado. Valor default é {false}.
	 * @type {boolean}
	 */
	disabled?: boolean;

	/**
	 * A largura visível (em caracteres) do campo de input. Funciona com inputs do tipo text, search, tel, url, email e password.
	 * @type {number}
	 */
	size?: number;

	/**
	 * Número máximo de caracteres.
	 * @type {number}
	 */
	maxlength?: number;

	/**
	 * Valor mínimo. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week.
	 * @type {number}
	 */
	min?: number;

	/**
	 * Valor máximo. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week.
	 * @type {number}
	 */
	max?: number;

	/**
	 * Se o input aceita múltiplos valores. Funciona com inputs do tipo email e file.
	 * @type {boolean}
	 */
	multiple?: boolean;

	/**
	 * Padrão do input. Funciona com os inputs do tipo text, date, search, url, tel, email e password.
	 * @type {string}
	 */
	pattern?: string;

	/**
	 * Texto do input antes de receber algum valor. Funciona os inputs do tipo  text, search, url, tel, email e password.
	 * @type {string}
	 */
	placeholder?: string;

	/**
	 * Se o input é obrigatório. Funciona os inputs do tipo text, search, url, tel, email, password, date pickers, number, checkbox, radio e file.
	 * @type {boolean}
	 */
	required?: boolean;

	/**
	 * Específica intervalo numérico válido para o input. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week.
	 * @type {number}
	 */
	step?: number;

	/**
	 * Se o input entra em foco quando a página carrega.
	 * @type {boolean}
	 */
	autofocus?: boolean;

	/**
	 * Específica altura para input do tipo image.
	 * @type {number}
	 */
	height?: number;

	/**
	 * Específica largura para input do tipo image.
	 * @type {number}
	 */
	width?: number;

	/**
	 * Indica qual a lista (datalist) de opções pré-definidas para o input.
	 * @type {string}
	 */
	list?: string;

	/**
	 * Se o input deve ter ou não autocomplete. Funciona os inputs do tipo text, search, url, tel, email, password, datepickers, range e color.
	 * @type {string}
	 */
	autocomplete?: string;

	/**
	 * Caminho do icone para o input.
	 * @type {string}
	 */
	icon?: string;

	/**
	 * id do input.
	 * @type {string}
	 */
	id?: string;

	/**
	 * name do input.
	 * @type {string}
	 */
	name?: string;

	/**
	 * className do input.
	 * @type {string}
	 */
	className?: string;

	/**
	 * accept do input.
	 * @type {string}
	 */
	accept?: string;

	/**
	 * Função onClick do input
	 * @type {Function}
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

	/**
	 * Função onChange do input
	 * @type {Function}
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	children,
	style,
	type,
	value,
	defaultValue,
	readonly,
	disabled,
	size,
	maxlength,
	min,
	max,
	multiple,
	pattern,
	placeholder,
	required,
	step,
	autofocus,
	height,
	width,
	list,
	autocomplete,
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
		<div
			className={`
		${styles.input_wrapper}
		${className}
    `}
		>
			{iconImg}
			<input
				type={type ? type : 'text'}
				value={value}
				defaultValue={defaultValue}
				readOnly={readonly}
				disabled={disabled}
				size={size}
				maxLength={maxlength}
				min={min}
				max={max}
				multiple={multiple}
				pattern={pattern}
				placeholder={placeholder}
				required={required}
				step={step}
				autoFocus={autofocus}
				height={height}
				width={width}
				list={list}
				autoComplete={autocomplete}
				accept={accept}
				{...rest}
				className={`
      ${styles.input}
      ${styles[`${checkInputStyle ? checkInputStyle : null}`]} 
			`}
				id={id}
				name={name}
				onClick={onClick}
				onChange={onChange}
			/>
			{children}
		</div>
	);
};

export default Input;
