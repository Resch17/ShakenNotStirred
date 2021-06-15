using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Models
{
    public class ActorMovie
    {
        public int Id { get; set; }
        public int ActorId { get; set; }
        public int MovieId { get; set; }
        public int RoleId { get; set; }
        public string CharacterFirst { get; set; }
        public string CharacterLast { get; set; }
        public bool IsAlive { get; set; }
    }
}
