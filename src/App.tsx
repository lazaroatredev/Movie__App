import { useState } from "react"
import { hero } from "./assets"
import { useMovies } from "./hooks/useMovies"
import { useDebounce } from "react-use"
import { useTrendingMovies } from "./hooks/useTrendingMovies"
import { MovieCard, Search, Spinner } from "./components"

const App = ()=> {

  const [searchTerm, setSearchTerm] = useState('')
  const [debounce, setDebounce] = useState('')

  useDebounce( () => setDebounce(searchTerm), 800 , [searchTerm])
  const { data , isError , isLoading  } = useMovies(debounce)
  const { data : trending  } = useTrendingMovies()
  
  const movieList = data?.results

  return (
    <main className="overflow-hidden">
      <div className="pattern"/>
        <div className="wrapper">

          <header>
            <img src={hero} alt="Hero" />
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Whitout the Hassle</h1>
            <Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </header>

          {trending && trending?.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>
              <ul>
                {trending?.map((movie,index)=>(
                  <li key={movie.$id}>
                    <p>{index + 1}</p>
                    <img src={movie.poster_url} alt={movie.title} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner/>
              </div>
            ) : isError ? (
              <p>"Something happends</p>
            ) : (
              <ul>
                {movieList?.map((movie)=>(
                  <MovieCard key={movie.id} movie={movie}/>
                ))}
              </ul>
            )}
          </section>
        </div>
    </main>
  )
}

export default App
