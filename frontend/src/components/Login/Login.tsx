import "../../components/Home/Home.css";

function Login() {
  return (
    <section>
      <div style={{ paddingTop: "40px" }}>
        <h1>LOGIN</h1>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <div style={{ maxWidth: "1100px" }}>
          <form>
            <label>Username: </label>
            <input style={{ color: "black" }}></input>
            <br></br>
            <label>Password: </label>
            <input type="password" style={{ color: "black" }}></input>
          </form>
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

export default Login;
