//own shared types for form data and field names
export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type FieldName = keyof ContactFormData;