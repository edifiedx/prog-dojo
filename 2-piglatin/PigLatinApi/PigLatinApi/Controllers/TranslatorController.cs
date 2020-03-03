using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
            var result = new StringBuilder();
            foreach(string word in english.Split(' '))
            {
                result.Append(TranslateWord(word)).Append(' ');
            }

            return result.ToString();
        }

        private string TranslateWord(string word)
        {
            var vowels = new char[] { 'a', 'e', 'i', 'o', 'u' };
            var firstVowelIndex = word.IndexOfAny(vowels);
            var prefix = word[firstVowelIndex..];
            var root = word[..firstVowelIndex];
            var suffix = firstVowelIndex == 0 ? "way" : "ay"; 

            return $"{prefix}{root}{suffix}";
        }
    }
}
