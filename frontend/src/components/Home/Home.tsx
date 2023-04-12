import "./Home.css";
import CookieConsent from "react-cookie-consent";
import Swiper from "../Swiper/Swiper";

function Home() {
  const items = [
    {
      imageSrc: "/IntexSiteMap.jpg",
      imageAlt: "The Site Map",
    },
    {
      imageSrc: "/IntexMummyGrave.jpg",
      imageAlt: "A few Mummies in Grave",
    },
    {
      imageSrc: "/IntexArtifacts.jpg",
      imageAlt: "Ancient Artifacts",
    },
    {
      imageSrc: "/IntexGroundLayers.jpg",
      imageAlt: "Ground Layer Mummies",
    },
  ];

  return (
    <section className="page-container">
      <div style={{ paddingTop: "40px" }}>
        <h1>HOME</h1>
      </div>
      <div
        style={{ display: "grid", placeItems: "center" }}
        className="content-wrap"
      >
        <div className="container">
          <Swiper items={items} />
        </div>
        <div style={{ maxWidth: "1100px" }}>
          <p>This is the cool homepage.</p>
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={0}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
      </div>
      <footer style={{ display: "grid", placeItems: "center" }}>
        <a href="/privacy" className="white-link">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
}

export default Home;
