import React, { useState } from 'react';
import styles from './TextArea.module.css';

/**
 * @render react
 * @name TextArea
 * @description Input tipo text, usado para coletar informações curtas e diretas. EX.: cadastrar e-mail, senha, endereço, etc.
 * @component
 * @example
 * <TextArea value='Completo' style='done' />
 *
 * @typedef {Object} Props
 *
 * @property {'done' | 'wrong'} [style] - Estilo da textarea. Se não definido, o default é ''
 * @property {string} [name] - Nome da textarea
 * @property {string} [id] - ID da textarea
 * @property {string} [placeHolder] - Texto da textarea antes de receber algum valor
 * @property {string} [value] - Texto pré-definido para a textarea
 * @property {string} [defaultValue] - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @property {string} [form] - Nome do formulário do qual a textarea faz parte
 * @property {'soft' | 'hard'} [wrap] - Wrap da textarea
 * @property {number} [cols] - Colunas da textarea
 * @property {number} [rows] - Linhas da textarea
 * @property {number} [minLenght] - Comprimento mínimo do texto
 * @property {number} [maxLenght] - Comprimento máximo do texto
 * @property {boolean} [required] - Se a textarea é obrigatória a ser preenchida. Valor default é {false}
 * @property {boolean} [readOnly] - Se a textarea é apenas para leitura. Valor default é {false}
 * @property {boolean} [disabled] - Se a textarea está desabilitado. Valor default é {false}
 * @property {boolean} [autoFocus] - Se a textarea entrará em foco quando a página carregar. Valor default é {false}
 * @property {boolean} [resize] - Se o resize da textarea está habilitado. Valor default é {false}
 *
 */

// Array com os estilos disponíveis
const STYLES = ['done', 'wrong'];

// Array com os wrap disponíveis
const WRAP = ['soft', 'hard'];

interface TextAreaProps {
	style?: 'done' | 'wrong';
	name?: string;
	id?: string;
	placeHolder?: string;
	value?: string;
	defaultValue?: string;
	form?: string;
	wrap?: 'soft' | 'hard';
	cols?: number;
	rows?: number;
	minLenght?: number;
	maxLenght?: number;
	required?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
	resize?: boolean;
	className?: string;
}

/**
 * @param {Props} props
 */
const TextArea: React.FC<TextAreaProps> = ({
	children,
	style,
	name,
	id,
	placeHolder,
	value,
	form,
	wrap,
	cols,
	rows,
	minLenght,
	maxLenght,
	required,
	readOnly,
	disabled,
	autoFocus,
	resize,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a TextArea. Se não, define o estilo como '' */
	const checkTextAreaStyle = STYLES.includes(style) ? style : '';

	/** Checa se foi passado algum dos estilos disponíveis para a TextArea. Se não, define o estilo como '' */
	const checkReadOnly = WRAP.includes(wrap) ? wrap : WRAP[0];

	return (
		<div
			className={`
			${styles.textarea_wrapper}
			${className}
		`}
		>
			<textarea
				className={`
			textarea
			${styles.textarea}
			${styles[`${checkTextAreaStyle}`]}
			${styles[`${resize ? 'resize' : ''}`]}
		`}
				name={name}
				id={id}
				cols={cols}
				placeholder={placeHolder}
				value={value}
				form={form}
				wrap={wrap}
				rows={rows}
				minLength={minLenght}
				maxLength={maxLenght}
				required={required}
				readOnly={readOnly}
				disabled={disabled}
				autoFocus={autoFocus}
				{...rest}
			>
				{children}
			</textarea>
		</div>
	);
};

export default TextArea;
