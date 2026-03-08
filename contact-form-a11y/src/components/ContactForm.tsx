//File intended to host state and submit logic - "brain" of form
import { useState } from "react";
//import SubmitButton from "./SubmitButton";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export function ContactForms() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(name: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return { formData, handleChange };
}

export default ContactForms;
