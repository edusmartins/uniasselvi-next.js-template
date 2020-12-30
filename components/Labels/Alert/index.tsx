import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * @render react
 * @name Alert
 * @description Usado para informar e/ou alertar o usuário sobre algo da aplicação, como, por exemplo, um erro, aviso, mensagem de sucesso, etc.
 * @component
 * @example
 * <Alert title='Atenção' message='Mensagem de aviso' style='warning' />
 *
 * @typedef {Object} Props
 *
 * @property {'prime' | 'warning' | 'right' | 'wrong'} [style] - Estilo da alerta. Se não definido, o default é 'prime'
 * @property {string} [title] - Título do alerta
 * @property {string} message - Mensagem do alerta
 *
 */

interface AlertProps {
	style?: 'prime' | 'warning' | 'right' | 'wrong';
	title?: string;
	message: string;
	className?: string;
}

// Array com os estilos disponíveis
const STYLES = ['prime', 'warning', 'right', 'wrong'];

const StyledDiv = styled.div`
	&.alert {
		width: 100%;
		padding: 8px 16px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		border-radius: 5px;
		color: var(--branco);

		transform-origin: top;
		transition: 200ms ease-out;
	}

	&.alert.closed {
		height: 0;
		opacity: 0;
		transform: scaleY(0);
	}

	&.alert.closed.gone {
		display: none;
	}

	&.alert button {
		border: 0;
		padding: 8px;
		height: auto;
	}

	&.alert.warning {
		background: var(--aviso);
		color: var(--preto);
	}
	&.alert.right {
		background: var(--acerto);
	}
	&.alert.wrong {
		background: var(--erro);
	}
	&.alert.prime {
		background: var(--preto);
	}

	&.alert button {
		color: transparent;
		background-color: transparent;
		cursor: pointer;
	}

	&.alert button svg {
		width: 100%;
		height: 100%;
		max-height: 24px;
		max-width: 24px;
		padding: 0;
		margin: 0;
	}

	&.alert.prime button svg g path,
	&.alert.right button svg g path,
	&.alert.wrong button svg g path {
		fill: var(--branco);
	}
`;

/**
 * @param {Props} props
 */
const Alert: React.FC<AlertProps> = ({
	children,
	style,
	title,
	message,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos estilos disponíveis para a Alert. Se não, define o estilo como 'prime' */
	const checkAlertStyle = STYLES.includes(style) ? style : STYLES[0];

	/**Icone de fechar */
	function CloseIcon() {
		return (
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
	}

	const [opened, setOpened] = useState(true);
	const [gone, setGone] = useState(false);

	return (
		<StyledDiv
			className={`
				alert
				${checkAlertStyle}
				${opened ? null : 'closed'}
				${gone ? 'gone' : null}
				${className}
    `}
			{...rest}
		>
			<div>
				<span>
					<b>{title}</b> {message}
				</span>
				{children}
			</div>

			<button
				onClick={() => {
					setOpened(false);
					setTimeout(() => {
						setGone(true);
					}, 100);
				}}
			>
				<CloseIcon />
			</button>
		</StyledDiv>
	);
};

export default Alert;
