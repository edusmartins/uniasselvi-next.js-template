import React from 'react';
import styles from './CrumbsList.module.css';

/**
 * @render react
 * @name CrumbsList
 * @description Navegação em migalhas de pão. Útil para o usuário receber um feedback visual de qual a profundidade que ele está dentro da aplicação.
 * @component
 * @example
 * <CrumbsList>
 *    <CrumbsItem href='/'>Início</CrumbsItem>
 *    <CrumbsItem href='/'>Categorias</CrumbsItem>
 *    <CrumbsItem href='/'>Ciências Humanas</CrumbsItem>
 * </CrumbsList>
 *
 */

interface CrumbsListProps {
	className?: string;
}

const CrumbsList: React.FC<CrumbsListProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<nav className={`${styles.crumbsList} ${className}`} {...rest}>
			<ul>{children}</ul>
		</nav>
	);
};

export default CrumbsList;
