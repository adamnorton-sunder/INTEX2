import { Link, useLocation, useNavigate } from "react-router-dom";
import './AddBurial.css';
import { BurialRecord } from "../../BurialRecord.interface";
import { useState } from "react";
import styles from '../Unsupervised/Unsupervised.module.css';

function AddBurial() {
    const location = useLocation();
    const navigate = useNavigate();
    const recordToEdit = location.state?.recordToEdit;

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

    const handleSaveRecord = () => {
        console.log(recordToAdd);
        navigate('/summary')
    };

    const handleDeleteRecord = () => {
        console.log(recordToAdd);
        // TO-DO: DELETE HTTP REQUEST
    };

    return (
        <section style={{ width: '1400px', textAlign: 'left', justifyContent: 'start', paddingTop: '50px', paddingBottom: '150px' }}>
            <Link to='/summary'>
                <button className="optionButton">
                    <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>BACK</h3>
                </button>
            </Link>
            <div style={{ padding: '40px 0 0' }}>
                <h1 style={{ letterSpacing: '5px', margin: '0px' }}>EDIT BURIAL</h1>
            </div>
            <div style={{ padding: '0px 0px 40px' }}>
                <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>ID: {recordToAdd.id}</h3>
            </div>

            <div style={{ display: 'grid', placeItems: 'start', marginBottom: '25px' }}>
                <div className={styles.rect}>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '200px 140px 200px 140px 200px 140px 200px 190px' }}>
                <div>
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
                    <input style={{ fontWeight: '700'}} value={recordToAdd.burialid} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.burialnumber} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.squarenorthsouth} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.northsouth} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.squareeastwest} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.eastwest} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.area} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.clusternumber} />
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
                </div>
                <div>
                    <input style={{ fontWeight: '700'}} value={recordToAdd.sex ? recordToAdd.sex : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.adultsubadult ? recordToAdd.adultsubadult : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.ageatdeath ? recordToAdd.ageatdeath : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.hair ? recordToAdd.hair : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.haircolor ? recordToAdd.haircolor : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.facebundles ? recordToAdd.facebundles : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.preservation ? recordToAdd.preservation : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.wrapping ? recordToAdd.wrapping : '-'} />
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
                    <input style={{ fontWeight: '700'}} value={recordToAdd.depth ? recordToAdd.depth : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.length ? recordToAdd.length : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.headdirection ? recordToAdd.headdirection : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.southtohead ? recordToAdd.southtohead : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.southtofeet ? recordToAdd.southtofeet : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.westtohead ? recordToAdd.westtohead : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.westtofeet ? recordToAdd.westtofeet : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.fieldbookpage ? recordToAdd.fieldbookpage : '-'} />
                </div>

                <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>GOODS: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>EXCAVATION RECORDER: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SAMPLES COLLECTED: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>DATA EXPERT INITIALS: </p>
                </div>
                <div>
                    <input style={{ fontWeight: '700'}} value={recordToAdd.goods ? recordToAdd.goods : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.excavationrecorder ? recordToAdd.excavationrecorder : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.samplescollected ? recordToAdd.samplescollected : '-'} />
                    <input style={{ fontWeight: '700'}} value={recordToAdd.dataexpertinitials ? recordToAdd.dataexpertinitials : '-'} />
                </div>
            </div>

            <div style={{ marginTop: '40px'}}>
                <div>
                    <p>TEXT: </p>
                    <p>{recordToAdd.text}</p>
                </div>
                <div>
                    <p>TEXTILE DESCRIPTION: </p>
                    <p>{recordToAdd.description}</p>
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