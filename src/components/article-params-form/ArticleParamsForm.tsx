import { useState } from 'react';
import { useClickOutside } from './hooks/useClickOutside';

import { Select } from '../select';
import { Text } from '../text';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	state: ArticleStateType;
};

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	state,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectOption, setSelectOption] = useState({
		fontFamily: state.fontFamilyOption,
		fontSize: state.fontSizeOption,
		fontColor: state.fontColor,
		backgroundColorOption: state.backgroundColor,
		contentWidth: state.contentWidth,
	});
	const ref = useClickOutside(() => setIsOpen(false));

	const openMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectChange = (key: string, selectOptions: OptionType) => {
		setSelectOption((prevState) => ({
			...prevState,
			[key]: selectOptions,
		}));
	};

	return (
		<>
			<ArrowButton onClick={openMenu} isOpen={isOpen} />
			<aside
				ref={ref}
				className={`${styles.container} ${isOpen && styles.container_open}`}>
				<form className={styles.form}>
					<div className={styles.containerOption}>
						<Text size={31} weight={800} uppercase={true}>
							задайте параметры
						</Text>
						<Select
							title='шрифт'
							options={fontFamilyOptions}
							selected={selectOption.fontFamily}
							onChange={(selected) =>
								handleSelectChange('fontFamily', selected)
							}
						/>
						<RadioGroup
							name='размер шрифта'
							title='размер шрифта'
							options={fontSizeOptions}
							selected={selectOption.fontSize}
							onChange={(selected) => handleSelectChange('fontSize', selected)}
						/>
						<Select
							title='цвет шрифта'
							options={fontColors}
							selected={selectOption.fontColor}
							onChange={(selected) => handleSelectChange('fontColor', selected)}
						/>
						<Separator />
						<Select
							title='цвет фона'
							options={backgroundColors}
							selected={selectOption.backgroundColorOption}
							onChange={(selected) =>
								handleSelectChange('backgroundColorOption', selected)
							}
						/>
						<Select
							title='ширина контента'
							options={contentWidthArr}
							selected={selectOption.contentWidth}
							onChange={(selected) =>
								handleSelectChange('contentWidth', selected)
							}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
