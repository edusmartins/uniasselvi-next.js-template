import { useState } from 'react';

import styles from './Alert.module.css';

/**
 * Alert
 *
 * @component
 * @example
 * return(
 * <Alert title='Atenção' message='Mensagem de aviso' style='warning' />
 * )
 */

/** Array com os estilos disponíveis */
const STYLES = ['prime', 'warning', 'right', 'wrong'];

interface AlertProps {
	/**
	 * Estilo da alerta. Se não definido, o default é 'prime'.
	 * @type {string}
	 */
	style?: string;
	/**
	 * Título do alerta.
	 * @type {string}
	 */
	title?: string;
	/**
	 * Mensagem do alerta.
	 * @type {string}
	 */
	message: string;
	/**
	 * Função onClick do botão de fechar.
	 * @type {Function}
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

const Alert: React.FC<AlertProps> = ({
	children,
	style,
	title,
	message,
	onClick,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a Alert. Se não, define o estilo como 'prime' */
	const checkAlertStyle = STYLES.includes(style) ? style : STYLES[0];

	/**Icone de fechar */
	const closeIcon = (
		<svg
			id='Camada_1'
			data-name='Camada 1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 100 100'
		>
			<g id='icone-fechar'>
				<path
					id='Caminho_430'
					data-name='Caminho 430'
					d='M84.75,88.62a3.67,3.67,0,0,1-2.58-1.07L12.4,17.78a3.65,3.65,0,0,1,5.16-5.16L87.34,82.39a3.65,3.65,0,0,1-2.58,6.23Z'
				/>
				<path
					id='Caminho_431'
					data-name='Caminho 431'
					d='M15.09,88.61a3.65,3.65,0,0,1-2.58-6.23L82.44,12.45a3.65,3.65,0,0,1,5.16,5.17h0L17.66,87.55A3.64,3.64,0,0,1,15.09,88.61Z'
				/>
			</g>
		</svg>
	);

	const [opened, setOpened] = useState(true);
	const [gone, setGone] = useState(false);

	return (
		<div
			className={`
    ${styles.alert}
		${styles[`${checkAlertStyle}`]}
		${styles[`${opened ? null : 'closed'}`]}
		${styles[`${gone ? 'gone' : null}`]}
		${className}
    `}
			{...rest}
		>
			<span>
				<b>{title}</b> {message}
			</span>
			{children}
			<button
				onClick={() => {
					setOpened(false);
					setTimeout(() => {
						setGone(true);
					}, 100);
				}}
			>
				{closeIcon}
			</button>
		</div>
	);
};

export default Alert;
