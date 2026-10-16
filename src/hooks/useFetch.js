import { useEffect, useState } from 'react';
const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const movieData = await response.json();
        setData(movieData.results);
      } catch (err) {
        console.error(err);
        setData([]);
      }
    }
    fetchMovies();
  }, [url]);
  return { data };
};

export default useFetch;
