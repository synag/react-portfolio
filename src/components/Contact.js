function Contact() {
  // function removeMessage(){
  //   $(`.messagePlacement`).remove()

  // }
//need another validation
  function emailValidationHandler(event) {
    let email = event.target.value;
    let messagePrint = document.querySelector(".message");
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (validEmailRegex.test(email)) {
      console.log("email validated");
    } else if (messagePrint!=null) {
    
      return;
      
    } else if(email=="null"){
      $(".messagePlacement").append(`<p class="message">Please enter valid email</p>`);
      setTimeout(function(){$(`.message`).remove()},2000)
    }
    else {
     
      $(".messagePlacement").append(`<p class="message">Please enter valid email</p>`);
      setTimeout(function(){$(`.message`).remove()},2000)
    }
  }

 
  // setTimeout($(`.message`).remove(), 5000)

  function nameValidationHandler(event) {
    let name = event.target.value;

    if (name) {
      console.log("validated");
    } else {
      // $(`.message`).remove();
      $(".messagePlacement").append(`<p class="message">Please enter name</p>`);
      setTimeout(function(){$(`.message`).remove()},2000)
    }
  }

  function messageValidationHandler(event) {
    let message = event.target.value;

    if (message) {
      console.log("validated");
    } else {
     
      $(".messagePlacement").append(`<p class="message">Please enter message</p>`);
      setTimeout(function(){$(`.message`).remove()},2000)
    }
  }

  return (
    <main className="container">
      <h1>Contact Me</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Name"
          onBlur={nameValidationHandler}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          onBlur={emailValidationHandler}
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Email"
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          onBlur={messageValidationHandler}
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="messagePlacement"></div>
    </main>
  );
}

export default Contact;
