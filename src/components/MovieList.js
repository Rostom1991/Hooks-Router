import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ moviesData, search, rate }) => {
    const filter = () => {
        if (rate > 0 && search.trim()) {
            return (moviesData.filter((movie) =>
                movie.Name.toLowerCase().includes(search.toLowerCase()) && movie.Rate==rate))}
        if (rate > 0) {
            return (moviesData.filter((movie) =>
            movie.Rate==rate))
        }
        if (search.trim()) {
            return (moviesData.filter((movie) =>
                movie.Name.toLowerCase().includes(search.toLowerCase())))   
        }
        return(moviesData)
    }
    return (
        <div className="container">
            {(filter()).map((movies, i) => {
                return (
                    <div key={i}>
                        <MovieCard movie={movies} />
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList
