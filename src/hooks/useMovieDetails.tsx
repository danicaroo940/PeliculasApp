import movieDB from '../api/movieDB';
import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditInterface';


interface MovieDetails {
  isLoading: boolean,
  movieFull?: MovieFull,
  cast: Cast[],
}


export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
   const movieDetailPromise = movieDB.get<MovieFull>(`/${movieId}`);
   const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
   
  const [movieDetailsRes, castPromiseRes] = await Promise.all( [movieDetailPromise, castPromise] );

  setState({
    isLoading:false,
    movieFull: movieDetailsRes.data,
    cast: castPromiseRes.data.cast,
  });
  };

  useEffect(() => {
    getMovieDetails();
  },[]);
  return {
    ...state,
  };
};
