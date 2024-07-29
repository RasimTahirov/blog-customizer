import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: () => void) => {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		document.addEventListener('mousedown', handleClick);

		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [handler]);
	return ref;
};
