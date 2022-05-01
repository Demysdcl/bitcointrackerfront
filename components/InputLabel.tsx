import { FC } from 'react'

interface InputLabelProps {
  id: string
  labelText: string
  type?: string
  onChange: (value: string) => void
  value: string | number
}

const InputLabel: FC<InputLabelProps> = ({
  id,
  value,
  labelText,
  type = 'number',
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label
        className="block text-gray-700 dark:text-white text-sm font-bold"
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
      />
    </div>
  )
}

export default InputLabel
