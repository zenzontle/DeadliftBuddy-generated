using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DeadliftBuddy.Models
{
    public class Routine
    {
        public string Name { get; set; }
        public virtual List<Exercise> Exercises { get; set; }
    }
}