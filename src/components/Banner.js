import React, { useState, useEffect } from 'react'
import axios from '../axios';
import requests from './request';
import '../components/Banner.css';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
  const [movie, setMovie] = useState([])


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)]);
    }
    fetchData();
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }


  return (
    <header className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`
      }}
    >
      <div className="banner_contents">

        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner_btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>

      </div>
      <div className="banner_fadeBottom" ></div>
    </header>
  )
}

export default Banner

 // < div className = "banner_fadeBottom" ></ >