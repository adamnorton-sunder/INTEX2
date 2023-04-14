using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace INTEX2.Models
{
    public partial class Artifactfagelgamousregister
    {
        [Key]
        public long Id { get; set; }
        public string? Registernum { get; set; }
        public string? Photographed { get; set; }
        public string? Notes { get; set; }
        public string? Coordinateset { get; set; }
    }
}
