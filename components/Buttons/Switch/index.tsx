import styles from './Switch.module.css';

/**
 * Switch
 *
 * @component
 * @example
 *
 * Esse componente retorna um input type=checkbox
 *
 * return(
 * 	<Switch checked={true} rounded={true}></Switch>
 * )
 */

/** Array com os tamanhos disponíveis */
const SIZES = ['small', 'large'];

interface SwitchProps {
	/**
	 * Tamanho do switch. Se não definido, o default é ''
	 * @type {string}
	 */
	size?: string;
	/**
	 * Se o switch está desabilitado. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	disabled?: boolean;
	/**
	 * Se o botão está marcado. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	checked?: boolean;
	/**
	 * Se o input está inicialmente marcado. Valor default é {false}
	 * @type {boolean}
	 */
	defaultChecked?: boolean;
	/**
	 * Se o botão tem bordas arredondadas. Se não definido, o default é {false}
	 * @type {boolean}
	 */
	rounded?: boolean;
	/**
	 * valor do input.
	 * @type {string}
	 */
	value?: string;
	/**
	 * Texto pré-definido para o input se o usuário puder mudar esse valor.
	 * @type {string}
	 */
	defaultValue?: string;
	/**
	 * Função onChange do input checkbox dentro do componente
	 * @type {Function}
	 */
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Função onClick do input
	 * @type {Function}
	 */
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
	/**
	 * className do switch.
	 * @type {string}
	 */
	className?: string;
}

const Switch: React.FC<SwitchProps> = ({
	children,
	size,
	disabled,
	checked,
	defaultChecked,
	rounded,
	onChange,
	onClick,
	value,
	defaultValue,
	className,
	...rest
}) => {
	/** Checa se foi passado algum dos tamanhos disponíveis para o botão. Se não, define o tamanho como '' */
	const checkButtonSize = SIZES.includes(size) ? size : '';

	return (
		<div
			className={`
      ${styles.switch}
      ${styles[`${checkButtonSize}`]}
			${styles[`${rounded ? 'rounded' : ''}`]}
			${className}
      `}
		>
			<input
				type='checkbox'
				className={`${styles.checkbox}`}
				disabled={disabled}
				checked={checked}
				defaultChecked={defaultChecked}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				onClick={onClick}
				{...rest}
			></input>
			<div className={`${styles.knobs}`}>
				<span></span>
			</div>
			<div className={`${styles.layer}`}></div>
		</div>
	);
};

export default Switch;
