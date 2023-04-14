import "../../components/Home/Home.css";
import styles from './Unsupervised.module.css';

function Unsupervised() {
  return (
    <section className={styles.gradientBG}>
      <div style={{ paddingTop: "40px" }}>
        <h1>UNSUPERVISED LEARNING MODEL</h1>
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className={styles.rect}>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/ElbowMethod.png`} />
        </div>
        <div style={{ display: 'grid', placeItems: 'center start', textAlign: 'left', padding: '60px 0' }}>
          <h1 style={{ margin: '0px' }}>CLUSTER ALGORITHM</h1>
          <p style={{ fontSize: "17px" }}>Unsupervised clustering algorithms help discover hidden patterns in data without relying on labeled examples. K-Prototypes Means is an algorithm suitable for datasets containing both numeric and categorical data, such as this mummy data with features like depth of the burial, age of the mummy, gender, and the type of textiles they were buried with.
            K-Prototypes Means combines K-Means for numerical data and K-Modes for categorical data, effectively handling mixed data types. To determine the optimal number of clusters, we employed the Elbow Method. It identifies the point where adding more clusters does not significantly improve clustering quality, which is found by plotting within-cluster variation against the number of clusters.
            K-Prototypes Means was an effective clustering choice for mixed data like the mummy data, and the Elbow Method helped us identify three clusters as the ideal number.</p>
        </div>
      </div>

      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className={styles.rect}>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
        <div style={{ display: 'grid', placeItems: 'center end', textAlign: 'right', padding: '60px 0' }}>
          <h1 style={{ margin: '0px' }}>KEY FEATURES</h1>
          <p style={{ fontSize: "17px" }}>With a sparse dataset, it was important to us to prioritize the information of greatest interest. It appeared from discussion with clients that a few of the most important features
            were age at death, textiles, depth, head direction, among a few others. In order to increase model strength, we removed especially sparse or strictly administrative columns. This photo demonstrates what
            our data looked like as we entered the unsupervised model process. Age at death was converted to numbers, where 4 is oldest and 1 is youngest.
          </p>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/Dataframe.png`} />
        </div>
      </div>

      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className={styles.rect}>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/BetterClusters.png`} />
        </div>
        <div style={{ display: 'grid', placeItems: 'center start', textAlign: 'left', padding: '60px 0' }}>
          <h1 style={{ margin: '0px' }}>DEPTH & DIRECTION</h1>
          <p style={{ fontSize: "17px" }}>One fascinating uncovering was that of the connection between head direction, age, and burial depth. Of the mummies that were buried with heads facing west, many at all ages were buried between 0 meters and 3 meters deep.
            This wasn't the case with the burials of individuals facing east. Infants and newborns were rarely buried deeper than 1.5 meters deep. However, of the individuals facing east, most adults were buried between 1 and 2 meters deep, and younger individuals were always buried at least 2 meters deep.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className={styles.rect}>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', padding: "20px 100px" }}>
        <div style={{ display: 'grid', placeItems: 'center end', textAlign: 'right', padding: '60px 0' }}>
          <h1 style={{ margin: '0px' }}>TO-DO</h1>
          <p style={{ fontSize: "17px" }}>While the K-Prototypes Means choice helped us to identify three clusters in the data, further analysis showed few actionable insights from the clusters.
            We took special action to prioritize the head direction, as this has significant meaning in Egpytian culture. The clusters identified children who had been buried at low depths to be of one clusters, with their heads pointing both east and west.
            It also grouped together children and adults alike who had been buried at deeper areas.
          </p>
        </div>
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <img className={styles.mlImg} src={`${process.env.PUBLIC_URL}/SideBySide.png`} />
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
