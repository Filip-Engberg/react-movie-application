import { useState } from "react";
import { IMovie } from "../models/IMovie";
import { MovieHandler } from "./MovieHandler";
import { UserResponse } from "./UserResponse";
import { UserSearchHandler } from "./UserSearchHandler";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [userInput, setuserInput] = useState("");
  const [findMovies, setfindMovies] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function showMovies(movies: IMovie[]) {
    setMovies(movies);
  }

  function movieCounter(movieCheck: boolean) {
    setfindMovies(movieCheck);
  }

  function setUserInput(userInput: string) {
    setuserInput(userInput);
  }

  function loadingChecker(isLoading: boolean) {
    setIsLoading(isLoading);
  }

  return (
    <>
      <UserSearchHandler
        showMovies={showMovies}
        movieCounter={movieCounter}
        userInput={setUserInput}
        loadingChecker={loadingChecker}
      ></UserSearchHandler>
      {findMovies ? (
        <MovieHandler
          loadingChecker={isLoading}
          setLoader={loadingChecker}
          movies={movies}
          showMovies={showMovies}
        />
      ) : (
        <UserResponse userSearch={userInput} />
      )}
    </>
  );
};
