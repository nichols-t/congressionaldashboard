// This file contains methods for making requests to the ProPublica Congress API, which is the data source for this
// project. All components that need to access data should use these methods, or wrappers of these methods.
import axios from 'axios';
import apiKey from './apiKey';

/**
 * The base URL string for the ProPublica Congress api.
 */
const PUBLICA_API_BASE = 'https://api.propublica.org/congress/v1/';
/**
 * Request options for all requests. This should include the necessary authentication.
 */
const OPTIONS = {
  headers: {
    'X-API-Key': apiKey,
  },
};

/**
 * Sends a request to the ProPublica API. Specify `path` to choose a resource to request.
 * @param {*} path the path (beyond the v1 Congress API) of the resource.
 * @return {Object} response from the API.
 */
const requestProPublica = async (path) => {
  const response = await axios.get(`${PUBLICA_API_BASE}${path}`, OPTIONS);

  return response;
};

export default requestProPublica;
