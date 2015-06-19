using CityChallenge.App_Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityChallenge.Models
{
    public class RouteModels
    {
        private int routePK;

        public int RoutePK
        {
            get { return routePK; }
            set { routePK = value; }
        }

        public List<PointModels> Points { get; set; }

        public List<Point> PointsDB { get; set; }

    }
}