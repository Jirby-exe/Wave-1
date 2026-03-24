//own shared types for form data and field names
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

//Text input props include value, name, label, error message, and onChange and onBlur handlers
export type TextInputProps = {
  value: string;
  name: FieldName;
  label: string;
  error?: string;
  type?: string;
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
};

export type ErrorLinkProps = {
  errors: Record<FieldName, string>;
};

//Submit button props include isSubmitting boolean to disable button and show loading state
export type SubmitButtonProps = {
  isSubmitting: boolean;
};

//FieldName must be a firstName/lastName/email/phone
export type FieldName = keyof ContactFormData;
