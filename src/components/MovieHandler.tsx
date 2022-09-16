import { useEffect } from "react";
import { IMovie } from "../models/IMovie";
import MovieService from "../services/MovieService";
import { Loading } from "./Loading";

interface IMovieHandlerProps {
  showMovies(movies: IMovie[]): void;
  movies: IMovie[];
  loadingChecker: boolean;
  setLoader(isLoading: boolean): void;
}

export const MovieHandler = (props: IMovieHandlerProps) => {
  useEffect(() => {
    if (props.movies.length !== 0) return;
    props.setLoader(true);
    setTimeout(() => {
      let service = new MovieService();
      service.getMovies().then((movies) => {
        props.setLoader(false);
        props.showMovies(movies);
      });
    }, 1000);
  });

  return (
    <>
      <div>
        {props.loadingChecker ? (
          <Loading></Loading>
        ) : (
          props.movies.map((m, index) => {
            return (
              <div key={index}>
                <h1>{m.Title}</h1>
                <img src={m.Poster} alt={m.Title} />
                <p>{m.Released}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
