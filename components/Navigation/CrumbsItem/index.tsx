import React from 'react';
import Link from 'next/link';

/**
 * CrumbsItem
 *
 * @component
 * @example
 * return(
 * 	<CrumbsItem href='/'>Início</CrumbsItem>
 * )
 */

interface CrumbsItemProps {
	/**
	 * Link do crumb
	 * @type {string}
	 */
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
