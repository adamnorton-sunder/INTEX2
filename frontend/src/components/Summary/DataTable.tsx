import React, { useState, useEffect } from 'react';
import styles from './DataTable.module.css';
import { useNavigate } from 'react-router-dom';
import { BurialTextileRecord } from '../../BurialTextileRecord.interface';

interface DataTableProps {
  data: Array<{
    id: number;
    squarenorthsouth: string;
    headdirection: string;
    sex: string;
    northsouth: number;
    depth: number;
    eastwest: number;
    adultsubadult: string;
    facebundles: string;
    southtohead: number;
    preservation: string;
    fieldbookpage: number;
    squareeastwest: string;
    goods: string;
    text: string;
    wrapping: string;
    haircolor: string;
    westtohead: number;
    samplescollected: string;
    area: string;
    burialid: string;
    length: number;
    burialnumber: number;
    dataexpertinitials: string;
    westtofeet: number;
    ageatdeath: string;
    southtofeet: number;
    excavationrecorder: string;
    photos: string;
    hair: string;
    burialmaterials: string;
    dateofexcavation: string;
    fieldbookexcavationyear: number;
    clusternumber: number;
    shaftnumber: number;

    colorid?: number;
    description?: string;
    estimatedperiod?: string;
    locale?: string;
    photographeddate?: string;
    sampledate?: string;
    textileid?: number;
    value?: number;
  }>;
  columnsToInclude: string[];
  itemsPerPage: number;
  appliedFilters: string[];
}

const DataTable: React.FC<DataTableProps> = (props) => {
  const { data, columnsToInclude, itemsPerPage, appliedFilters } = props;

  // State
  const [paginatedData, setPaginatedData] = useState<BurialTextileRecord[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<BurialTextileRecord[]>(data);
  // const [totalPages, setTotalPages] = useState(Math.ceil(data.length / itemsPerPage));

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Effects
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // useEffect(() => {
  //   let newTotalPages = Math.ceil(paginatedData.length / itemsPerPage);
  //   setTotalPages(newTotalPages);
  // }, paginatedData);

  // Functions
  const getFilteredData = () => {
    console.log(appliedFilters);
  
    let newFilteredData = data;

    newFilteredData = data.filter(record => {
      let includeRecord = true;
  
      if (appliedFilters.includes("Female")) {
        includeRecord = includeRecord && record.sex === 'F';
      }
  
      if (appliedFilters.includes("Male")) {
        includeRecord = includeRecord && record.sex === 'M';
      }

      if (appliedFilters.includes("East Head Direction")) {
        includeRecord = includeRecord && record.headdirection === 'E';
      }
  
      if (appliedFilters.includes("West Head Direction")) {
        includeRecord = includeRecord && record.headdirection === 'W';
      }

      if (appliedFilters.includes("Black Hair")) {
        includeRecord = includeRecord && record.haircolor === 'K';
      }
  
      if (appliedFilters.includes("Brown Hair")) {
        includeRecord = includeRecord && record.haircolor === 'B';
      }

      if (appliedFilters.includes("Blond Hair")) {
        includeRecord = includeRecord && record.haircolor === 'D';
      }
  
      if (appliedFilters.includes("Red Hair")) {
        includeRecord = includeRecord && record.haircolor === 'R';
      }

      if (appliedFilters.includes("Unknown Hair Color")) {
        includeRecord = includeRecord && record.haircolor === 'U';
      }

      if (appliedFilters.includes("Newborn")) {
        includeRecord = includeRecord && record.ageatdeath === 'N';
      }

      if (appliedFilters.includes("Infant")) {
        includeRecord = includeRecord && record.ageatdeath === 'I';
      }
  
      if (appliedFilters.includes("Child")) {
        includeRecord = includeRecord && record.ageatdeath === 'C';
      }

      if (appliedFilters.includes("Adult")) {
        includeRecord = includeRecord && record.ageatdeath === 'A';
      }

      if (appliedFilters.includes("0 - 1 Meters")) {
        includeRecord = includeRecord && record.depth <= 1.0;
      }

      if (appliedFilters.includes("1 - 2 Meters")) {
        includeRecord = includeRecord && record.depth > 1.0 && record.depth <= 2.0;
      }

      if (appliedFilters.includes("2 - 3 Meters")) {
        includeRecord = includeRecord && record.depth > 2.0 && record.depth <= 3.0;
      }

      if (appliedFilters.includes("3 - 4 Meters")) {
        includeRecord = includeRecord && record.depth > 3.0 && record.depth <= 4.0;
      }

      if (appliedFilters.includes("Presence of Face Bundle")) {
        includeRecord = includeRecord && record.facebundles === 'Y';
      }

      if (appliedFilters.includes("0 - 0.5 Meters")) {
        includeRecord = includeRecord && record.length <= 0.5;
      }

      if (appliedFilters.includes("0.5 - 1.0 Meters")) {
        includeRecord = includeRecord && record.length > 0.5 && record.length <= 1.0;
      }

      if (appliedFilters.includes("1.0 - 1.5 Meters")) {
        includeRecord = includeRecord && record.length > 1.0 && record.length <= 1.5;
      }

      if (appliedFilters.includes("1.5 - 2.0 Meters")) {
        includeRecord = includeRecord && record.length > 1.5 && record.length <= 2.0;
      }

      if (appliedFilters.includes("Colored Textile")) {
        includeRecord = includeRecord && !!record.value;
      }
  
      // Add more filter conditions here
  
      return includeRecord;
    });

    console.log(newFilteredData);
    setFilteredData(newFilteredData);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };


  // Effects
  useEffect(() => {
    getFilteredData();
  }, [appliedFilters, data]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log("Start Index: ", startIndex, ", End Index: ", endIndex);
    const newPaginatedData = filteredData.slice(startIndex, endIndex);
    console.log(newPaginatedData);
    setPaginatedData(newPaginatedData);
  }, [filteredData, currentPage]);

  const navigate = useNavigate();

  const handleEditRecord = (recordToAdd: any) => {
    navigate('/addBurial', { state: { recordToAdd } })
  }

  return (
    <section>
      <table style={{ border: '1px solid #4c4c4c', borderRadius: '20px', padding: '20px', borderCollapse: 'collapse', backgroundColor: 'rgb(20,20,20)' }}>
        <thead>
          <tr style={{ border: '1px solid #4c4c4c' }}>
            {columnsToInclude.map((key) => (
              <th key={key} style={{ padding: '0px 10px', border: '1px solid #4c4c4c' }}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, rowIndex) => (
            <tr
              onClick={() => handleEditRecord(item)}
              key={`${item.id}-${rowIndex}`}
              className={styles.dataTableRow}
            >
              {columnsToInclude.map((key, index) => (
                <td key={`${item.id}-${rowIndex}`} className={styles.dataTableCell}>
                  {(item as any)[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            margin: '0px 10px',
            padding: '10px',
            borderRadius: '20px',
            backgroundColor: 'transparent',
            minWidth: '40px',
            minHeight: '40px',
            border: '1px solid rgb(50,50,50)',
          }}
        >
          Previous
        </button>
        <span style={{ padding: '10px', borderRadius: '20px', minWidth: '40px', minHeight: '40px', border: '1px solid rgb(50,50,50)' }}>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            margin: '0px 10px',
            padding: '10px',
            borderRadius: '20px',
            backgroundColor: 'transparent',
            minWidth: '40px',
            minHeight: '40px',
            border: '1px solid rgb(50,50,50)',
          }}
        >
          Next
        </button>
      </div>

    </section>
  );
};

export default DataTable;
