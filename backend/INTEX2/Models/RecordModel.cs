namespace INTEX2.Models
{
    public class RecordModel
    {
        // Properties for Burialmain table
        public string? Squarenorthsouth { get; set; }
        public string? Headdirection { get; set; }
        public string? Sex { get; set; }
        public string? Northsouth { get; set; }
        public string? Depth { get; set; }
        public string? Eastwest { get; set; }
        public string? Adultsubadult { get; set; }
        public string? Facebundles { get; set; }
        public string? Southtohead { get; set; }
        public string? Preservation { get; set; }
        public string? Fieldbookpage { get; set; }
        public string? Squareeastwest { get; set; }
        public string? Goods { get; set; }
        public string? Text { get; set; }
        public string? Wrapping { get; set; }
        public string? Haircolor { get; set; }
        public string? Westtohead { get; set; }
        public string? Samplescollected { get; set; }
        public string? Area { get; set; }
        public long Burialid { get; set; }
        public string? Length { get; set; }
        public string? Burialnumber { get; set; }
        public string? Dataexpertinitials { get; set; }
        public string? Westtofeet { get; set; }
        public string? Ageatdeath { get; set; }
        public string? Southtofeet { get; set; }
        public string? Excavationrecorder { get; set; }
        public string? Photos { get; set; }
        public string? Hair { get; set; }
        public string? Burialmaterials { get; set; }
        public DateTime Dateofexcavation { get; set; }
        public string? Fieldbookexcavationyear { get; set; }
        public string? Clusternumber { get; set; }
        public string? Shaftnumber { get; set; }

        // Properties for Textiles table
        public string? Locale { get; set; }
        public int Textileid { get; set; }
        public string? Description { get; set; }
        public string? Estimatedperiod { get; set; }
        public DateTime Sampledate { get; set; }
        public DateTime Photographeddate { get; set; }
        public string? Direction { get; set; }

        // Properties for Colors table
        public string? Value { get; set; }
        public int Colorid { get; set; }

        // Properties for Textilefunctions table
        public string? TextileFunctionValue { get; set; }
        public int Textilefunctionid { get; set; }
    }
}