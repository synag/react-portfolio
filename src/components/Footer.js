import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-light text-center text-black">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1 a-facebook"
            href="https://www.facebook.com/synergisticagility"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1 a-linkedin"
            href="https://www.linkedin.com/in/carl-benbow341"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1 a-github"
            href="https://github.com/synag"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3 copyRight">
        © 2020 Copyright: Carl Benbow
      </div>
    </footer>
  );
}

export default Footer;
