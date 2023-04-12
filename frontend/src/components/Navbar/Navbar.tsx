import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="Navbar">
      <Link to="/">
        <div className="NavButton">Logo</div>
      </Link>
      <Link to="/">
        <div className="NavButton btn">HOME</div>
      </Link>
      <Link to="/summary">
        <div className="NavButton btn">BURIAL DATA</div>
      </Link>
      <Link to="/supervised">
        <div className="NavButton btn">SUPERVISED</div>
      </Link>
      <Link to="/unsupervised">
        <div className="NavButton btn">UNSUPERVISED</div>
      </Link>
      <Link to="/privacy">
        <div className="NavButton btn">PRIVACY</div>
      </Link>
      <Link to="/login">
        <div className="NavButton Login" style={{ color: "white" }}>
          LOGIN
        </div>
      </Link>
    </section>
  );
}

export default Navbar;
