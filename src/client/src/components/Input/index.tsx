import {ChangeEventHandler, FC} from 'react';

interface Props {
  id: string;
  name: string;
  label?: string;
  type?: 'text' | 'number';
  placeholder?: string;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
  className?: string;
}

export const Input: FC<Props> = ({
  id,
  label,
  name,
  type = 'text',
  placeholder,
  onChange,
  value,
  disabled,
  className = '',
}) => {
  return (
    <div className="mb-4 flex-auto">
      {label &&
        <label className="block text-grey-darker text-sm font-bold mb-2">
          {label}
        </label>
      }
      <input
        className={`bg-black/25 shadow appearance-none border rounded-lg w-full py-2 px-3 text-white mb-2`}
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
