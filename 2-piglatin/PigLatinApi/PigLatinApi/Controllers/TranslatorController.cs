using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PigLatinApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TranslatorController : ControllerBase
    {
        // Hello, world!
        // -> Ellohay, orldway!

        [HttpGet]
        public ActionResult<string> GetTranslation(string english)
        {
            return english;
        }
    }
}
