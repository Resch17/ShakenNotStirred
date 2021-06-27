using ShakenNotStirred.Models;
using System.Collections.Generic;

namespace ShakenNotStirred.Repositories
{
    public interface IActorMovieRepository
    {
        void AddActorMovie(ActorMovie actorMovie);
        List<ActorMovie> GetAllActorMovies();
        List<ActorMovie> GetByActor(int actorId);
        List<ActorMovie> GetByMovie(int movieId);
    }
}