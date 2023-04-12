import React, { useState } from 'react';
import styles from './DataTable.module.css';

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
  }>;
  columnsToInclude: string[];
  itemsPerPage: number;
}

const DataTable: React.FC<DataTableProps> = (props) => {
  const { data, columnsToInclude, itemsPerPage } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

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
          {displayedData.map((item) => (
            <tr key={item.id} style={{ border: '1px solid #4c4c4c' }}>
              {columnsToInclude.map((key, index) => (
                <td key={`${item.id}-${index}`} style={{ border: '1px solid #4c4c4c', padding: '8px 0px' }}>{(item as any)[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={`page-${page}`}
            onClick={() => handlePageChange(page)}
            style={{ margin: '0px 10px', padding: '10px', borderRadius: '20px', backgroundColor: page === currentPage ? '#ef9e12' : 'transparent', minWidth: '40px', minHeight: '40px', border: '1px solid rgb(50,50,50)' }}
            >
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DataTable;
