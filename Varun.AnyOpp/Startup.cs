using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Varun.AnyOpp.Startup))]
namespace Varun.AnyOpp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
