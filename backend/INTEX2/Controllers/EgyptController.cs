using INTEX2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace INTEX2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EgyptController : ControllerBase
    {
        private postgresContext _context;

        public EgyptController(postgresContext temp)
        {
            _context = temp;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var records = from burial in _context.Burialmains
                          join burialTextile in _context.BurialmainTextiles
                            on burial.Id equals burialTextile.MainBurialmainid into bt
                          from burialTextile in bt.DefaultIfEmpty()
                          join textile in _context.Textiles
                            on burialTextile.MainTextileid equals textile.Id into t
                          from textile in t.DefaultIfEmpty()
                          join colorTextile in _context.ColorTextiles
                            on textile.Id equals colorTextile.MainTextileid into ct
                          from colorTextile in ct.DefaultIfEmpty()
                          join color in _context.Colors
                            on colorTextile.MainColorid equals color.Id into c
                          from color in c.DefaultIfEmpty()
                          join textileFunctionTextile in _context.TextilefunctionTextiles
                            on textile.Id equals textileFunctionTextile.MainTextileid into tft
                          from textileFunctionTextile in tft.DefaultIfEmpty()
                          join textileFunction in _context.Textilefunctions
                            on textileFunctionTextile.MainTextilefunctionid equals textileFunction.Id into tf
                          from textileFunction in tf.DefaultIfEmpty()
                          select new
                          {
                              burial.Id,
                              burial.Squarenorthsouth,
                              burial.Headdirection,
                              burial.Sex,
                              burial.Northsouth,
                              burial.Depth,
                              burial.Eastwest,
                              burial.Adultsubadult,
                              burial.Facebundles,
                              burial.Southtohead,
                              burial.Preservation,
                              burial.Fieldbookpage,
                              burial.Squareeastwest,
                              burial.Goods,
                              burial.Text,
                              burial.Wrapping,
                              burial.Haircolor,
                              burial.Westtohead,
                              burial.Samplescollected,
                              burial.Area,
                              burial.Burialid,
                              burial.Length,
                              burial.Burialnumber,
                              burial.Dataexpertinitials,
                              burial.Westtofeet,
                              burial.Ageatdeath,
                              burial.Southtofeet,
                              burial.Excavationrecorder,
                              burial.Photos,
                              burial.Hair,
                              burial.Burialmaterials,
                              burial.Dateofexcavation,
                              burial.Fieldbookexcavationyear,
                              burial.Clusternumber,
                              burial.Shaftnumber,
                              textile.Locale,
                              textile.Textileid,
                              textile.Description,
                              textile.Estimatedperiod,
                              textile.Sampledate,
                              textile.Photographeddate,
                              textile.Direction,
                              color.Value,
                              color.Colorid,
                              //textileFunction.Value,
                              //tf.Textilefunctionid
                          };

            return Ok(records);
        }

        [HttpPost]
        public IActionResult Post([FromBody] RecordModel record)
        {
            // Create a new Burialmain object with the appropriate properties
            var burialMain = new Burialmain
            {
                Squarenorthsouth = record.Squarenorthsouth,
                Headdirection = record.Headdirection,
                Sex = record.Sex,
                Northsouth = record.Northsouth,
                Depth = record.Depth,
                Eastwest = record.Eastwest,
                Adultsubadult = record.Adultsubadult,
                Facebundles = record.Facebundles,
                Southtohead = record.Southtohead,
                Preservation = record.Preservation,
                Fieldbookpage = record.Fieldbookpage,
                Squareeastwest = record.Squareeastwest,
                Goods = record.Goods,
                Text = record.Text,
                Wrapping = record.Wrapping,
                Haircolor = record.Haircolor,
                Westtohead = record.Westtohead,
                Samplescollected = record.Samplescollected,
                Area = record.Area,
                Burialid = record.Burialid,
                Length = record.Length,
                Burialnumber = record.Burialnumber,
                Dataexpertinitials = record.Dataexpertinitials,
                Westtofeet = record.Westtofeet,
                Ageatdeath = record.Ageatdeath,
                Southtofeet = record.Southtofeet,
                Excavationrecorder = record.Excavationrecorder,
                Photos = record.Photos,
                Hair = record.Hair,
                Burialmaterials = record.Burialmaterials,
                Dateofexcavation = record.Dateofexcavation,
                Fieldbookexcavationyear = record.Fieldbookexcavationyear,
                Clusternumber = record.Clusternumber,
                Shaftnumber = record.Shaftnumber
            };

            // Add the new Burialmain object to the context
            _context.Burialmains.Add(burialMain);

            // Create a new Textile object with the appropriate properties
            var textile = new Textile
            {
                Locale = record.Locale,
                Textileid = record.Textileid,
                Description = record.Description,
                Estimatedperiod = record.Estimatedperiod,
                Sampledate = record.Sampledate,
                Photographeddate = record.Photographeddate,
                Direction = record.Direction
            };

            // Add the new Textile object to the context
            _context.Textiles.Add(textile);

            // Create a new Color object with the appropriate properties
            var color = new Color
            {
                Value = record.Value
            };

            // Add the new Color object to the context
            _context.Colors.Add(color);

            // Save the changes to the database
            _context.SaveChanges();

            // Return a success response
            return Ok();
        }
    }
}