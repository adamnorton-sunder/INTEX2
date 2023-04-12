import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="Navbar">
      <Link to="/">
        <div className="NavButton">Logo</div>
      </Link>
      <Link to="/">
        <div className="NavButton btn">Home</div>
      </Link>
      <Link to="/summary">
        <div className="NavButton btn">Summary</div>
      </Link>
      <Link to="/supervised">
        <div className="NavButton btn">Supervised</div>
      </Link>
      <Link to="/unsupervised">
        <div className="NavButton btn">Unsupervised</div>
      </Link>
      <Link to="/privacy">
        <div className="NavButton btn">Privacy</div>
      </Link>
      <Link to="/login">
        <div className="NavButton Login" style={{ color: "white" }}>
          Login
        </div>
      </Link>
    </section>
  );
}

export default Navbar;
