import { useEffect, useState } from "react";
import "../../components/Home/Home.css";
import FilterButton from "./FilterButton";
import DataTable from "./DataTable";
import data from '../../mock-data.json';
import styles from './Summary.module.css';
import { Link } from "react-router-dom";
import { useUserContext } from "../Login/UserContext";
import { BurialTextileRecord } from "../../BurialTextileRecord.interface";

function Summary() {

  const [burialData, setBurialData] = useState<BurialTextileRecord[]>([]);

  const fetchRecords = async () => {
    const res = await fetch('https://intexii-group1-4.us-east-1.elasticbeanstalk.com/egypt')
    const temp = await res.json();
    console.log('Fetched data:', temp);
    setBurialData(temp);
  }

  useEffect(() => {
    fetchRecords();
  }, []);

  const { user } = useUserContext();

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilters = ['Colored Textile', 'Estimate Stature', 'Burial ID', 'Textile Function', 'Presence of Face Bundle', 'Ribbons'];
  const depthFilters = ['0 - 1 Meters', '1 - 2 Meters', '2 - 3 Meters', '3 - 4 Meters']
  const lengthFilters = ['0 - 0.5 Meters', '0.5 - 1.0 Meters', '1.0 - 1.5 Meters', '1.5 - 2.0 Meters']
  const ageAtDeathFilters = ['Newborn', 'Infant', 'Child', 'Adult']
  const headDirectionFilters = ['East Head Direction', 'West Head Direction']
  const sexFilters = ['Male', 'Female']
  const hairColorFilters = ['Brown Hair', 'Black Hair', 'Red Hair', 'Blond Hair', 'Unknown Hair Color']

  const columnsToInclude = ['id', 'headdirection', 'sex', 'depth', 'facebundles', 'preservation', 'haircolor', 'hair', 'length', 'ageatdeath', 'burialnumber', 'textileid', 'value'];
  const itemsPerPage = 15;

  const handleFilterClick = (filterName: string) => {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== filterName));
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  };

  return (
    <section className="page-container">
      <div style={{ display: 'grid', gridTemplateColumns: '28% 1fr' }}>
        <div style={{ backgroundColor: 'rgb(25, 25, 24)', padding: '50px 27px 180px 35px', textAlign: 'left', height: '100vh', overflowY: 'scroll' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ letterSpacing: '5px', margin: '0px' }}>FILTERS</h3>
          </div>

          <div>
            {toggleFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>DEPTH</h3>
          </div>

          <div>
            {depthFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>HEAD DIRECTION</h3>
          </div>

          <div>
            {headDirectionFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>HAIR COLOR</h3>
          </div>

          <div>
            {hairColorFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>GENDER</h3>
          </div>

          <div>
            {sexFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>AGE AT DEATH</h3>
          </div>

          <div>
            {ageAtDeathFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3 style={{ letterSpacing: '5px' }}>LENGTH</h3>
          </div>

          <div>
            {lengthFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', padding: '50px 100px 30px' }}>
            <h3 style={{ letterSpacing: '5px', margin: '0px' }}>BURIAL DATA</h3>
            <div></div>
            <Link to={user?.isAuthenticated ? "/addBurial" : "/login"}>
              <button className={styles.addButton}>
                <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px' }}>ADD RECORD</h3>
              </button>
            </Link>
          </div>

          <div style={{ display: 'grid', placeItems: 'center' }}>
            <DataTable data={burialData} columnsToInclude={columnsToInclude} itemsPerPage={itemsPerPage} appliedFilters={selectedFilters} />
          </div>
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

export default Summary;
