/**
 * This is a component which populate the unordered list with the data retrieved from the API
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Populate the unordered list with the elements of the array which represents a list of data
 * related to the selected film (e.g. list of characters, vehicles, etc appear in specific film)
 * @param {Array} props.arrObj an array object which contains a collection of data related to a film
 * @returns {object} the HTML components which renders the details of the film
 */
const GeneralList = ({
  arrObj,
}) => (
  <ul className="grid grid--columns grid--gap">
    {arrObj.map((obj) => (
      <li
        key={obj}
      >
        {obj}
      </li>
    ))}
  </ul>
)

GeneralList.propTypes = {
  arrObj: PropTypes.instanceOf(Array).isRequired,
}

export default GeneralList
