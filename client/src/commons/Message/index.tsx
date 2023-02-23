import {FC, PropsWithChildren} from 'react';

interface Props {
	variant?: 'left' | 'right';
}

export const Message: FC<PropsWithChildren<Props>> = ({
	variant = 'right',
	children,
}) => {
	const style = {
		variant: {
			left: 'rounded-bl-none bg-blue-300',
			right: 'rounded-br-none bg-blue-600',
		}
	};

  return (
		<div className="flex items-end">
			<span
				className={`
				px-4 py-2 rounded-lg inline-block text-white
				${style.variant[variant]}
				`}
			>
				{children}
			</span>
		</div>
  );
}
