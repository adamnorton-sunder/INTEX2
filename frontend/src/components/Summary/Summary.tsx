import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "../../components/Home/Home.css";

function Summary() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <section className="page-container">
      <div style={{ paddingTop: "40px" }}>
        <h1>SUMMARY</h1>
      </div>
      <div
        style={{ display: "grid", placeItems: "center" }}
        className="content-wrap"
      >
        <div style={{ maxWidth: "1100px" }}>
          <p>
            sumenda quo hic consequatur, nesciunt natus optio aliquid enim
            nobis voluptatum doloribus inventore quam quibusdam ad. Commodi!
          </p>
          <p>Is authenticated: {isAuthenticated.toString()}</p>
          {isAuthenticated && <button>Click me</button>}
        </div>
      </div>
      <footer style={{ display: "grid", placeItems: "center" }}>
        <a href="/privacy" className="white-link">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
}

export default Summary;
