using System.Text;

namespace Allspark.RazorTemplating.Test.Helper
{
    public static class ResourceHelper
    {
        public static string Sample1 = @"
                                        @Model.policyholders.primarypolicyholder.firstname
                                        xxx
                                        ";

        public static string TestView
        {
            get
            {
                var t = Properties.Resources.TestView;

                return Encoding.UTF8.GetString(t);
            }
        }
    }
}
