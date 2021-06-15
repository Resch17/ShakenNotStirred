using ShakenNotStirred.Models;
using System.Collections.Generic;

namespace ShakenNotStirred.Repositories
{
    public interface IMovieRepository
    {
        List<Movie> GetAllMovies();
        void AddMovie(Movie movie);
    }
}