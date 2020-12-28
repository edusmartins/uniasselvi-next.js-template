import React from 'react';
import Link from 'next/link';

/**
 * @render react
 * @name CrumbsItem
 * @description Navegação em migalhas de pão. Útil para o usuário receber um feedback visual de qual a profundidade que ele está dentro da aplicação. Usar em conjunto com o componente `<CrumbsList>`.
 * @component
 * @example
 * <CrumbsItem href='/'>Início</CrumbsItem>
 *
 * @typedef {Object} Props
 *
 * @property {string} href - Link do item
 *
 */

interface CrumbsItemProps {
	href: string;
	className?: string;
}

/**
 * @param {Props} props
 */
const CrumbsItem: React.FC<CrumbsItemProps> = ({
	children,
	href,
	className,
	...rest
}) => {
	return (
		<li className={className} {...rest}>
			<Link href={href}>
				<a>{children}</a>
			</Link>
		</li>
	);
};

export default CrumbsItem;
