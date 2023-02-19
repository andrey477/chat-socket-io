import {FC, PropsWithChildren, useMemo} from 'react';

interface Props {
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  type = 'button',
  disabled,
  children,
}) => {
  const style = useMemo(() => {
    return [
      disabled ? 'disabled:bg-blue-400' : '',
    ].filter(Boolean)
      .join(' ')
      .concat(' ', 'w-28 h-11 bg-blue-600 hover:bg-blue-400 text-white font-bold rounded transition duration-300 ease-in-out');
  }, [disabled]);

  return (
    <button
      className={style}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
