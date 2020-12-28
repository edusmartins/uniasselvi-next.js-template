import React from 'react';
import styles from './Input.module.css';

/**
 * @name Input
 *
 * @param {string} props.style - Estilo do input. Se não definido, o default é null
 * @param {string} props.type - Tipo do input
 * @param {string} props.value - Texto pré-definido para o input se ele for read-only
 * @param {string} props.defaultValue - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @param {boolean} props.readOnly - Se o input é apenas de leitura
 * @param {boolean} props.disabled - Se o input está desabilitado. Valor default é {false}
 * @param {number} props.size - A largura visível (em caracteres) do campo de input. Funciona com inputs do tipo text, search, tel, url, email e password
 * @param {number} props.maxLength - Número máximo de caracteres
 * @param {number} props.min - Valor mínimo. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week
 * @param {number} props.max - Valor máximo. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week
 * @param {boolean} props.multiple - Se o input aceita múltiplos valores. Funciona com inputs do tipo email e file
 * @param {string} props.pattern - Padrão do input. Funciona com os inputs do tipo text, date, search, url, tel, email e password
 * @param {string} props.placeHolder - Texto do input antes de receber algum valor. Funciona os inputs do tipo  text, search, url, tel, email e password
 * @param {boolean} props.required - Se o input é obrigatório. Funciona os inputs do tipo text, search, url, tel, email, password, date pickers, number, checkbox, radio e file
 * @param {number} props.step - Específica intervalo numérico válido para o input. Funciona os inputs do tipo number, range, date, datetime-local, month, time e week
 * @param {boolean} props.autoFocus - Se o input entra em foco quando a página carrega
 * @param {number} props.height - Específica altura para input do tipo image
 * @param {number} props.width - Específica largura para input do tipo image
 * @param {string} props.list - Indica qual a lista (datalist) de opções pré-definidas para o input
 * @param {string} props.autoComplete - Se o input deve ter ou não autocomplete. Funciona os inputs do tipo text, search, url, tel, email, password, datepickers, range e color
 * @param {string} props.icon - Caminho do icone para o input
 * @param {string} props.id - id do input
 * @param {string} props.name - name do input
 * @param {string} props.accept - accept do input
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} props.onClick - Função onClick do input
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Função onChange do input
 *
 * @component
 * @example
 * return(
 * <Input value='Completo' style='done' />
 * )
 */

// Array com os estilos disponíveis
const STYLES = ['done', 'warning', 'right', 'wrong'];

interface InputProps {
	style?: string;
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
