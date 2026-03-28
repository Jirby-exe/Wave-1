import ContactForm from "./components/ContactForm";
import "./App.css"

function App() {
  return (
    <div className="app-page">
      <div className="app-card">
        <h1 className="app-title">Contact Us</h1>
        <p className="app-description">Please fill out the form below.</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
