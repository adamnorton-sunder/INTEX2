import { Link, useLocation, useNavigate } from "react-router-dom";
import './AddBurial.css';
import { BurialRecord } from "../../BurialRecord.interface";
import { useState } from "react";
import styles from '../Unsupervised/Unsupervised.module.css';

function AddBurial() {
    const location = useLocation();
    const navigate = useNavigate();
    const recordToEdit = location.state?.recordToEdit;
    const editMode: boolean = !!location.state?.recordToEdit;

    const [recordToAdd, setRecordToAdd] = useState(recordToEdit || {
        id: 0,
        squarenorthsouth: 0,
        headdirection: "",
        sex: "male",
        northsouth: 0,
        depth: 0,
        eastwest: 0,
        adultsubadult: "",
        facebundles: false,
        southtohead: 0,
        preservation: 0,
        fieldbookpage: 0,
        squareeastwest: 0,
        goods: "",
        text: "",
        wrapping: "",
        haircolor: "",
        westtohead: 0,
        samplescollected: "",
        area: "",
        burialid: 0,
        length: 0,
        burialnumber: 0,
        dataexpertinitials: "",
        westtofeet: 0,
        ageatdeath: "",
        southtofeet: 0,
        excavationrecorder: "",
        photos: false,
        hair: "",
        burialmaterials: "",
        dateofexcavation: "",
        fieldbookexcavationyear: 0,
        clusternumber: 0,
        shaftnumber: 0
    });

    const [showAdvancedFields, setShowAdvancedFields] = useState(false);

    const fields = ['depth',
        'adultsubadult', 'southtohead',
        'fieldbookpage', 'goods', 'text', 'wrapping',
        'westtohead', 'samplescollected', 'area', 'length', 'burialnumber',
        'dataexpertinitials', 'westtofeet', 'southtofeet', 'excavationrecorder',
        'burialmaterials', 'dateofexcavation', 'fieldbookexcavationyear',
        'clusternumber', 'shaftnumber']

    const handleToggleAdvancedFields = () => {
        setShowAdvancedFields(!showAdvancedFields);
    };

    const addNewRecord = async (data: any) => {
        const res = await fetch('https://intexii-group1-4.us-east-1.elasticbeanstalk.com/egypt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const response = await res.json();
        console.log('POST request response:', response);
    };

    const editRecord = async (recordId: string, updatedData: any) => {
        const res = await fetch(`https://intexii-group1-4.us-east-1.elasticbeanstalk.com/egypt/${recordId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        const response = await res.json();
        console.log('PUT request response:', response);
    };

    const deleteRecord = async (recordId: string) => {
        const res = await fetch(`https://intexii-group1-4.us-east-1.elasticbeanstalk.com/egypt/${recordId}`, {
          method: 'DELETE',
        });
        const response = await res.json();
        console.log('DELETE request response:', response);
    };

    const handleSaveRecord = () => {
        if (editMode) {
            editRecord(recordToAdd.id, recordToAdd);
        }
        if (!editMode) {
            addNewRecord(recordToAdd);
        }

        console.log(recordToAdd);
        // navigate('/summary')
    };

    const handleDeleteRecord = () => {
        console.log(recordToAdd);
        deleteRecord(recordToAdd.id);
    };

    return (
        <section style={{ width: '1400px', textAlign: 'left', justifyContent: 'start', paddingTop: '50px', paddingBottom: '150px' }}>
            <Link to='/summary'>
                <button className="optionButton">
                    <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>BACK</h3>
                </button>
            </Link>
            {editMode &&
                <div style={{ padding: '40px 0 0' }}>
                    <h1 style={{ letterSpacing: '5px', margin: '0px' }}>EDIT BURIAL</h1>
                </div>
            }
            {!editMode &&
                <div style={{ padding: '40px 0 0' }}>
                    <h1 style={{ letterSpacing: '5px', margin: '0px' }}>ADD BURIAL</h1>
                </div>
            }

            <div style={{ padding: '0px 0px 40px' }}>
                <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>ID: {recordToAdd.id}</h3>
            </div>

            <div style={{ display: 'grid', placeItems: 'start', marginBottom: '25px' }}>
                <div className={styles.rect}>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '200px 140px 200px 140px 200px 140px 200px 190px' }}>
                <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>ID: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>BURIAL ID: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>BURIAL NUMBER: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SQUARE NORTH SOUTH: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>NORTH SOUTH: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SQUARE EAST WEST: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>EAST WEST: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>AREA: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>CLUSTER NUMBER: </p>
                </div>
                <div>
                    <input style={{ fontWeight: '700' }} value={recordToAdd.id} onChange={(event) => setRecordToAdd({ ...recordToAdd, id: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.burialid} onChange={(event) => setRecordToAdd({ ...recordToAdd, burialid: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.burialnumber} onChange={(event) => setRecordToAdd({ ...recordToAdd, burialnumber: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.squarenorthsouth} onChange={(event) => setRecordToAdd({ ...recordToAdd, squarenorthsouth: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.northsouth} onChange={(event) => setRecordToAdd({ ...recordToAdd, northsouth: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.squareeastwest} onChange={(event) => setRecordToAdd({ ...recordToAdd, squareeastwest: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.eastwest} onChange={(event) => setRecordToAdd({ ...recordToAdd, eastwest: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.area} onChange={(event) => setRecordToAdd({ ...recordToAdd, area: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.clusternumber} onChange={(event) => setRecordToAdd({ ...recordToAdd, clusternumber: +event.target.value })} />
                </div>

                <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SEX: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>ADULT SUB ADULT: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>AGE AT DEATH: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>HAIR: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>HAIR COLOR: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>FACE BUNDLES: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>PRESERVATION: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>WRAPPING: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>BURIAL MATERIALS: </p>
                </div>
                <div>
                    <input style={{ fontWeight: '700' }} value={recordToAdd.sex} onChange={(event) => setRecordToAdd({ ...recordToAdd, sex: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.adultsubadult} onChange={(event) => setRecordToAdd({ ...recordToAdd, adultsubadult: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.ageatdeath} onChange={(event) => setRecordToAdd({ ...recordToAdd, ageatdeath: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.hair} onChange={(event) => setRecordToAdd({ ...recordToAdd, hair: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.haircolor} onChange={(event) => setRecordToAdd({ ...recordToAdd, haircolor: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.facebundles} onChange={(event) => setRecordToAdd({ ...recordToAdd, facebundles: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.preservation} onChange={(event) => setRecordToAdd({ ...recordToAdd, preservation: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.wrapping} onChange={(event) => setRecordToAdd({ ...recordToAdd, wrapping: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.burialmaterials} onChange={(event) => setRecordToAdd({ ...recordToAdd, burialmaterials: event.target.value })} />
                </div>

                <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>DEPTH: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>LENGTH: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>HEAD DIRECTION: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SOUTH TO HEAD: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SOUTH TO FEET: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>WEST TO HEAD: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>WEST TO FEET: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>FIELD BOOK PAGE: </p>
                </div>
                <div>
                    <input style={{ fontWeight: '700' }} value={recordToAdd.depth} onChange={(event) => setRecordToAdd({ ...recordToAdd, depth: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.length} onChange={(event) => setRecordToAdd({ ...recordToAdd, length: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.headdirection} onChange={(event) => setRecordToAdd({ ...recordToAdd, headdirection: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.southtohead} onChange={(event) => setRecordToAdd({ ...recordToAdd, southtohead: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.southtofeet} onChange={(event) => setRecordToAdd({ ...recordToAdd, southtofeet: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.westtohead} onChange={(event) => setRecordToAdd({ ...recordToAdd, westtohead: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.westtofeet} onChange={(event) => setRecordToAdd({ ...recordToAdd, westtofeet: +event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.fieldbookpage} onChange={(event) => setRecordToAdd({ ...recordToAdd, fieldbookpage: +event.target.value })} />
                </div>

                <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>GOODS: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>EXCAVATION RECORDER: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SAMPLES COLLECTED: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>DATA EXPERT INITIALS: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SHAFT NUMBER: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>FIELD BOOK EXC. YEAR: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>PHOTOS: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>DATE OF EXCAVATION: </p>
                </div>
                <div>
                    <input style={{ fontWeight: '700' }} value={recordToAdd.goods} onChange={(event) => setRecordToAdd({ ...recordToAdd, goods: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.excavationrecorder} onChange={(event) => setRecordToAdd({ ...recordToAdd, excavationrecorder: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.samplescollected} onChange={(event) => setRecordToAdd({ ...recordToAdd, samplescollected: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.dataexpertinitials} onChange={(event) => setRecordToAdd({ ...recordToAdd, dataexpertinitials: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.shaftnumber} onChange={(event) => setRecordToAdd({ ...recordToAdd, shaftnumber: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.fieldbookexcavationyear} onChange={(event) => setRecordToAdd({ ...recordToAdd, fieldbookexcavationyear: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.photos} onChange={(event) => setRecordToAdd({ ...recordToAdd, photos: event.target.value })} />
                    <input style={{ fontWeight: '700' }} value={recordToAdd.dateofexcavation} onChange={(event) => setRecordToAdd({ ...recordToAdd, dateofexcavation: event.target.value })} />
                </div>
            </div>

            <div style={{ marginTop: '40px' }}>
                <div>
                    <p>TEXT: </p>
                    <input style={{ fontWeight: '700', minWidth: '500px' }} value={recordToAdd.text} onChange={(event) => setRecordToAdd({ ...recordToAdd, text: event.target.value })} />
                </div>
                <div>
                    <p>TEXTILE DESCRIPTION: </p>
                    <input style={{ fontWeight: '700', minWidth: '500px' }} value={recordToAdd.description} onChange={(event) => setRecordToAdd({ ...recordToAdd, description: event.target.value })} />
                </div>
            </div>

            <button className="saveButton" onClick={handleSaveRecord} style={{ marginTop: '30px', marginRight: '20px' }}>
                <h3 style={{ margin: '0px', fontSize: '14px', color: '#ef9e12' }}>Save Record</h3>
            </button>

            <button className="delButton" onClick={handleDeleteRecord} style={{ marginTop: '30px' }}>
                <h3 style={{ margin: '0px', fontSize: '14px', color: '#ffffff' }}>Delete Record</h3>
            </button>

        </section>
    )
}

export default AddBurial;