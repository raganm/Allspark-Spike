using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Allspark.RazorTemplating.Test.Helper;
using NUnit.Framework;
using RazorTemplateingSample.RazorTemplating;

namespace Allspark.RazorTemplating.Test
{
    [TestFixture]
    public class Class1
    {
        [Test]
        public void Test()
        {
            IRazorTemplateGenerator generator = new RazorTemplateGenerator();
            
            var p = new policy
            {
                policyholders = new PolicyHolders
                {
                    primarypolicyholder = new PolicyHolder
                    {
                        firstname = "jane",
                        lastname = "doe"
                    }
                }
            };

            generator.RegisterTemplate<policy>(ResourceHelper.TestView);

            generator.CompileTemplates();

            var output = generator.GenerateOutput(p);

            string byteOrderMarkUtf8 = Encoding.UTF8.GetString(Encoding.UTF8.GetPreamble());

            if (output.StartsWith(byteOrderMarkUtf8))
            {
                output = output.Remove(0, byteOrderMarkUtf8.Length);
            }

            output = output.Replace(Environment.NewLine, string.Empty);

            var xmldoc = XDocument.Parse(output);

            //Console.Out.WriteLine(output2);

            string formattedXml = XElement.Parse(output).ToString();

            Console.WriteLine(formattedXml);

            Console.In.ReadLine();
        }
    }
}
