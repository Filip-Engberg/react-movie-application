import { ChangeEvent, useState } from "react";
import { IMovie } from "../models/IMovie";
import MovieService from "../services/MovieService";

interface IUserSearchHandlerProps {
  showMovies(movies: IMovie[]): void;
  movieCounter(movieCheck: boolean): void;
  userInput(input: string): void;
  loadingChecker(isLoading: boolean): void;
}

export const UserSearchHandler = (props: IUserSearchHandlerProps) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleUserSearch = () => {
    if (userInput.length >= 1) {
      props.loadingChecker(true);
      setUserInput("");

      setTimeout(() => {
        let service = new MovieService();
        service.getMoviesById(userInput).then((movies) => {
          if (movies !== undefined) {
            props.showMovies(movies);
            props.movieCounter(true);
            props.loadingChecker(false);
          } else {
            props.userInput(userInput);
            props.movieCounter(false);
            props.loadingChecker(false);
          }
        });
      }, 1000);
    }
  };

  const handleUserSearchByKey = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleUserSearch();
    }
  };

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        onKeyPress={handleUserSearchByKey}
      ></input>
      <button onClick={handleUserSearch}>Search</button>
    </>
  );
};
