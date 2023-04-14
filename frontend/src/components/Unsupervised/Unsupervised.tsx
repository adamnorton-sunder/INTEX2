import "../../components/Home/Home.css";
import styles from './Unsupervised.module.css';

function Unsupervised() {
  return (
    <section className={styles.gradientBG}>
      <div style={{ paddingTop: "40px" }}>
        <h1>UNSUPERVISED LEARNING MODEL</h1>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/ElbowMethod.png`} />
        </div>
        <div style={{ display: 'grid', placeItems: 'center start', textAlign: 'left', padding: '60px 0' }}>
          <h1 style={{ margin: '0px' }}>TAKEAWAY #1</h1>
          <p style={{ fontSize: "17px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere velit, fuga voluptatibus quas nobis aliquam quo sed vero quibusdam veritatis? Nam ipsa consequatur quisquam nobis vero sed minus dolorum quidem?
            Perspiciatis, hic rerum ea ipsum vero iure quisquam necessitatibus obcaecati laudantium expedita voluptas, laborum dolores quas exercitationem minima laboriosam, ex officia sed placeat tempora temporibus. Harum eum quas recusandae doloribus.
            Nisi eum repellendus nihil aspernatur, facilis, fugit hic rem omnis ad at delectus sed perferendis similique voluptatem autem neque alias molestias. Adipisci ea unde voluptatibus voluptates. Maxime perferendis sit placeat.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
      <div style={{ display: 'grid', placeItems: 'center end', textAlign: 'right', padding: '60px 0'  }}>
          <h1 style={{ margin: '0px' }}>TAKEAWAY #2</h1>
          <p style={{ fontSize: "17px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere velit, fuga voluptatibus quas nobis aliquam quo sed vero quibusdam veritatis? Nam ipsa consequatur quisquam nobis vero sed minus dolorum quidem?
            Perspiciatis, hic rerum ea ipsum vero iure quisquam necessitatibus obcaecati laudantium expedita voluptas, laborum dolores quas exercitationem minima laboriosam, ex officia sed placeat tempora temporibus. Harum eum quas recusandae doloribus.
            Nisi eum repellendus nihil aspernatur, facilis, fugit hic rem omnis ad at delectus sed perferendis similique voluptatem autem neque alias molestias. Adipisci ea unde voluptatibus voluptates. Maxime perferendis sit placeat.
          </p>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/Clusters.png`} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/TextileDepth.png`} />
        </div>
        <div style={{ display: 'grid', placeItems: 'center start', textAlign: 'left', padding: '60px 0'   }}>
          <h1 style={{ margin: '0px' }}>TAKEAWAY #3</h1>
          <p style={{ fontSize: "17px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere velit, fuga voluptatibus quas nobis aliquam quo sed vero quibusdam veritatis? Nam ipsa consequatur quisquam nobis vero sed minus dolorum quidem?
            Perspiciatis, hic rerum ea ipsum vero iure quisquam necessitatibus obcaecati laudantium expedita voluptas, laborum dolores quas exercitationem minima laboriosam, ex officia sed placeat tempora temporibus. Harum eum quas recusandae doloribus.
            Nisi eum repellendus nihil aspernatur, facilis, fugit hic rem omnis ad at delectus sed perferendis similique voluptatem autem neque alias molestias. Adipisci ea unde voluptatibus voluptates. Maxime perferendis sit placeat.
          </p>
        </div>
      </div>
      <footer style={{ position: 'relative', marginBottom: '100px', height: '100px', display: "grid", placeItems: "center", width: '100%' }}>
        <a href="/privacy" className="white-link">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
}

export default Unsupervised;
