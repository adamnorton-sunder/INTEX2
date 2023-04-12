import { useState } from "react";
import "../../components/Home/Home.css";
import FilterButton from "./FilterButton";

function Summary() {

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilters = ['Textile Structure', 'Burial Depth', 'Estimate Stature', 'Burial ID', 'Textile Function', 'Presence of Face Bundle', 'Ribbons'];
  const textileColorFilters = ['Red', 'Blue', 'Black', 'White']
  const ageAtDeathFilters = ['Newborn', 'Infant', 'Child', 'Adult']
  const headDirectionFilters = ['East', 'West']
  const sexFilters = ['Male', 'Female']
  const hairColorFilters = ['Brown', 'Black', 'Other']

  const handleFilterClick = (filterName: string) => {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== filterName));
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  };

  return (
    <section className="page-container">
      <div style={{ display: 'grid', gridTemplateColumns: '25% 1fr', height: '2000px' }}>
        <div style={{ backgroundColor: 'rgb(25, 25, 24)', padding: '20px', paddingLeft: '35px', textAlign: 'left' }}>
          <div>
            <h1>FILTERS</h1>
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
            <h3>Textile Color</h3>
          </div>

          <div>
            {textileColorFilters.map((filter) => (
              <FilterButton
                key={filter}
                name={filter}
                isSelected={selectedFilters.includes(filter)}
                onClick={() => handleFilterClick(filter)}
              />
            ))}
          </div>

          <div>
            <h3>Head Direction</h3>
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
            <h3>Hair Color</h3>
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
            <h3>Gender</h3>
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
            <h3>Age at Death</h3>
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
        </div>
        <div>
          <h1>BODY</h1>
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
