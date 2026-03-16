//Owns form data and validation logic, passes down to children as props
import { useState } from "react";
import type React from "react";
import TextInput from "./TextInput";
import CheckboxFields from "./CheckboxFields";
import SubmitButton from "./SubmitButton";
import type { ContactFormData, FieldName } from "../types";

function ContactForm() {
<<<<<<< HEAD
  //Taking in form data as an object instead of individual pieces of state for each field, and using a single change handler that updates the appropriate field based on the name attribute of the input. 
  //This allows us to easily add more fields in the future without needing to add more state variables or change handlers.
=======
  //formData state is an object with keys firstName, lastName, email, phone and values of type string
>>>>>>> ef1f3731140366c27aa216ef942894ad400487e8
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Record<FieldName, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function validateField(name: FieldName, value: string) {
    if (!value.trim()) {
      //return "Error: This field is required";
      const displayName = name;
      //switch case added to include the name of the field in the error message per WCAG guidelines
      switch (displayName) {
        case "firstName":
          return "Error: First Name is required";
        case "lastName":
          return "Error: Last Name is required";
        case "email":
          return "Error: Email is required";
        case "phone":
          return "Error: Phone Number is required";
      }
    }

    if (name === "email" && !value.includes("@")) {
      return "Error: Please enter a valid email";
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
      [name]: validateField(name, value), //if name="email" then this says email: validateField("email", value)
    }));
  }

  return (
    <div>
      <div className="error-container" tabIndex={-1}></div>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          label="First Name"
          error={errors.firstName}
        />

        <TextInput
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Last Name"
          error={errors.lastName}
        />

        <TextInput
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email"
          error={errors.email}
        />

        <TextInput
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Phone"
          error={errors.phone}
        />

        <CheckboxFields />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
}

export default ContactForm;
