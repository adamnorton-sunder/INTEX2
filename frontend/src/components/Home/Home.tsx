import "./Home.css";
import CookieConsent from "react-cookie-consent";
import Swiper from "../Swiper/Swiper";
import { Carousel } from "../Carousel/Carousel";
import styles from '../Unsupervised/Unsupervised.module.css';

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
    <section className={styles.gradientBG}>
      <div style={{ paddingTop: "40px" }}>
        <h1>THE MUMMIES OF FAG EL-GAMOUS</h1>
      </div>

      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className={styles.rect}>
        </div>
      </div>

      <div
        style={{ display: "grid", placeItems: "center" }}
        className="content-wrap"
      >
        <div>
          <Carousel />
        </div>

        <div style={{ display: 'grid', placeItems: 'center', margin: '30px' }}>
          <div className={styles.rect}>
          </div>
        </div>

        {/* <div className="container">
          <Swiper items={items} />
        </div> */}
        <div style={{ maxWidth: "1100px" }}>
          <h2>Fag El-Gamous</h2>
          <p>
            For over 25 years, Fag el-Gamous has been under archeological
            investigation. Many insights have been gathered from studying this
            ancient cemetery. Researchers have excavated more than 1,000 mummies
            from this sight and gathered information from location, sex, age,
            hair color, bone dimensions, textiles, wrapping, burial depth,
            physical orientation in ground, and others.
          </p>
          <p>
            This website aims to create an interactive experience for interested
            users to view the data, and see some of the analytics that have been
            run against the data. Researchers are continually adding new data
            from the excavation, so users can visit the page often to view these
            incredible findings. Our Supervised and Unsupervised pages aim to
            predict, explain and visualize the wealth of data recieved, to help
            Researchers gain further insights.
          </p>
          <p>
            Ready to see the data?&nbsp;
            <a href="/summary" className="article-link">
              Click here
            </a>
          </p>

          <br></br>

          <div style={{ display: 'grid', placeItems: 'center', margin: '30px' }}>
            <div className={styles.rect}>
            </div>
          </div>


          <br></br>
          <p>
            Want to learn more about Fag El-Gamous and the academic findings?
            Click the link below to read about the research done on Burial Dates
          </p>
          <p>
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2352409X15000188"
              className="article-link"
            >
              Rethinking burial dates at a Graeco-Roman Cemetery: Fag el-Gamous,
              Fayoum, Egypt
            </a>
            &nbsp;by R. Paul Evans, David M. Whitchurch, Kerry Muhlestein
          </p>
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
          <span style={{ fontSize: "10px" }}></span>
        </CookieConsent>
      </div>
      {/* position: relative;
      margin-bottom: 100px;
      height: 112px;
      display: grid;
      place-items: center;
      width: 100%;
      /* background: white; */}
      <footer style={{ position: 'relative', marginBottom: '100px', height: '100px', display: "grid", placeItems: "center", width: '100%' }}>
        <a href="/privacy" className="white-link">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
}

export default Home;
