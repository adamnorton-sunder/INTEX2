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

        public IEnumerable<Textile> Get()
        {
            return _context.Textiles
                .ToArray();
        }
    }
}
