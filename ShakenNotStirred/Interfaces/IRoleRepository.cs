using ShakenNotStirred.Models;
using System.Collections.Generic;

namespace ShakenNotStirred.Repositories
{
    public interface IRoleRepository
    {
        List<Role> GetAllRoles();
    }
}