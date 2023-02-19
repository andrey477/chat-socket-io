import {FC, PropsWithChildren, useMemo} from 'react';

interface Props {
	isMyMessage?: boolean;
}

export const Message: FC<PropsWithChildren<Props>> = ({
	isMyMessage = false,
	children,
}) => {
	const style = useMemo((): string => {
		return [
			isMyMessage ? 'rounded-br-none' : 'rounded-bl-none',
			isMyMessage ? 'bg-blue-600' : 'bg-blue-300'
		].join(' ').concat(' ', 'px-4 py-2 rounded-lg inline-block text-white');
	}, [isMyMessage]);

  return (
		<div className="flex items-end">
			<span className={style}>
				{children}
			</span>
		</div>
  );
}
