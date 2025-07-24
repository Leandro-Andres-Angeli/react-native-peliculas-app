import axios from 'axios';

import { REACT_APP_API_KEY } from '@env';

const moviedDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es-ES',
  },

  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  },
});

export default moviedDb;
