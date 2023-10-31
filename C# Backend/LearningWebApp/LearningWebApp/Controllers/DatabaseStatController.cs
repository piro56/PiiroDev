using LearningWebApp.Database;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LearningWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DatabaseStatController : ControllerBase
    {


        [HttpGet()]
        public IEnumerable<string> Get()
        {
            return MongoDBConn.Instance.GetDBNames();
        }

    }
}
