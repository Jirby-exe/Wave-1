function CheckboxFields() {
  return (
    <>
      <input
        className="form-check-input"
        type="checkbox"
        id="inlineCheckbox1"
        value="option1"
      ></input>
      <label className="form-check-label" htmlFor="inlineCheckbox1">
        Do you agree to our Terms and Conditions?
      </label>
    </>
  );
}

export default CheckboxFields;
