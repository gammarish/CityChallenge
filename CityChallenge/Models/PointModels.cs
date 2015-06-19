using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityChallenge.Models
{
    public class PointModels
    {

        private float longitiude;

        public float Longitiude
        {
            get { return longitiude; }
            set { longitiude = value; }
        }


        private float latitiude;

        public float Latitiude
        {
            get { return latitiude; }
            set { latitiude = value; }
        }

        private int routePK;

        public int RoutePK
        {
            get { return routePK; }
            set { routePK = value; }
        }

        private string description;

        public string Description
        {
            get { return description; }
            set { description = value; }
        }
        

    }
}