function AddBurial() {

    const fields = ['id', 'squarenorthsouth', 'headdirection', 'sex', 'northsouth', 'depth',
                    'eastwest', 'adultsubadult', 'facebundles', 'southtohead', 'preservation',
                    'fieldbookpage', 'squareeastwest', 'goods', 'text', 'wrapping', 'haircolor',
                    'westtohead', 'samplescollected', 'area', 'burialid', 'length', 'burialnumber',
                    'dataexpertinitials', 'westtofeet', 'ageatdeath', 'southtofeet', 'excavationrecorder',
                    'photos', 'hair','burialmaterials', 'dateofexcavation', 'fieldbookexcavationyear',
                    'clusternumber', 'shaftnumber']

    return (
        <section style={{ maxWidth: '1400px', textAlign: 'left', justifyContent: 'start' }}>
            <div>Add Burial</div>
            <section>
                {fields.map((key) => (
                    <input key={key} placeholder={key} style={{ padding: '0px 10px', border: '1px solid #4c4c4c' }} />
                ))}
            </section>
        </section>
    )
}

export default AddBurial;