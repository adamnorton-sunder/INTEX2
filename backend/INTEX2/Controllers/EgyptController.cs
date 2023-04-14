using INTEX2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Net;

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
        public IActionResult Post([FromBody] Burialmain burialmain)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Burialmains.Add(burialmain);
                    _context.SaveChanges();
                    return CreatedAtAction(nameof(Post), new { id = burialmain.Id }, burialmain);
                }
                catch (DbUpdateException ex)
                {
                    if (ex.InnerException is PostgresException pgEx && pgEx.SqlState == "23505")
                    {
                        // Handle duplicate key error
                        return Conflict();
                    }
                    else
                    {
                        // Rethrow other exceptions
                        throw;
                    }
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateData(long id, [FromBody] Burialmain data)
        {
            var existingData = await _context.Burialmains.FindAsync(id);
            if (existingData == null)
            {
                return NotFound();
            }

            existingData.Squarenorthsouth = data.Squarenorthsouth;
            existingData.Headdirection = data.Headdirection;
            existingData.Sex = data.Sex;
            existingData.Northsouth = data.Northsouth;
            existingData.Depth = data.Depth;
            existingData.Eastwest = data.Eastwest;
            existingData.Adultsubadult = data.Adultsubadult;
            existingData.Facebundles = data.Facebundles;
            existingData.Southtohead = data.Southtohead;
            existingData.Preservation = data.Preservation;
            existingData.Fieldbookpage = data.Fieldbookpage;
            existingData.Squareeastwest = data.Squareeastwest;
            existingData.Goods = data.Goods;
            existingData.Text = data.Text;
            existingData.Wrapping = data.Wrapping;
            existingData.Haircolor = data.Haircolor;
            existingData.Westtohead = data.Westtohead;
            existingData.Samplescollected = data.Samplescollected;
            existingData.Area = data.Area;
            existingData.Burialid = data.Burialid;
            existingData.Length = data.Length;
            existingData.Burialnumber = data.Burialnumber;
            existingData.Dataexpertinitials = data.Dataexpertinitials;
            existingData.Westtofeet = data.Westtofeet;
            existingData.Ageatdeath = data.Ageatdeath;
            existingData.Southtofeet = data.Southtofeet;
            existingData.Excavationrecorder = data.Excavationrecorder;
            existingData.Photos = data.Photos;
            existingData.Hair = data.Hair;
            existingData.Burialmaterials = data.Burialmaterials;
            existingData.Dateofexcavation = data.Dateofexcavation;
            existingData.Fieldbookexcavationyear = data.Fieldbookexcavationyear;
            existingData.Clusternumber = data.Clusternumber;
            existingData.Shaftnumber = data.Shaftnumber;

            await _context.SaveChangesAsync();

            return Ok(existingData);

        }
    }
}