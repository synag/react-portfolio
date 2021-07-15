import "../styles/Header.css";
import Navigation from './Navigation';



function Header() {
  return (
    <header className=" navbar-light bg-header">
      <div className="row">
        <div className="navbar-brand col"><h1>Carl Benbow Portfolio</h1></div>
        <div className="col">
              <Navigation/>
        </div>
      </div>
     
    </header>
  );
}

export default Header;
