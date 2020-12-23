import styles from './Radio.module.css';

/**
 * Radio
 *
 * @component
 * @example
 * return(
 * 	<Radio id={1} name='rg-1' checked={true}>Input type radio</Radio>
 * )
 */

interface RadioProps {
	/**
	 * ID do input
	 * @type {string}
	 */
	id: string;
	/**
	 * Name do input
	 * @type {string}
	 */
	name?: string;
	/**
	 * Se o input está desabilitado. Valor default é {false}
	 * @type {boolean}
	 */
	disabled?: boolean;
	/**
	 * Se o input está marcado. Valor default é {false}
	 * @type {boolean}
	 */
	checked?: boolean;
	/**
	 * Se o input está inicialmente marcado. Valor default é {false}
	 * @type {boolean}
	 */
	defaultChecked?: boolean;
	/**
	 * Se o input é obrigatório.
	 * @type {boolean}
	 */
	required?: boolean;
	/**
	 * Value do input
	 * @type {string}
	 */
	value?: string;
	/**
	 * Texto pré-definido para o input se o usuário puder mudar esse valor.
	 * @type {string}
	 */
	defaultValue?: string;
	/**
	 * className do input
	 * @type {string}
	 */
	className?: string;
	/**
	 * Função onChange do input
	 * @type {Function}
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Função onClick do input
	 * @type {Function}
	 */
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({
	children,
	id,
	name,
	disabled,
	checked,
	defaultChecked,
	required,
	value,
	defaultValue,
	onChange,
	onClick,
	className,
	...rest
}) => {
	return (
		<div className={`${styles.radio} ${className}`} {...rest}>
			<input
				type='radio'
				name={name}
				id={`${id}`}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				required={required}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onClick={onClick}
			/>
			<label htmlFor={`${id}`}>{children}</label>
			<div className={styles.radio_check}></div>
		</div>
	);
};

export default Radio;
