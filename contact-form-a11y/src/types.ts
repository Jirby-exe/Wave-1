//own shared types for form data and field names
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type TextInputProps = {
  value: string;
  name: FieldName;
  label: string;
  error?: string;
  type?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
};

export type SubmitButtonProps = {
  isSubmitting: boolean;
};

//FieldName must be a firstName/lastName/email/phone
export type FieldName = keyof ContactFormData;
