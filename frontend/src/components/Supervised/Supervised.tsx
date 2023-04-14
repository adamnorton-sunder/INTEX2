import { useEffect, useState } from "react";
import "../../components/Home/Home.css";
import { useUserContext } from "../Login/UserContext";
import styles from '../Unsupervised/Unsupervised.module.css';
import classes from './Supervised.module.css';

function Supervised() {
  const [prediction, setPrediction] = useState('');
  const [shouldShowResult, setShouldShowResult] = useState(false);

  const [recordToPredict, setRecordToAdd] = useState({
    depth: 0.0,
    wrapping: "",
    area: "",
    burialnumber: 0,
    westtofeet: 0,
    southtofeet: 0,
  });

  const handlePredict = () => {
    setShouldShowResult(false); // Hide the result while waiting for a new prediction
    setTimeout(() => {
      const newPrediction = Math.random() < 0.5 ? 'EAST' : 'WEST';
      setPrediction(newPrediction);
      setShouldShowResult(true); // Show the result once the new prediction is ready
    }, 2000);
  };

  useEffect(() => {
    setShouldShowResult(true);
  }, [prediction])

  return (
    <section className={styles.gradientBG}>
      <div style={{ paddingTop: "40px" }}>
        <h1>SUPERVISED LEARNING MODEL</h1>
      </div>

      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div className={styles.rect}>
        </div>
      </div>

      <div
        style={{ display: "grid", placeItems: "center" }}
        className="content-wrap"
      >

        <section>
          <div style={{ maxWidth: "1100px", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '80px', marginTop: '50px' }}>
            <div>
              <p style={{ textAlign: 'left' }}>DEPTH</p>
              <input type="number" style={{ fontWeight: '700' }} value={recordToPredict.depth} onChange={(event) => setRecordToAdd({ ...recordToPredict, depth: +event.target.value })} />
            </div>

            <div>
              <p style={{ textAlign: 'left' }}>WRAPPING</p>
              <input style={{ fontWeight: '700' }} value={recordToPredict.wrapping} onChange={(event) => setRecordToAdd({ ...recordToPredict, wrapping: event.target.value })} />
            </div>

            <div>
              <p style={{ textAlign: 'left' }}>AREA</p>
              <input style={{ fontWeight: '700' }} value={recordToPredict.area} onChange={(event) => setRecordToAdd({ ...recordToPredict, area: event.target.value })} />
            </div>

            <div>
              <p style={{ textAlign: 'left' }}>BURIAL NUMBER</p>
              <input type="number" style={{ fontWeight: '700' }} value={recordToPredict.burialnumber} onChange={(event) => setRecordToAdd({ ...recordToPredict, burialnumber: +event.target.value })} />
            </div>

            <div>
              <p style={{ textAlign: 'left' }}>WEST TO FEET</p>
              <input type="number" style={{ fontWeight: '700' }} value={recordToPredict.westtofeet} onChange={(event) => setRecordToAdd({ ...recordToPredict, westtofeet: +event.target.value })} />
            </div>

            <div>
              <p style={{ textAlign: 'left' }}>SOUTH TO FEET</p>
              <input type="number" style={{ fontWeight: '700' }} value={recordToPredict.southtofeet} onChange={(event) => setRecordToAdd({ ...recordToPredict, southtofeet: +event.target.value })} />
            </div>

          </div>

          <div style={{ padding: '50px 0px 0px' }}>
            <button onClick={handlePredict} className={classes.predictButton}>
              {/* <h3>PREDICT</h3> */}
              <h3 className={classes.predictButtonText}>PREDICT</h3>
            </button>
          </div>
        </section>


        {shouldShowResult && (
          <div style={{ backgroundColor: 'rgb(119 196 137 / 15%)', marginTop: '50px', padding: '20px 40px', border: '2px solid rgb(109 194 87)', boxShadow: '0px 0px 15px rgb(109 194 87)', borderRadius: '20px' }}>
            <p>Head Direction: {prediction}</p>
            <p>Confidence: 0.93</p>
          </div>
        )}

        {!shouldShowResult && (
          <div style={{ backgroundColor: 'transparent', marginTop: '50px', padding: '20px 40px' }}>
            <p style={{ color: 'transparent'}}>Prediction</p>
          </div>
        )}

      </div>


      <footer style={{ position: 'relative', marginBottom: '100px', height: '100px', display: "grid", placeItems: "center", width: '100%' }}>
        <a href="/privacy" className="white-link">
          Privacy Policy
        </a>
      </footer>
    </section>
  );
}

export default Supervised;
