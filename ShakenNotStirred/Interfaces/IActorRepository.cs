using ShakenNotStirred.Models;
using System.Collections.Generic;

namespace ShakenNotStirred.Repositories
{
    public interface IActorRepository
    {
        void AddActor(Actor actor);
        List<Actor> GetAllActors();
    }
}