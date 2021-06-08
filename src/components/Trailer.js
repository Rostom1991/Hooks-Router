import React from 'react'
import { useParams,Link } from 'react-router-dom'
import ReactPlayer from 'react-player'


const Trailer = ({ moviesData }) => {
    const { id } = useParams()
    const movie=moviesData.filter((movie)=>movie.id==id)[0]
    return (
        <div className="trail">
            <h1>Trailer</h1>
            <div>
            <ReactPlayer url={movie.Trailer}
                    controls={true} />
                </div>
            <p>{movie.Description}</p>
            <Link to="/" className="home">Home</Link>
        </div>
    )
}

export default Trailer
