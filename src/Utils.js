/**
 * This is a module contains the functions to be shared with different components
 */

/**
 * Obtain the Ids for retrieving data from Star Wars API
 * @param {string} props.url URL string that contains the ID
 * @returns {string} an ID for further retrieving data from the Star Wars API
 */

const getContentId = (url) => (
  url.split('/')[url.split('/').length - 2]
)
export default getContentId
