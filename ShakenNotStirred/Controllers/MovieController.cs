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
    public class MovieController : ControllerBase
    {
        private readonly IMovieRepository _movieRepository;

        public MovieController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        [HttpGet]
        public IActionResult GetAllMovies()
        {
            return Ok(_movieRepository.GetAllMovies());
        }

        [HttpPost]
        public IActionResult AddMovie(Movie movie)
        {
            try
            {
                _movieRepository.AddMovie(movie);
                return Ok(new { movie.Id });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
