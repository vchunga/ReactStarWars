/**
 * This is a component which displays the detailed information of selected Star Wars film
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import GeneralList from './GeneralList'

/**
 * Render the details of the selected film from App.js
 * @param {string} props.filmId an id which would allow the Star Wars API to identify the film
 * @returns {object} the HTML components which renders the details of the film
 */
const FilmDetail = ({
  filmId,
}) => {
  const [selectedFilm, setSelectedFilm] = useState([])
  const imgURL = 'https://starwars-visualguide.com/assets/img/films/'
  const arrCharacters = []
  const arrPlanets = []
  const arrVehicles = []

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://swapi.dev/api/films/${filmId}`)
        .then((res) => {
          const arrFilmDetail = []
          if (res.status === 200) {
            Object.keys(res.data).forEach((key) => {
              arrFilmDetail[key] = res.data[key]
            })
          }
          setSelectedFilm(arrFilmDetail)
        })
    }
    fetchData()
  }, [])

  // Retrieving different information of the film from the returning JSON
  if (Array.isArray(selectedFilm.characters)) {
    Object.keys(selectedFilm.characters).forEach((key) => {
      arrCharacters[key] = selectedFilm.characters[key]
    })
  }
  if (Array.isArray(selectedFilm.planets)) {
    Object.keys(selectedFilm.planets).forEach((key) => {
      arrPlanets[key] = selectedFilm.planets[key]
    })
  }
  if (Array.isArray(selectedFilm.vehicles)) {
    Object.keys(selectedFilm.vehicles).forEach((key) => {
      arrVehicles[key] = selectedFilm.vehicles[key]
    })
  }

  return (
    <>
      <h2>{selectedFilm.title}</h2>
      <div id="movie">
        <div><img src={`${imgURL + filmId}.jpg`} alt={selectedFilm.title} /></div>
        <div>
          <div className="movieDetail">
            <h4>Director</h4>
            {selectedFilm.director}
          </div>
          <div className="movieDetail">
            <h4>Release Date</h4>
            {selectedFilm.release_date}
          </div>
          <div className="movieDetail">
            <h4>Opening Crawl</h4>
            {selectedFilm.opening_crawl}
          </div>
          <div className="movieDetail">
            <h4>Castings</h4>
            <GeneralList arrObj={arrCharacters} />
          </div>
          <div className="movieDetail">
            <h4>Planets</h4>
            <GeneralList arrObj={arrPlanets} />
          </div>
          <div className="movieDetail">
            <h4>vehicles</h4>
            <GeneralList arrObj={arrVehicles} />
          </div>
        </div>
      </div>
    </>
  )
}

FilmDetail.propTypes = {
  filmId: PropTypes.string.isRequired,
}

export default FilmDetail
