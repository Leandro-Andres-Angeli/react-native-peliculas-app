import { useEffect, useState } from 'react';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';
import moviedDb from '../movieDB';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const getMovies = async () => {
    try {
      setIsLoading(true);
      const resp = await moviedDb.get<MovieDBNowPlaying>('/now_playing');
      const peliculas = resp.data.results;
      setPeliculasEnCine(peliculas);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return { peliculasEnCine, isLoading };
};

export default useMovies;
