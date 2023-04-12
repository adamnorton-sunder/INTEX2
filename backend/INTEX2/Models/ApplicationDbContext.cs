using Microsoft.EntityFrameworkCore;

namespace INTEX2.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
    
}
