function Contact() {

function emailValidationHandler(event){
  let email = event.target.value
  const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  if (validEmailRegex.test(email) ){
    console.log('email validated')
  }
  else{
    console.log('email incorect')
  }
 
}
function nameValidationHandler(event){
  let name = event.target.value
 
  if (name){
    console.log('validated')
  }
  else{
    console.log('Please enter name')
  }
 
 
}

function messageValidationHandler(event){
  let message =event.target.value
 
  if (message){
    console.log('validated')
  }
  else{
    console.log('Please enter message')
  }
}




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
          onBlur={nameValidationHandler}
        ></input>
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Email
        </label>
        <input
          type="email"
          onBlur={emailValidationHandler}
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
           onBlur={messageValidationHandler}
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
