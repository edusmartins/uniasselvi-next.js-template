import React from 'react';
import Link from 'next/link';

/**
 * @name CrumbsItem
 *
 * @param {string} props.href - Link do item
 *
 * @component
 * @example
 * return(
 * 	<CrumbsItem href='/'>Início</CrumbsItem>
 * )
 */

interface CrumbsItemProps {
	href: string;
	className?: string;
}

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
