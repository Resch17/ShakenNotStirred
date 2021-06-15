using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Models
{
    public class ActorMovieImage
    {
        public int Id { get; set; }
        public int ActorMovieId { get; set; }
        public int ImageId { get; set; }
    }
}
