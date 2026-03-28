//Display one text input and report user actions to parent component via props
import type { TextInputProps } from "../types";


function TextInput({
  value,
  name,
  label,
  error,
  type = "text",
  onChange,
  onBlur,
}: TextInputProps) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>

      <input
        className={`form-input ${error ? "form-input-error" : ""}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur(name)}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
      />

      {error && (
        <div id={`${name}-error`} className="field-error">
          {error}
        </div>
      )}
    </div>
  );
}

export default TextInput;
