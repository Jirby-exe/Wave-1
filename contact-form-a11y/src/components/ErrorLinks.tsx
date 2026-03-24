import type { ErrorLinkProps } from "../types";

function ErrorLinks({ errors }: ErrorLinkProps) {
  return (
    <div>
      <h2>Errors:</h2>
      <ul>
        {Object.entries(errors).map(([field, error]) => {
          if (!error) return null;
          return (
            <li key={field}>
              <a href={`#${field}`}>{error}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ErrorLinks;
