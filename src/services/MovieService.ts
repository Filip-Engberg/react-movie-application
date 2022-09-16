import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOMDbResponse } from "../models/IOMDbResponse";

export default class IOMDbService {
  async getMoviesById(id: string): Promise<IMovie[]> {
    const response = await axios.get<IOMDbResponse>(
      "http://www.omdbapi.com/?i=tt3896198&apikey=ee348134&s=" + id
    );
    return response.data.Search;
  }

  async getMovies(): Promise<IMovie[]> {
    const response = await axios.get<IOMDbResponse>(
      "http://www.omdbapi.com/?apikey=ee348134&s=star"
    );

    return response.data.Search;
  }
}
