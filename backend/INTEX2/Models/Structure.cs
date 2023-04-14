using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace INTEX2.Models
{
    public partial class Structure
    {
        [Key]
        public long Id { get; set; }
        public string? Value { get; set; }
        public int? Structureid { get; set; }
    }
}
