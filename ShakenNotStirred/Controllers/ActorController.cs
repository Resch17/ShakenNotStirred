using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShakenNotStirred.Models;
using ShakenNotStirred.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
        private readonly IActorRepository _actorRepository;

        public ActorController(IActorRepository actorRepository)
        {
            _actorRepository = actorRepository;
        }

        [HttpGet]
        public IActionResult GetAllActors()
        {
            return Ok(_actorRepository.GetAllActors());
        }

        [HttpPost]
        public IActionResult AddActor(Actor actor)
        {
            try
            {
                _actorRepository.AddActor(actor);
                return Ok(new { actor.Id });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
