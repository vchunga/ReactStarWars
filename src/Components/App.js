/**
 * This is a major component which displays the films list or selected
 * fim's details, depends on if filmId is provided or not
 */

import React, { useState } from 'react'

// Components
import FilmList from './FilmList'
import FilmDetail from './FilmDetail'

// css
import '../Scss/index.scss'

export default function App() {
  const [filmId, setFilm] = useState(null)

  return (
    <div className="container">
      <h1 className="text-center">Star Wars API</h1>
      {/* if filmId is provided, show the details of the film,
      otherwise, display the list of films
      TODO: Make this component to display the list of movie only and
            display the film's details in another component */}
      { filmId
        ? (
          <>
            <button className="button primary inline" onClick={() => { setFilm(null) }} type="button">
              &lsaquo; Return to Main
            </button>
            <p>Film Details</p>
            <FilmDetail filmId={filmId} />
          </>
        )
        : (
          <>
            <h2>Films</h2>
            <div className="vertical-list">
              <FilmList setFilm={setFilm} />
            </div>
          </>
        )}
      <footer>
        <p>
          May the force be with my job hunting &#128512;
        </p>
      </footer>
    </div>
  )
}
