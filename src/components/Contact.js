function Contact() {
  return (
    <main className="container">
      <h1>Contact Me</h1>
      <div className="mb-3">
        <label  className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Name"
        ></input>
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Email"
        ></input>
    </div>
    <div className="mb-3">
        <label  className="form-label">
          Message
        </label>
        <textarea
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Message"
        ></textarea>
      </div>
    </main>
  );
}

export default Contact;
