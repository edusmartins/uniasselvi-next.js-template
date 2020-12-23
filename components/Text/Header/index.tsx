import React from 'react';

import styles from './Header.module.css';

/**
 * Switch
 *
 * @component
 * @example
 * return(
 * 	<Header size='h1'>Meu Título</Header>
 * )
 */

interface HeaderProps {
	/**
	 * Tamanho do switch. Se não definido, o default é 'h1'
	 * @type {string}
	 */
	size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
	ref?: any;
}

const Header: React.FC<HeaderProps> = ({
	children,
	size,
	className,
	ref,
	...rest
}) => {
	switch (size) {
		case 'h6':
			return (
				<h6 className={`${styles[`h6`]} ${className}`} {...rest} ref={ref}>
					{children}
				</h6>
			);
		case 'h5':
			return (
				<h5 className={`${styles[`h5`]} ${className}`} {...rest} ref={ref}>
					{children}
				</h5>
			);
		case 'h4':
			return (
				<h4 className={`${styles[`h4`]} ${className}`} {...rest} ref={ref}>
					{children}
				</h4>
			);
		case 'h3':
			return (
				<h3 className={`${styles[`h3`]} ${className}`} {...rest} ref={ref}>
					{children}
				</h3>
			);
		case 'h2':
			return (
				<h2 className={`${styles[`h2`]} ${className}`} {...rest} ref={ref}>
					{children}
				</h2>
			);
		case 'h1':
		default:
			return (
				<h1 className={`${styles[`h1`]} ${className}`} {...rest} ref={ref}>
					{children}
				</h1>
			);
	}
};

export default Header;