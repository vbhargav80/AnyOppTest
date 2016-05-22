using System.Web;
using System.Web.Optimization;

namespace Varun.AnyOpp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/vendor-scripts").Include(
                        "~/Scripts/angular.js",
                        "~/Scripts/json3.js",
                        "~/Scripts/angular-resource.js",
                        "~/Scripts/angular-cookies.js",
                        "~/Scripts/angular-sanitize.js",
                        "~/Scripts/lodash.js",
                        "~/Scripts/AngularUI/ui-router.js",
                        "~/Scripts/ng-file-upload.js",
                        "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                        "~/Scripts/angular-simple-logger.js",
                        "~/Scripts/angular-google-maps.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/application-scripts").Include(
                        "~/app/app.js",
                        "~/app/route-config.js",
                        "~/app/Services/AuthenticationService.js",
                        "~/app/Login/LoginController.js",
                        "~/app/Detail/DetailController.js"
                        ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
