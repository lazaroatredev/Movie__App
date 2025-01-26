import { useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../appwrite"


export const useTrendingMovies = () => {
    return useQuery({
        queryKey: ['trending'],
        queryFn: ()=> getTrendingMovies()
    })
}