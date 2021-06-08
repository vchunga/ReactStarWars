/**
 * This is a component which displays a list of Star Wars films
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import getContentId from '../Utils'

/**
 * Populate the unordered list with the elements of the array which represents a list of
 * Star Wars films
 * @param {function} props.setFilm a function object which would set the id of the selected film
 * @returns {object} the HTML components which renders a list of Star Wars films
 */
const Filmlist = ({
  setFilm,
}) => {
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState(null)
  const imgURL = 'https://starwars-visualguide.com/assets/img/films/'
  let filteredFilms = []

  const searchSpace = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then((res) => {
        setFilms(res.data.results)
      })
  }, [])

  // Client-side filtering of the films based on the name/opening crawl
  filteredFilms = films
  if (search !== null) {
    filteredFilms = films.filter(
      (data) => (data.title.toLowerCase().includes(search.toLowerCase())
      || data.opening_crawl.toLowerCase().includes(search.toLowerCase())),
    )
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter the search criteria of the films here"
        onChange={(e) => searchSpace(e)}
        maxLength="120"
      />
      <br />
      <ul className="grid grid--columns grid--gap">
        {filteredFilms.map((film) => (
          <li
            key={film.title}
            style={
              { backgroundImage: `url(${imgURL + getContentId(film.url)}.jpg)` }
            }
          >
            <div className="desc">
              <h3>{film.title}</h3>
              <p>{`Director: ${film.director}`}</p>
              <p>{film.release_date}</p>
              <a href={`#films/${getContentId(film.url)}`} onClick={() => { setFilm(getContentId(film.url)) }} role="button">
                More details &raquo;
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

Filmlist.propTypes = {
  setFilm: PropTypes.func.isRequired,
}

export default Filmlist
