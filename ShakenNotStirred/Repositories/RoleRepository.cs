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
    public class RoleRepository : BaseRepository, IRoleRepository
    {
        public RoleRepository(IConfiguration configuration) : base(configuration) { }

        public List<Role> GetAllRoles()
        {
            string sql = "SELECT * FROM [Role]";
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Role>(sql).ToList();
            }
        }
    }
}
