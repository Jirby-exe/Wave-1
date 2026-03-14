//Owns form data and validation logic, passes down to children as props
import { useState } from "react";
import type React from "react";
import TextInput from "./TextInput";
import CheckboxFields from "./CheckboxFields";
import SubmitButton from "./SubmitButton";
import type { ContactFormData, FieldName } from "../types";

function ContactForm() {
  //formData state is an object with keys firstName, lastName, email, phone and values of type string
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  //Using Record utility type to create an object with keys of type FieldName and values of type string for error messages
  const [errors, setErrors] = useState<Record<FieldName, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  //returns error string if field is empty or if email field has text and it doesn't include @ symbol
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

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    //Prevent default browser behavior of page refresh
    event.preventDefault();

    //update isSubmitting state to true to disable submit button and change its text to "Submitting..."
    setIsSubmitting(true);

    setErrors(() => {
      const newErrors: Record<FieldName, string> = {
        firstName: validateField("firstName", formData.firstName),
        lastName: validateField("lastName", formData.lastName),
        email: validateField("email", formData.email),
        phone: validateField("phone", formData.phone),
      };
      //after validating all fields and updating errors state, set isSubmitting back to false to re-enable submit button and change its text back to "Submit"
      setIsSubmitting(false);
      return newErrors;
    });
  };

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
