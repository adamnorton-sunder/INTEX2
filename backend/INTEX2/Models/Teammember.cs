using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace INTEX2.Models
{
    public partial class Teammember
    {
        [Key]
        public long Id { get; set; }
        public string? Bio { get; set; }
        public string? Membername { get; set; }
    }
}
