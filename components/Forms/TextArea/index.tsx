import React, { useState } from 'react';

import styles from './TextArea.module.css';

/**
 * TextArea
 *
 * @component
 * @example
 * return(
 * <TextArea value='Completo' style='done' />
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['done', 'wrong'];

/** Array com os estilos disponíveis */
const WRAP = ['soft', 'hard'];

interface TextAreaProps {
	/**
	 * Estilo da textarea. Se não definido, o default é ''.
	 * @type {string}
	 */
	style?: string;
	/**
	 * Nome da textarea
	 * @type {string}
	 */
	name?: string;
	/**
	 * ID da textarea
	 * @type {string}
	 */
	id?: string;
	/**
	 * Texto da textarea antes de receber algum valor.
	 * @type {string}
	 */
	placeholder?: string;
	/**
	 * Texto pré-definido para a textarea.
	 * @type {string}
	 */
	value?: string;
	/**
	 * Texto pré-definido para o input se o usuário puder mudar esse valor.
	 * @type {string}
	 */
	defaultValue?: string;
	/**
	 * Nome do formulário do qual a textarea faz parte
	 * @type {string}
	 */
	form?: string;
	/**
	 * Wrap da textarea
	 * @type {string}
	 */
	wrap?: string;
	/**
	 * Colunas da textarea
	 * @type {number}
	 */
	cols?: number;
	/**
	 * Linhas da textarea
	 * @type {number}
	 */
	rows?: number;
	/**
	 * Comprimento mínimo do texto
	 * @type {number}
	 */
	minLenght?: number;
	/**
	 * Comprimento máximo do texto
	 * @type {number}
	 */
	maxLenght?: number;
	/**
	 * Se a textarea é obrigatória a ser preenchida. Valor default é {false}
	 * @type {boolean}
	 */
	required?: boolean;
	/**
	 * Se a textarea é apenas para leitura. Valor default é {false}
	 * @type {boolean}
	 */
	readOnly?: boolean;
	/**
	 * Se a textarea está desabilitado. Valor default é {false}.
	 * @type {boolean}
	 */
	disabled?: boolean;
	/**
	 * Se a textarea entrará em foco quando a página carregar. Valor default é {false}.
	 * @type {boolean}
	 */
	autoFocus?: boolean;
	/**
	 * Se o resize da textarea está habilitado. Valor default é {false}.
	 * @type {boolean}
	 */
	resize?: boolean;
	className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
	children,
	style,
	name,
	id,
	placeholder,
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
				placeholder={placeholder}
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
