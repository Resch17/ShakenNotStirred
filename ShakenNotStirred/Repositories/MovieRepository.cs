using Dapper;
using Microsoft.Extensions.Configuration;
using ShakenNotStirred.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Repositories
{
    public class MovieRepository : BaseRepository, IMovieRepository
    {
        public MovieRepository(IConfiguration configuration) : base(configuration) { }

        public List<Movie> GetAllMovies()
        {
            string sql = "SELECT * FROM [Movie]";
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Movie>(sql).ToList();
            }
        }

        public void AddMovie(Movie movie)
        {
            var sql = @"INSERT INTO [Movie] ([Year], [Title], [Description], [Director], [Writer])
                        OUTPUT INSERTED.Id
                        VALUES (@Year, @Title, @Description, @Director, @Writer)";
            try
            {
                using (IDbConnection db = new SqlConnection(_connectionString))
                {
                    movie.Id = db.QuerySingle<int>(sql, movie);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
