//Owns form data and validation logic, passes down to children as props
import { useState } from "react";
import TextInput from "./TextInput";
import CheckboxFields from "./CheckboxFields";
import SubmitButton from "./SubmitButton";
import type { ContactFormData, FieldName } from "../types";

function ContactForm() {
  //Taking in form data as an object instead of individual pieces of state for each field, and using a single change handler that updates the appropriate field based on the name attribute of the input. 
  //This allows us to easily add more fields in the future without needing to add more state variables or change handlers.
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  //Errors state is also an object with the same keys as formData
  //which allows us to easily show error messages for each field.
  const [errors, setErrors] = useState<Record<FieldName, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  //function that takes in a field name and value and returns an error message if the value is invalid, 
  //or an empty string if it's valid. This allows us to centralize our validation logic and easily reuse it for both onBlur validation and form submission validation.
  function validateField(name: FieldName, value: string) {
  if (!value.trim()) {
    return "This field is required";
  }

  if (name === "email" && !value.includes("@")) {
    return "Please enter a valid email";
  }

  return "";
}

  //Handle changes to inputs and update form data state
  function handleChange(name: FieldName, value: string) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleBlur(name: FieldName) {
    const value = formData[name];

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  }
  
  /*Need to add submit handler that validates all fields and shows errors if any, otherwise submits form data to backend. Also need to add isSubmitting state to disable submit button while request is in flight.*/ 
  return (
    <div>
      <TextInput
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        label="First Name"
        error={errors.firstName}
      />

      <TextInput
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Last Name"
        error={errors.lastName}
      />
      
      <TextInput
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        label="Email"
        error={errors.email}
      />

      <CheckboxFields />
      <SubmitButton isSubmitting={false} />
    </div>
  );
}

export default ContactForm;