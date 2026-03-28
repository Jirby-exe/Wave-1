import type { ErrorLinkProps } from "../types";

function ErrorLinks({ errors }: ErrorLinkProps) {
  return (
    <div className="error-summary">
      <h2>Errors:</h2>
      <ul>
        {Object.entries(errors).map(([field, error]) => {
          if (!error) return null;
          return (
            <div id="errorContainer" tabIndex={-1}>
            <li key={field}>
              <a href={`#${field}`}>{error}</a>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ErrorLinks;
