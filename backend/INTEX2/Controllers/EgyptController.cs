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

        public IEnumerable<object> Get()
        {
            var textiles = _context.Textiles
                .ToArray();

            var result = new List<object>();

            result.AddRange(textiles);

            return result;
        }
    }
}
