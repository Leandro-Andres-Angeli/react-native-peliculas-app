import { useEffect, useState } from 'react';
import { Movie, MoviesResponse } from '../interfaces/movieInterface';
import moviedDb from '../movieDB';
interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const getMovies = async () => {
    try {
      setIsLoading(true);

      const respNowPlayingPromise =
        moviedDb.get<MoviesResponse>('/now_playing');
      const respPopularPromise = moviedDb.get<MoviesResponse>('/popular');
      const topRatedPromise = moviedDb.get<MoviesResponse>('/top_rated');
      const upcomingPromise = moviedDb.get<MoviesResponse>('/upcoming');
      const resps = await Promise.all([
        respNowPlayingPromise,
        respPopularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);
      setMoviesState({
        nowPlaying: resps[0].data.results,
        topRated: resps[1].data.results,
        upcoming: resps[2].data.results,
        popular: resps[3].data.results,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return { ...moviesState, isLoading };
};

export default useMovies;
