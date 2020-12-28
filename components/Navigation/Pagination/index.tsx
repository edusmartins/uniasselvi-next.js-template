import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Pagination.module.css';

/**
 * @render react
 * @name Pagination
 * @description Navegação de paginação, mostrando quantas páginas há de conteúdo disponível para ser navegado. Esse componente irá checar se há a query **`page`** na URL, e irá gerar o número de páginas disponíveis baseado nessa numeração juntamente com as props **`paginationMin`** e **`paginationMax`**.
 * @component
 * @example
 * <Pagination size='large' paginationMin={1} paginationMax={7}></Pagination>
 *
 * @typedef {Object} Props
 *
 * @property {'small' | 'large'} [size] - Tamanho do componente. O valor default é ''
 * @property {number} [paginationNumber] - Número da página atual. Serve apenas para forçar um número de paginação caso não haja query params de page
 * @property {number} [paginationMin] - Menor número do menu de paginação
 * @property {number} [paginationMax] - Maior número do menu de paginação
 *
 */

/** Array com os tamanhos disponíveis */
const SIZES = ['small', 'large'];

interface PaginationProps {
	size?: 'small' | 'large';
	paginationNumber?: number;
	paginationMin: number;
	paginationMax: number;
	className?: string;
}

/**
 * @param {Props} props
 */
const Pagination: React.FC<PaginationProps> = ({
	children,
	size,
	paginationNumber,
	paginationMin,
	paginationMax,
	className,
	...rest
}) => {
	const errorMessage = 'Erro ao carregar paginação';

	/** Colca o query params 'page' em uma variável chamada page */
	const {
		query: { page },
	} = useRouter();

	/** Checa se há query page, e caso não aja, procura pela variável paginationNumber para forçar uma paginação sem query */
	let currentPage = page ? Number(page) : paginationNumber;

	/** Checa se foi passado algum dos tamanhos disponíveis para o botão. Se não, define o tamanho como '' */
	const checkButtonSize = SIZES.includes(size) ? size : '';

	/** Se o tamanho for 'large', o botão de Página Anterior é definido como texto, se não, será um ícone*/
	const backButton =
		checkButtonSize == 'large' ? (
			<li>
				<Link href={{ query: { page: `${currentPage - 1}` } }}>
					<a className={styles.pagination_button_text}>Anterior</a>
				</Link>
			</li>
		) : (
			<li
				onClick={() => {
					currentPage--;
				}}
			>
				<Link href={{ query: { page: `${currentPage - 1}` } }}>
					<a className={styles.pagination_button_icon}>
						<img src='/img/ico/nav_left.svg' alt='Anterior' />
					</a>
				</Link>
			</li>
		);

	/** Se o tamanho for 'large', o botão de Próxima Página é definido como texto, se não, será um ícone*/
	const forwardButton =
		checkButtonSize == 'large' ? (
			<li>
				<Link href={{ query: { page: `${currentPage + 1}` } }}>
					<a className={styles.pagination_button_text}>Próximo</a>
				</Link>
			</li>
		) : (
			<li>
				<Link href={{ query: { page: `${currentPage + 1}` } }}>
					<a className={styles.pagination_button_icon}>
						<img src='/img/ico/nav_right.svg' alt='Anterior' />
					</a>
				</Link>
			</li>
		);

	/**Gera o número de links baseado nas props paginationMin e paginationMax */
	function pageNumbers() {
		/**Array que receberá os números da paginação */
		let pages = [];
		/** O for Loop só será executado se
		 * o valor de pagitionMin for menor ou igual ao currentPage
		 * e o valor de pagitionMax for igual ou maior que ao currentPage
		 *
		 * O for Loop manterá sua execução até a variável i
		 * chegar ao valor igual ao de paginationMax
		 * ou que seja igual ao valor de currentPage somado com 3
		 */
		if (paginationMin <= currentPage && paginationMax >= currentPage) {
			var i: number;
			// let paginationLink = `${currentLink.searchParams.set('page', (currentPage + 1).toString())}`;
			for (i = paginationMin; i <= paginationMax && i <= currentPage + 3; i++) {
				pages.push(
					<li
						className={`
            ${styles[`${i == currentPage ? 'active' : ''}`]}
						`}
						key={i}
					>
						<Link
							href={{
								query: { page: `${i}` },
							}}
						>
							<a className={styles.pagination_button_number}>{i}</a>
						</Link>
					</li>
				);
			}
		} else {
			pages.push(errorMessage);
		}
		return pages;
	}

	return (
		<nav
			className={`
    ${styles.pagination}
		${styles[`${checkButtonSize}`]}
		${className}
    `}
			{...rest}
		>
			<ul>
				{pageNumbers().includes(errorMessage) ? '' : backButton}
				{pageNumbers()}
				{pageNumbers().includes(errorMessage) ? '' : forwardButton}
				{children}
			</ul>
		</nav>
	);
};

export default Pagination;
