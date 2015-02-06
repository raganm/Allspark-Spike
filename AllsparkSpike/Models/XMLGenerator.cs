using System;
using System.IO;
using System.Xml;
using System.Xml.Schema;
using Microsoft.Xml.XMLGen;

namespace AllsparkSpike.Models
{
    public class XMLGenerator
    {

        public string ReadSchemaFromXmlTextReader(string filename)
        {
            var xmlString = new StringWriter();

            if (filename != null)
                using (var stream = new MemoryStream(File.ReadAllBytes(filename)))
                {
                    var schema = XmlSchema.Read(XmlReader.Create(stream), null);
                    var gen = new XmlSampleGenerator(schema, new XmlQualifiedName("rootElement"));
                    //gen.WriteXml(XmlWriter.Create(@"c:\temp\autogen.xml"));
                    gen.WriteXml(XmlWriter.Create(xmlString));
                }
            return xmlString.ToString();
        }
    }

}