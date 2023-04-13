import { Link } from "react-router-dom";

function AddBurial() {

    const fields = ['id', 'squarenorthsouth', 'headdirection', 'sex', 'northsouth', 'depth',
        'eastwest', 'adultsubadult', 'facebundles', 'southtohead', 'preservation',
        'fieldbookpage', 'squareeastwest', 'goods', 'text', 'wrapping', 'haircolor',
        'westtohead', 'samplescollected', 'area', 'burialid', 'length', 'burialnumber',
        'dataexpertinitials', 'westtofeet', 'ageatdeath', 'southtofeet', 'excavationrecorder',
        'photos', 'hair', 'burialmaterials', 'dateofexcavation', 'fieldbookexcavationyear',
        'clusternumber', 'shaftnumber']

    return (
        <section style={{ width: '1100px', textAlign: 'left', justifyContent: 'start', paddingTop: '50px' }}>
            <Link to='/summary'>
                <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                    <h3 style={{ letterSpacing: '5px', margin: '0px', fontSize: '14px', color: '#ef9e12' }}>BACK</h3>
                </button>
            </Link>
            <div style={{ padding: '40px 0' }}>
                <h3 style={{ letterSpacing: '5px', margin: '0px' }}>ADD BURIAL</h3>
            </div>

            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>GENDER</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Male</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Female</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>EAST / WEST</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>East</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>West</h3>
                        </button>
                    </div>
                </div>

                <div>
                    <div style={{ padding: '10px' }}>
                        <h4 style={{ letterSpacing: '5px', margin: '0px' }}>NORTH / SOUTH</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>North</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
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
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Yes</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>No</h3>
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 100px 100px 100px', gap: '20px', marginBottom: '20px' }}>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Brown</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Black</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Red</h3>
                        </button>
                        <button style={{ padding: '8px 25px', backgroundColor: 'transparent', borderRadius: '20px', border: '1px solid rgb(50,50,50)' }}>
                            <h3 style={{ margin: '0px', fontSize: '14px' }}>Unknown</h3>
                        </button>
                    </div>
                </div>
            </section>

            {/* <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', columnGap: '20px', rowGap: '10px' }}>
                {fields.map((key) => (
                    <div style={{ display: 'grid', gridTemplateRows: 'auto auto' }}>
                        <label>{key}</label>
                        <input key={key} placeholder={key} style={{ padding: '16px', border: '1px solid #4c4c4c', backgroundColor: 'transparent', borderRadius: '10px' }} />
                    </div>
                ))}
            </section> */}
        </section>
    )
}

export default AddBurial;