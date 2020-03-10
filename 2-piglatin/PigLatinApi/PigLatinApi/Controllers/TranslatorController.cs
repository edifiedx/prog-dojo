using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace PigLatinApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TranslatorController : ControllerBase
    {
        // Hello, world!
        // -> Ellohay, orldway!

        [HttpGet]
        public ActionResult<string> GetTranslation(string sentence)
        {
            var sourceWords = sentence.Split(' ');
            var targetWords = sourceWords.Select(w => TranslateWord(w));
            return String.Join(' ', targetWords);
        }
        private string TranslateWord(string word)
        {
            var translated = new PigLatin(word);
            var prefix = translated.GetPrefix();
            var root = translated.GetRoot();
            var suffix = translated.GetSuffix();

            return $"{prefix}{root}{suffix}";
        }
    }

    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> GetTest(string sentence)
        {
            var words = sentence.Split(' ');
            return String.Join(" ", words);
        }
    }
}
