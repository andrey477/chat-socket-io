import {FC, PropsWithChildren, useMemo} from 'react';

interface Props {
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  type = 'button',
  disabled,
  children,
  className = '',
}) => {

  return (
    <button
      className={`
      w-28 h-11 text-white font-bold rounded transition duration-300 ease-in-out
      bg-blue-600 hover:bg-blue-400 disabled:bg-blue-400 ${className}
      `}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
