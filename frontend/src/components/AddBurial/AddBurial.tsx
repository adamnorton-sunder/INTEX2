import { Link } from "react-router-dom";
import './AddBurial.css';
import { BurialRecord } from "../../BurialRecord.interface";
import { useState } from "react";

function AddBurial() {
    const [recordToAdd, setRecordToAdd] = useState({
        id: 0,
        squarenorthsouth: "",
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
        squareeastwest: "",
        goods: "",
        text: "",
        wrapping: "",
        haircolor: "",
        westtohead: 0,
        samplescollected: "",
        area: "",
        burialid: "",
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

    const fields = ['depth',
        'adultsubadult', 'southtohead',
        'fieldbookpage', 'goods', 'text', 'wrapping',
        'westtohead', 'samplescollected', 'area', 'length', 'burialnumber',
        'dataexpertinitials', 'westtofeet', 'southtofeet', 'excavationrecorder',
        'burialmaterials', 'dateofexcavation', 'fieldbookexcavationyear',
        'clusternumber', 'shaftnumber']

    return (
        <section style={{ width: '1400px', textAlign: 'left', justifyContent: 'start', paddingTop: '50px', paddingBottom: '150px' }}>
            <Link to='/summary'>
                <button className="optionButton">
                    <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>BACK</h3>
                </button>
            </Link>
            <button className="optionButton" onClick={() => console.log(recordToAdd)}>
                <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>Test</h3>
            </button>
            <div style={{ padding: '40px 0' }}>
                <h3 style={{ letterSpacing: '5px', margin: '0px' }}>ADD BURIAL</h3>
            </div>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
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
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>East</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>West</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>Square East / West</label>
                        <input placeholder="square east west" style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>NORTH / SOUTH</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>North</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>South</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>Square North / South</label>
                        <input placeholder="square north south" style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>HAIR</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Yes</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>No</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Brown</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Black</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Unknown</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>HEAD DIRECTION</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>East</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>West</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>FACE BUNDLES</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Yes</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>PRESERVATION</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Poor</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Average</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Good</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Excellent</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>PHOTOS</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
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
                        <input placeholder="burial id" style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>Age At Death</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Newborn</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Infant</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Child</h3>
                        </button>
                        <button className="optionButton">
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Adult</h3>
                        </button>
                    </div>
                </div>
            </section>


            <div style={{ padding: '10px' }}>
                <h4 style={{ letterSpacing: '5px', margin: '0px' }}>Additional Fields</h4>
            </div>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', columnGap: '20px', rowGap: '10px' }}>
                {fields.map((key) => (
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>{key}</label>
                        <input key={key} placeholder={key} style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default AddBurial;