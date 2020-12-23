import React from 'react';

import styles from './CrumbsList.module.css';

/**
 * CrumbsList
 *
 * @component
 * @example
 * return(
 * 	<CrumbsList>
 *    <CrumbsItem href='/'>Início</CrumbsItem>
 *    <CrumbsItem href='/'>Categorias</CrumbsItem>
 *    <CrumbsItem href='/'>Ciências Humanas</CrumbsItem>
 * </CrumbsList>
 * )
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
