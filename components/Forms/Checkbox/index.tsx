import styles from './Checkbox.module.css';

/**
 * Checkbox
 *
 * @component
 * @example
 * return(
 * 	<Checkbox id={1} name='rg-1' checked={true}>Input type checkbox</Checkbox>
 * )
 */

interface CheckboxProps {
	/**
	 * ID do input
	 * @type {string}
	 */
	id?: string;
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
	 * Ref para useRef
	 * @type {any}
	 */
	ref?: any;
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
	 * Se o input é obrigatório. Valor default é {false}
	 * @type {boolean}
	 */
	required?: boolean;
	/**
	 * tabindex do input
	 * @type {number}
	 */
	tabIndex?: number;
	/**
	 * name do input
	 * @type {string}
	 */
	name?: string;
	/**
	 * className do componente
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

const Checkbox: React.FC<CheckboxProps> = ({
	children,
	id,
	value,
	defaultValue,
	ref,
	disabled,
	checked,
	defaultChecked,
	tabIndex,
	required,
	name,
	className,
	onChange,
	onClick,
	...rest
}) => {
	return (
		<div className={`${styles.checkbox} ${className}`}>
			<input
				type='checkbox'
				id={id}
				name={name}
				value={value}
				defaultValue={defaultValue}
				tabIndex={tabIndex}
				disabled={disabled}
				required={required}
				ref={ref}
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={onChange}
				onClick={onClick}
				{...rest}
			/>
			<label htmlFor={id}>{children}</label>
			<div className={styles.checkbox_check}></div>
		</div>
	);
};

export default Checkbox;
