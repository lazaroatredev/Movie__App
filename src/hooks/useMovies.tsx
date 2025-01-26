import { fetchMovies } from "../actions/getMovies"
import { useQuery } from "@tanstack/react-query"

export const useMovies = (searchTerm: string)  => {
    return useQuery({   
      queryKey: ['movies', searchTerm],
      queryFn: () => fetchMovies(searchTerm),
    })
  }
  