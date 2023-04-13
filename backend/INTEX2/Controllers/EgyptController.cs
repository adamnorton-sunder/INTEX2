﻿using INTEX2.Models;
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
    }
}