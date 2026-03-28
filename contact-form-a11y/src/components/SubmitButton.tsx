//Define 'type'
import type { SubmitButtonProps } from "../types";


function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <div className="submit-row">
    <button className="submit-button"
      aria-label={isSubmitting ? "Submitting..." : "Submit"}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button></div>
  );
}

export default SubmitButton;
