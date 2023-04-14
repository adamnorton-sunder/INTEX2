import "./Navbar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../Login/UserContext";

function Navbar() {
  const { user } = useUserContext();

  return (
    <section className="Navbar">
      <Link to="/">
        <div className="NavButton">
          <img className="logoImg" src={`${process.env.PUBLIC_URL}/INTEX-Winter-2023-Logo.png`} />
        </div>
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
          { user?.isAuthenticated ? user?.name : "Login" }
        </div>
      </Link>
    </section>
  );
}

export default Navbar;
