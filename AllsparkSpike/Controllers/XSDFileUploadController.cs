using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using System.Xml.Linq;
using AllsparkSpike.Models;

namespace AllsparkSpike.Controllers
{
    public class XsdFileUploadController : Controller
    {
        // GET: XSDFileUpload
        public ActionResult Index()
        {
            return View();
        }

        // This action handles the form POST and the upload
        [HttpPost]
        public ActionResult Index(HttpPostedFileBase file)
        {
            string path = string.Empty;

            // Verify that the user selected a file
            if (file != null && file.ContentLength > 0)
            {
                // extract only the fielname
                var fileName = Path.GetFileName(file.FileName);
                // store the file inside ~/App_Data/uploads folder
                path = Path.Combine(Server.MapPath("~/App_Data/uploads"), fileName);
                file.SaveAs(path);
            }
            // redirect back to the index action to show the form once again
            //return RedirectToAction("PreviewXML", new { path = path });
            return RedirectToAction("PreviewXML");
        }

        public ActionResult PreviewXML()
        {
            var previewXmlViewModel = new PreviewXmlViewModel();
            string xml = string.Empty;

            var di = new DirectoryInfo(Server.MapPath("~/App_Data/uploads"));

            var files = di.GetFiles().OrderByDescending(x => x.LastWriteTime).ToList();

            var path = files[0].FullName;
            if (path != string.Empty)
            {
                var generator = new XMLGenerator();
                xml = generator.ReadSchemaFromXmlTextReader(path);
            }

            var xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(xml);

            previewXmlViewModel.XML = FormatXml(xmlDoc.InnerXml);

            return View(previewXmlViewModel);
        }

        public ActionResult EditXML()
        {
            var previewXMLViewModel = new PreviewXmlViewModel();
            string xml = string.Empty;

            var di = new DirectoryInfo(Server.MapPath("~/App_Data/uploads"));

            var files = di.GetFiles().OrderByDescending(x => x.LastWriteTime).ToList();

            var path = files[0].FullName;
            if (path != string.Empty)
            {
                var generator = new XMLGenerator();
                xml = generator.ReadSchemaFromXmlTextReader(path);

                //load the document from file
                // var doc = XDocument.Load(path); //== path to the file
            }

            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(xml);
            XmlNode rootNode = xmlDoc.DocumentElement;
            TokenizeValues(rootNode);

            previewXMLViewModel.XML = FormatXml(xmlDoc.InnerXml);

            previewXMLViewModel.DivList = FormatDivs(previewXMLViewModel.XML);

            return View(previewXMLViewModel);
        }

        private List<string> FormatDivs(string innerXml)
        {
            var lines = innerXml.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);
            var divs = new List<string>();

            foreach (var line in lines)
            {
                var parts = line.Split(new string[] { "$$TOKEN$$" }, StringSplitOptions.None).ToList();

                if (parts.Count() == 1)
                {
                    var firstElement = string.Format("<div class='openingClass'>{0}</div>", parts[0].Replace("<", "&lt;").Replace(">", "&gt;"));

                    divs.Add(string.Concat("<div class='line'>", firstElement, "</div>"));
                }

                if (parts.Count() == 2)
                {
                    var firstElement = string.Format("<div class='openingClass'>{0}</div>", parts[0].Replace("<", "&lt;").Replace(">", "&gt;"));
                    var middleElement = "<div class='hotspot'>&nbsp;</div>";
                    var secondElement = string.Format("<div class='closingClass'>{0}</div>", parts[1].Replace("<", "&lt;").Replace(">", "&gt;"));

                    divs.Add(string.Concat("<div class='line'>", firstElement, middleElement, secondElement, "</div>"));
                }

                if (parts.Count() == 3)
                {
                    var x = 1;
                }

                divs.Add("<br/>");
            }


            var s = string.Empty;
            foreach (var div in divs)
            {
                s += div;
            }

            return divs;
        }

        private string FormatXml(string xmlString)
        {
            string formattedXml = string.Empty;

            formattedXml = XElement.Parse(xmlString).ToString();

            return formattedXml;
        }



        private static void TokenizeValues(XmlNode node)
        {
            //Print the node type, node name and node value of the node
            if (node.NodeType == XmlNodeType.Text)
            {
                node.Value = "$$TOKEN$$";
            }

            //Print attributes of the node
            if (node.Attributes != null)
            {
                XmlAttributeCollection attrs = node.Attributes;
                foreach (XmlAttribute attr in attrs)
                {
                    attr.Value = "$$ATTRIBUTE$$";
                }
            }

            //Print individual children of the node, gets only direct children of the node
            XmlNodeList children = node.ChildNodes;
            foreach (XmlNode child in children)
            {
                TokenizeValues(child);
            }
        }

        private static void DisplayNodes2(XmlNode node)
        {
            //Print the node type, node name and node value of the node
            if (node.NodeType == XmlNodeType.Text)
            {
                Console.WriteLine("Type = [" + node.NodeType + "] Value = " + node.Value);
            }
            else
            {
                Console.WriteLine("Type = [" + node.NodeType + "] Name = " + node.Name);
            }

            //Print attributes of the node
            if (node.Attributes != null)
            {
                XmlAttributeCollection attrs = node.Attributes;
                foreach (XmlAttribute attr in attrs)
                {
                    Console.WriteLine("Attribute Name = " + attr.Name + "; Attribute Value = " + attr.Value);
                }
            }

            //Print individual children of the node, gets only direct children of the node
            XmlNodeList children = node.ChildNodes;
            foreach (XmlNode child in children)
            {
                DisplayNodes2(child);
            }
        }


        #region old
        private static void DisplayNodes(XmlNode node)
        {
            //Print the node type, node name and node value of the node
            if (node.NodeType == XmlNodeType.Text)
            {
                Console.WriteLine("Type = [" + node.NodeType + "] Value = " + node.Value);

                node.Value = "$$TOKEN$$";
            }
            else
            {
                Console.WriteLine("Type = [" + node.NodeType + "] Name = " + node.Name);
            }

            //Print attributes of the node
            if (node.Attributes != null)
            {
                XmlAttributeCollection attrs = node.Attributes;
                foreach (XmlAttribute attr in attrs)
                {
                    Console.WriteLine("Attribute Name = " + attr.Name + "; Attribute Value = " + attr.Value);
                }
            }

            //Print individual children of the node, gets only direct children of the node
            XmlNodeList children = node.ChildNodes;
            foreach (XmlNode child in children)
            {
                DisplayNodes(child);
            }
        }
        #endregion
    }
}