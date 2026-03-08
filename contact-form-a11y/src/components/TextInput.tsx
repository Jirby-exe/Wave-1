type TextInputProps = {
  value: string;
  name: string;
  label: string;
  onChange: (name: string, value: string) => void;
  //onblur to be added
};
//props type definition

function TextInput({ value, name, label, onChange }: TextInputProps) {
  //Contact us text input group
  //first name, last name, email, phone number
  //dynamic inline error validation to be added
  return (
    <>
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
        ></input>
      </div>
    </>
  );
}
//gonna need to pull phone number out to separate it
export default TextInput;
