import React, { useState } from 'react';
import styles from './TextArea.module.css';

/**
 * @name TextArea
 *
 * @param {string} props.style - Estilo da textarea. Se não definido, o default é ''
 * @param {string} props.name - Nome da textarea
 * @param {string} props.id - ID da textarea
 * @param {string} props.placeHolder - Texto da textarea antes de receber algum valor
 * @param {string} props.value - Texto pré-definido para a textarea
 * @param {string} props.defaultValue - Texto pré-definido para o input se o usuário puder mudar esse valor
 * @param {string} props.form - Nome do formulário do qual a textarea faz parte
 * @param {string} props.wrap - Wrap da textarea
 * @param {number} props.cols - Colunas da textarea
 * @param {number} props.rows - Linhas da textarea
 * @param {number} props.minLenght - Comprimento mínimo do texto
 * @param {number} props.maxLenght - Comprimento máximo do texto
 * @param {boolean} props.required - Se a textarea é obrigatória a ser preenchida. Valor default é {false}
 * @param {boolean} props.readOnly - Se a textarea é apenas para leitura. Valor default é {false}
 * @param {boolean} props.disabled - Se a textarea está desabilitado. Valor default é {false}
 * @param {boolean} props.autoFocus - Se a textarea entrará em foco quando a página carregar. Valor default é {false}
 * @param {boolean} props.resize - Se o resize da textarea está habilitado. Valor default é {false}
 *
 * @component
 * @example
 * return(
 * <TextArea value='Completo' style='done' />
 * )
 */

// Array com os estilos disponíveis
const STYLES = ['done', 'wrong'];

// Array com os wrap disponíveis
const WRAP = ['soft', 'hard'];

interface TextAreaProps {
	style?: string;
	name?: string;
	id?: string;
	placeHolder?: string;
	value?: string;
	defaultValue?: string;
	form?: string;
	wrap?: string;
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
