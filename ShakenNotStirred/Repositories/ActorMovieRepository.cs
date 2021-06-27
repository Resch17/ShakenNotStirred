using Dapper;
using Microsoft.Extensions.Configuration;
using ShakenNotStirred.Models;
using ShakenNotStirred.Utilities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Repositories
{
    public class ActorMovieRepository : BaseRepository, IActorMovieRepository
    {
        public ActorMovieRepository(IConfiguration configuration) : base(configuration) { }

        private string _baseQuery = @"SELECT am.[Id], am.[ActorId], am.[MovieId], am.[RoleId], a.[FirstName], a.[LastName], m.[Year], m.[Title], 
                                r.[Name], am.[CharacterFirst], am.[CharacterLast], am.[IsAlive]
	                        FROM [ActorMovie] am 
	                        LEFT JOIN [Actor] a ON am.[ActorId] = a.[Id]
	                        LEFT JOIN [Movie] m ON am.[MovieId] = m.[Id]
	                        LEFT JOIN [Role] r ON am.[RoleId] = r.[Id]";

        public List<ActorMovie> GetAllActorMovies()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = _baseQuery;
                    var actorMovies = new List<ActorMovie>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var actorMovieId = DbUtils.GetInt(reader, "Id");
                        var existingActorMovie = actorMovies.FirstOrDefault(am => am.Id == actorMovieId);
                        if (existingActorMovie == null)
                        {
                            existingActorMovie = NewActorMovieFromDb(reader);
                            actorMovies.Add(existingActorMovie);
                        }
                    }
                    reader.Close();
                    return actorMovies;
                }
            }
        }

        public List<ActorMovie> GetByMovie(int movieId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = _baseQuery + "WHERE am.[MovieId] = @MovieId";
                    DbUtils.AddParameter(cmd, "@MovieId", movieId);
                    var actorMovies = new List<ActorMovie>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var actorMovieId = DbUtils.GetInt(reader, "Id");
                        var existingActorMovie = actorMovies.FirstOrDefault(am => am.Id == actorMovieId);
                        if (existingActorMovie == null)
                        {
                            existingActorMovie = NewActorMovieFromDb(reader);
                            actorMovies.Add(existingActorMovie);
                        }
                    }
                    reader.Close();
                    return actorMovies;
                }
            }
        } 

        public List<ActorMovie> GetByActor(int actorId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = _baseQuery + "WHERE am.[ActorId] = @ActorId";
                    DbUtils.AddParameter(cmd, "@ActorId", actorId);
                    var actorMovies = new List<ActorMovie>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        var actorMovieId = DbUtils.GetInt(reader, "Id");
                        var existingActorMovie = actorMovies.FirstOrDefault(am => am.Id == actorMovieId);
                        if (existingActorMovie == null)
                        {
                            existingActorMovie = NewActorMovieFromDb(reader);
                            actorMovies.Add(existingActorMovie);
                        }
                    }
                    reader.Close();
                    return actorMovies;
                }
            }
        }

        public void AddActorMovie(ActorMovie actorMovie)
        {
            var sql = @"INSERT INTO [ActorMovie] ([ActorId], [MovieId], [RoleId], [CharacterFirst], [CharacterLast], [IsAlive)
                        OUTPUT INSERTED.Id
                        VALUES (@ActorId, @MovieId, @RoleId, @CharacterFirst, @CharacterLast, @IsAlive)";
            try
            {
                using (IDbConnection db = new SqlConnection(_connectionString))
                {
                    actorMovie.Id = db.QuerySingle<int>(sql, actorMovie);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }

        private ActorMovie NewActorMovieFromDb(SqlDataReader reader)
        {
            return new ActorMovie()
            {
                Id = DbUtils.GetInt(reader, "Id"),
                ActorId = DbUtils.GetInt(reader, "ActorId"),
                MovieId = DbUtils.GetInt(reader, "MovieId"),
                RoleId = DbUtils.GetInt(reader, "RoleId"),
                CharacterFirst = DbUtils.GetString(reader, "CharacterFirst"),
                CharacterLast = DbUtils.GetString(reader, "CharacterLast"),
                IsAlive = reader.GetBoolean(reader.GetOrdinal("IsAlive")),
                Actor = new Actor()
                {
                    Id = DbUtils.GetInt(reader, "ActorId"),
                    FirstName = DbUtils.GetString(reader, "FirstName"),
                    LastName = DbUtils.GetString(reader, "LastName")
                },
                Movie = new Movie()
                {
                    Id = DbUtils.GetInt(reader, "MovieId"),
                    Year = DbUtils.GetInt(reader, "Year"),
                    Title = DbUtils.GetString(reader, "Title")
                },
                Role = new Role()
                {
                    Id = DbUtils.GetInt(reader, "RoleId"),
                    Name = DbUtils.GetString(reader, "Name")
                }
            };
        }
    }
}
