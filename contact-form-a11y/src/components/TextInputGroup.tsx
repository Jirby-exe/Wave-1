function TextInputGroup() {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="firstName">
            First Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="First Name"
          aria-describedby="firstName"
        ></input>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="lastName">
            Last Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Last Name"
          aria-describedby="firstName"
        ></input>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="Email">
            Email
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Email"
          aria-describedby="Email"
        ></input>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="Phone">
            Phone
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Phone"
          aria-describedby="Phone"
        ></input>
      </div>
    </>
  );
}

export default TextInputGroup;
