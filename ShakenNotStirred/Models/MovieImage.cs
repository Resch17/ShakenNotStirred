using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Models
{
    public class MovieImage
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int ImageId { get; set; }
        public bool IsPoster { get; set; }
    }
}
