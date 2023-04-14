import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../Unsupervised/Unsupervised.module.css';
import './BurialDetails.css';

function BurialDetails() {
    const location = useLocation();
    const record = location.state?.record;

    const [recordToAdd, setRecordToAdd] = useState(record);

    const navigate = useNavigate();

    const handleEditRecord = (recordToEdit: any) => {
        navigate('/addBurial', { state: { recordToEdit } })
    }

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
                <h1 style={{ letterSpacing: '5px', margin: '0px' }}>BURIAL DETAILS</h1>
            </div>
            <div style={{ padding: '0px 0px 40px' }}>
                <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>ID: {record.id}</h3>
            </div>

            <div style={{ display: 'grid', placeItems: 'start', marginBottom: '25px' }}>
                <div className={styles.rect}>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '200px 140px 200px 140px 200px 140px 200px 200px' }}>
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
                    <p style={{ fontWeight: '700'}}>{record.burialid ? record.burialid : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.burialnumber ? record.burialnumber : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.squarenorthsouth ? record.squarenorthsouth : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.northsouth ? record.northsouth : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.squareeastwest ? record.squareeastwest : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.eastwest ? record.eastwest : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.area ? record.area : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.clusternumber ? record.clusternumber : '-'}</p>
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
                    <p style={{ fontWeight: '700'}}>{record.sex ? record.sex : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.adultsubadult ? record.adultsubadult : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.ageatdeath ? record.ageatdeath : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.hair ? record.hair : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.haircolor ? record.haircolor : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.facebundles ? record.facebundles : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.preservation ? record.preservation : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.wrapping ? record.wrapping : '-'}</p>
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
                    <p style={{ fontWeight: '700'}}>{record.depth ? record.depth : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.length ? record.length : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.headdirection ? record.headdirection : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.southtohead ? record.southtohead : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.southtofeet ? record.southtofeet : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.westtohead ? record.westtohead : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.westtofeet ? record.westtofeet : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.fieldbookpage ? record.fieldbookpage : '-'}</p>
                </div>

                <div>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>GOODS: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>EXCAVATION RECORDER: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>SAMPLES COLLECTED: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>DATA EXPERT INITIALS: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>PHOTOGRAPHED DATE: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>ESTIMATED PERIOD: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>LOCALE: </p>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>VALUE: </p>
                </div>
                <div>
                    <p style={{ fontWeight: '700'}}>{record.goods ? record.goods : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.excavationrecorder ? record.excavationrecorder : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.samplescollected ? record.samplescollected : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.dataexpertinitials ? record.dataexpertinitials : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.photographeddate ? record.photographeddate : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.estimatedperiod ? record.estimatedperiod : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.locale ? record.locale : '-'}</p>
                    <p style={{ fontWeight: '700'}}>{record.value ? record.value : '-'}</p>
                </div>
            </div>

            <div style={{ marginTop: '40px'}}>
                <div>
                    <p>TEXT: </p>
                    <p>{record.text}</p>
                </div>
                <div>
                    <p>TEXTILE DESCRIPTION: </p>
                    <p>{record.description}</p>
                </div>
            </div>

            <button className="saveButton" onClick={() => handleEditRecord(record)} style={{ marginTop: '30px', marginRight: '20px' }}>
                <h3 style={{ margin: '0px', fontSize: '14px', color: '#ef9e12' }}>Edit Record</h3>
            </button>

            <button className="delButton" onClick={handleDeleteRecord} style={{ marginTop: '30px' }}>
                <h3 style={{ margin: '0px', fontSize: '14px', color: '#ffffff' }}>Delete Record</h3>
            </button>

        </section>
    )
}

export default BurialDetails;

