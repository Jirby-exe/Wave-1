//import ListGroup from "./components/ListGroup";
import SubmitButton from "./components/SubmitButton";
import CheckboxFields from "./components/CheckboxFields";
import TextInput from "./components/TextInput";
import ContactForms from "./components/ContactForm";

function App() {
  const { formData, handleChange } = ContactForms();

  return (
    <div>
      <h1> Contact Us </h1>
      <TextInput
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="First Name"
      />
      <TextInput
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Last Name"
      />
      <CheckboxFields />
      <SubmitButton isSubmitting={false} />
    </div>
  );
}
//need to move button state logic from here into ContactForm.tsx

export default App;
