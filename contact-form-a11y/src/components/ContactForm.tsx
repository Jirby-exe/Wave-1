//Owns form data and validation logic, passes down to children as props
import { useState } from "react";
import TextInput from "./TextInput";
import CheckboxFields from "./CheckboxFields";
import SubmitButton from "./SubmitButton";
import type { ContactFormData, FieldName } from "../types";

function ContactForm() {
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
    return "This field is required";
  }

  if (name === "email" && !value.includes("@")) {
    return "Please enter a valid email";
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
      [name]: validateField(name, value),
    }));
  }

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