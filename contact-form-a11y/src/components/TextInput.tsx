//Display one text input and report user actions to parent component via props
import type { TextInputProps } from "../types";

function TextInput({
  value,
  name,
  label,
  error,
  onChange,
  onBlur,
}: TextInputProps) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor={name}>
          {label}
        </label>
      </div>

      <input
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
      />

      {error && <div>{error}</div>}
    </div>
  );
}

export default TextInput;
