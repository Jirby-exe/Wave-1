//Define 'type'
import type { SubmitButtonProps } from "../types";

function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      aria-label={isSubmitting ? "Submitting..." : "Submit"}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
