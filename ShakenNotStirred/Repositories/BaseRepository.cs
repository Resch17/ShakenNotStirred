using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Repositories
{
    public abstract class BaseRepository
    {
        public readonly string _connectionString;

        public BaseRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        protected SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_connectionString);
            }
        }
    }
}
