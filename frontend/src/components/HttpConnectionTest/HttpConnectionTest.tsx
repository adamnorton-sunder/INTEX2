import { BurialRecord } from "../../BurialRecord.interface";
import { useEffect, useState } from "react";

function HttpConnectionTest() {

    const [burialData, setBurialData] = useState<BurialRecord[]>([]);

    const fetchRecords = async () => {
        const res = await fetch('https://intexii-group1-4.us-east-1.elasticbeanstalk.com/egypt')
        const temp = await res.json();
        console.log('Fetched data:', temp);
        setBurialData(temp);
    }

    useEffect(() => {
        fetchRecords();
    }, []);

    return (
        <section>
            <button style={{ backgroundColor: '#fff', padding: '50px'}} onClick={() => console.log(burialData)}>
                <h3 style={{ color: '#000'}}>Test Data</h3>
            </button>
        </section>
    )
}

export default HttpConnectionTest;