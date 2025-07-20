import axios from 'axios';

const moviedDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es-ES',
  },

  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDRhNGY5ZjI2ZjRmYzEwZWM2OWQ0ZWU2NGE0ZjVkZSIsIm5iZiI6MTc1MjgwNDk3Mi42NDksInN1YiI6IjY4NzlhZTZjMDlhOGY5ZGRjMDM4Y2EwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gprLGzgYDZF9pegfmq5filPNYqVMW5rOE7n-Wn_Dx00',
  },
});

export default moviedDb;
