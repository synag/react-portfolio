import "../styles/Header.css";

function Header(props) {
  return (
    <header className=" navbar-light bg-header">
      <div className="row">
        <div className="navbar-brand col">Carl Benbow Portfolio</div>
        <div className="col">
          <div className="row">
            <div className="col">About Me</div>
            <div className="col">Projects</div>
            <div className="col">Contact</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
