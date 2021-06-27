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
    public class ActorRepository : BaseRepository, IActorRepository
    {
        public ActorRepository(IConfiguration configuration) : base(configuration) { }

        public List<Actor> GetAllActors()
        {
            string sql = "SELECT * FROM [Actor]";
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Actor>(sql).ToList();
            }
        }

        public void AddActor(Actor actor)
        {
            var sql = @"INSERT INTO [Actor] ([FirstName], [LastName])
                        OUTPUT INSERTED.Id
                        VALUES (@FirstName, @LastName)";
            try
            {
                using (IDbConnection db = new SqlConnection(_connectionString))
                {
                    actor.Id = db.QuerySingle<int>(sql, actor);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}
