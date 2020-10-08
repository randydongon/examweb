import React, { useState, useEffect } from 'react'
import axios from '../axios';
import '../components/Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');



  useEffect(() => {
    async function fetchData() {

      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);

      return request;
    }
    fetchData();

  }, [fetchUrl]);

  const opts = {
    heigth: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=XtMThy8QKqU

          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get('v'));

        }).catch(error => { console.log(error) })
    }
  }

  // console.log(movies)

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((item) => (
          <img
            onClick={() => handleClick(item)}
            className={`row__poster ${isLargeRow && 'row_posterLarge'}`}
            key={item.id} src={`${baseUrl}${isLargeRow ? item.poster_path : item.backdrop_path}`} alt={item.name} />))}
      </div>
      {trailerUrl && <Youtube videoId={'rfscVS0vtbw'} opts={opts} />}
    </div>
  )
}

export default Row
