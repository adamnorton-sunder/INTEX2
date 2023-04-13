import { Link, useLocation } from "react-router-dom";
import './AddBurial.css';
import { BurialRecord } from "../../BurialRecord.interface";
import { useState } from "react";

function AddBurial() {
    const location = useLocation();
    const recordToEdit = location.state?.recordToAdd;

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
        // TO-DO: POST or PUT HTTP REQUEST
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
            <div style={{ padding: '40px 0' }}>
                <h3 style={{ letterSpacing: '5px', margin: '0px' }}>ADD BURIAL</h3>
            </div>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', rowGap: '60px' }}>
                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>GENDER</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.sex === 'male' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, sex: 'male' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Male</h3>
                        </button>
                        <button className={recordToAdd.sex === 'female' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, sex: 'female' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Female</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>EAST / WEST</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.eastwest === 0 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, eastwest: 0 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>East</h3>
                        </button>
                        <button className={recordToAdd.eastwest === 1 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, eastwest: 1 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>West</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>Square East / West</label>
                        <input type="number" onChange={(event) => setRecordToAdd({ ...recordToAdd, squareeastwest: +event.target.value})} placeholder="square east west" style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>NORTH / SOUTH</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.northsouth === 0 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, northsouth: 0 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>North</h3>
                        </button>
                        <button className={recordToAdd.northsouth === 5 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, northsouth: 5 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>South</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>Square North / South</label>
                        <input type="number" onChange={(event) => setRecordToAdd({ ...recordToAdd, squarenorthsouth: +event.target.value})} placeholder="square north south" style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>HAIR</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.hair === 'yes' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, hair: 'yes' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Yes</h3>
                        </button>
                        <button className={recordToAdd.hair === 'no' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, hair: 'no' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>No</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.haircolor === 'brown' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, haircolor: 'brown' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Brown</h3>
                        </button>
                        <button className={recordToAdd.haircolor === 'black' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, haircolor: 'black' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Black</h3>
                        </button>
                        <button className={recordToAdd.haircolor === 'unknown' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, haircolor: 'unknown' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Unknown</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>HEAD DIRECTION</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.headdirection === 'E' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, headdirection: 'E' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>East</h3>
                        </button>
                        <button className={recordToAdd.headdirection === 'W' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, headdirection: 'W' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>West</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>FACE BUNDLES</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.facebundles === true ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, facebundles: true })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Yes</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>PRESERVATION</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.preservation === 1 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, preservation: 1 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Poor</h3>
                        </button>
                        <button className={recordToAdd.preservation === 2 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, preservation: 2 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Average</h3>
                        </button>
                        <button className={recordToAdd.preservation === 3 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, preservation: 3 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Good</h3>
                        </button>
                        <button className={recordToAdd.preservation === 4 ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, preservation: 4 })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Excellent</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>PHOTOS</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.photos === true ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, photos: true })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Yes</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>BURIAL ID</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>Burial ID</label>
                        <input type="number" onChange={(event) => setRecordToAdd({ ...recordToAdd, burialid: +event.target.value})} placeholder="burial id" style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>Age At Death</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className={recordToAdd.ageatdeath === 'N' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, ageatdeath: 'N' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Newborn</h3>
                        </button>
                        <button className={recordToAdd.ageatdeath === 'I' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, ageatdeath: 'I' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Infant</h3>
                        </button>
                        <button className={recordToAdd.ageatdeath === 'C' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, ageatdeath: 'C' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Child</h3>
                        </button>
                        <button className={recordToAdd.ageatdeath === 'A' ? "selectedOptionButton" : "optionButton"} onClick={() => setRecordToAdd({ ...recordToAdd, ageatdeath: 'A' })}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Adult</h3>
                        </button>
                    </div>
                </div>
            </section>


            <button className={showAdvancedFields === true ? "selectedOptionButton" : "optionButton"} onClick={handleToggleAdvancedFields} style={{ marginTop: '30px', marginRight: '20px' }}>
                <h3 style={{ margin: '0px', fontSize: '14px' }}>Show Advanced Fields</h3>
            </button>

            {showAdvancedFields && (
                <section>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>Additional Fields</h4>
                    </div>
                    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', columnGap: '20px', rowGap: '10px' }}>
                        {fields.map((key) => (
                            <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                                <label>{key}</label>
                                <input type="number" onChange={(event) => setRecordToAdd({ ...recordToAdd, [key]: +event.target.value})} key={key} placeholder={key} style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                            </div>
                        ))}
                    </section>
                </section>
            )}

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