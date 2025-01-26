import { moviesAPI } from "../API/movie.api";
import { updateSearchCount } from "../appwrite";
import { MovieApiResponse } from "../types";

export const fetchMovies = async (searchTerm = '') : Promise<MovieApiResponse> => {
  try {    
    const response = await moviesAPI.get(
      searchTerm 
      ? `/search/movie?query=${encodeURIComponent(searchTerm)}` 
      : "/discover/movie?sort_by=popularity.desc"
    );

    if (searchTerm && response.data.results.length > 0) {
      await updateSearchCount(searchTerm, response.data.results[0]);    
    }
    
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies: ' + (error as Error).message);  
  }
};
