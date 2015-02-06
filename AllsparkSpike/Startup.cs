using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AllsparkSpike.Startup))]
namespace AllsparkSpike
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
