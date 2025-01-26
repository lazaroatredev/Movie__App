import React from "react"
import { search } from "../assets"

interface SearchProps {
    searchTerm : string,
    setSearchTerm : React.Dispatch<React.SetStateAction<string>>
}

const Search = ({searchTerm,setSearchTerm}: SearchProps) => {
  return (
    <div 
        className='search'
    >
        <div>
            <img src={search} alt="Search" />
            <input 
                type="text" 
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search