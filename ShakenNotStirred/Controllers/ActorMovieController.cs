﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShakenNotStirred.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShakenNotStirred.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorMovieController : ControllerBase
    {
        private readonly IActorMovieRepository _actorMovieRepository;

        public ActorMovieController(IActorMovieRepository actorMovieRepository)
        {
            _actorMovieRepository = actorMovieRepository;
        }

        [HttpGet]
        public IActionResult GetAllActorMovies()
        {
            return Ok(_actorMovieRepository.GetAllActorMovies());
        }

        [HttpGet("actor/{id}")]
        public IActionResult GetByActor(int id)
        {
            return Ok(_actorMovieRepository.GetByActor(id));
        }

        [HttpGet("movie/{id}")]
        public IActionResult GetByMovie(int id)
        {
            return Ok(_actorMovieRepository.GetByMovie(id));
        }

    }
}