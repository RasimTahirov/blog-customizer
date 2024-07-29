import { useState } from 'react';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useClickOutside } from './hooks/useClickOutside';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useClickOutside(() => setIsOpen(false));

	const openMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ArrowButton onClick={openMenu} isOpen={isOpen} />
			<aside
				ref={ref}
				className={`${styles.container} ${isOpen && styles.container_open}`}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
