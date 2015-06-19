using CityChallenge.App_Data;
using CityChallenge.Models;
using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using CityChallenge.Common;


namespace CityChallenge.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetDetailsForMarkers()
        {
            RouteModels model = new RouteModels();

            model.PointsDB = GetCollectionOfPoints();
            return new JsonResult() { Data = new ResultType<List<Point>>(model.PointsDB), JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

        private List<Point> GetCollectionOfPoints()
        {
            Point points = new Point();
            ExampleRoutesEntities db = new ExampleRoutesEntities();

            var empQuery = from emp in db.Points
                           select emp;
            List<Point> empList = empQuery.ToList();
            return empList;
        }
    }
}
