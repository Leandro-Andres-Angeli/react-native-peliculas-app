import { useEffect, useRef, useState } from 'react';
import { MovieDetails, MovieFull } from '../interfaces/movieDetails';
import moviedDb from '../movieDB';
import { CreditsResponse } from '../interfaces/creditsInterface';

const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: false,
    movieFull: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    try {
      setMovieDetails(prev => ({ ...prev, isLoading: true }));

      const [movieDetailsRes, creditsRes] = await Promise.all([
        moviedDb.get<MovieFull>(`/${movieId}`),
        moviedDb.get<CreditsResponse>(`/${movieId}/credits`),
      ]);
      setMovieDetails({
        isLoading: false,
        movieFull: movieDetailsRes.data,
        cast: creditsRes.data.cast,
      });
    } catch (error) {
      setMovieDetails(prev => ({ ...prev, isLoading: false }));
    } finally {
      setMovieDetails(prev => ({ ...prev, isLoading: false }));
    }
  };
  const getMovieDetailsRef = useRef(getMovieDetails);
  useEffect(() => {
    console.log('render');
    getMovieDetailsRef.current();
  }, []);

  return { ...movieDetails };
};

export default useMovieDetails;
