using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AllsparkSpike.Models;
using NUnit.Framework;

namespace TestHarness
{
    [TestFixture]
    public class Class1
    {
        [Test]
        public void GenerateXMLFromXsd()
        {
            var generator = new XMLGenerator();
            //generator.ReadSchemaFromXmlTextReader(@"C:\Dev\CTM.Transformers.Schema\home\v2.0\HomePolicy.xsd");
            generator.ReadSchemaFromXmlTextReader(@"C:\Dev\XSDs\BritishGasRequest.xsd");
        }

    }
}
