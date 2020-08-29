import React, { useState, useEffect } from 'react';
import requestPublicaApi from './publicaApi';

/**
 * Extracts the member data from the response.
 * @param {Object} response the response object for a members request.
 * @return {Array} of members from the response.
 */
const transform = (response) => {
  if (response?.data?.results?.[0]?.members) {
    return response.data.results[0].members;
  }

  return [];
};

/**
 * Custom hook for gettting the members of a congressional chamber. Must be given the congress number and
 * the chamber for the request, and returns the members, error state, and loading state.
 * @param {Object} args must contain `congress∈[80-116]` (`[102-116]` for House) and `chamber∈['senate', 'house']`.
 * @return {Object} `{members, error, loading}`.
 */
const useMembers = ({ congress, chamber }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const memberData = await requestPublicaApi(`${congress}/${chamber}/members.json`);
        setMembers(transform(memberData));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return { members, error, loading };
};

export default useMembers;
