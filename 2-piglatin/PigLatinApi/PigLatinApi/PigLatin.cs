using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PigLatinApi
{
    public class PigLatin
    {
        public string SourceText;
        public bool StartsWithCapital 
        {
            get
            {
                return char.IsUpper(SourceText[0]);
            }
        }
        public bool EndsWithPunctuation
        {
            get
            {
                return punctuationMarks.Contains(SourceText[^1]);
            }
        }
        public PigLatin(string word)
        {
            SourceText = word;
            firstVowelIndex = word.ToLower().IndexOfAny(vowels);
        }

        public string GetPrefix()
        {
            var prefix = CleanLowerSourceText[firstVowelIndex..];
            return StartsWithCapital ? $"{prefix[0].ToString().ToUpper()}{prefix[1..^1]}" : prefix;
        }

        public string GetRoot()
        {
            return CleanLowerSourceText[..firstVowelIndex];
        }

        public string GetSuffix()
        {
            var suffix = firstVowelIndex == 0 ? "way" : "ay";
            return EndsWithPunctuation ? $"{suffix}{punctuation}" : suffix;
        }

        public string CleanLowerSourceText
        {
            get
            {
                return EndsWithPunctuation ? SourceText[..^1].ToLower() : SourceText.ToLower();
            }
        }
        
        private static char[] vowels = { 'a', 'e', 'i', 'o', 'u', 'y' };
        private static char[] punctuationMarks = { '.', ',', '"', '\'', '-', '?', ':', ';', '!' };
        private int firstVowelIndex;
        //private string prefix;
        //private string suffix;
        //private string root;
        private string punctuation
        {
            get
            {
                return EndsWithPunctuation ? SourceText[^1].ToString() : "";
            }
        }
    }
}
