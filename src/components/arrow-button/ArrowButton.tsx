import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
export type ArrowButtonProps = {
	isMenuOpen: boolean;
	onClick: OnClick;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
	isMenuOpen,
	onClick,
}) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.container} ${isMenuOpen && styles.container_open}`}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isMenuOpen && styles.arrow_open}`}
			/>
		</div>
	);
};
