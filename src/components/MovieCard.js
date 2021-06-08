import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom'


const MovieCard = ({ movie }) => {
    const {Name,imgURL,Description,Rate,id,Trailer}= movie
    return (
        <div className="cards">
          <Card className="card-img" style={{ width: '15rem' }}>
            <Link to={`/trailer/${id}`}>
              <Card.Img variant="top" src={imgURL} />
            </Link>
            <Card.Body>
                    <Card.Title className="card-title">{Name}</Card.Title>
            {/* <Card.Text className="descript">
              {Description}
    </Card.Text> */}
  </Card.Body>
  <ListGroup className="list-group-flush">
            <ListGroupItem className="movie-rate">
              <StarRatings
                rating={Number(Rate)}
                starRatedColor="yellow"
                starEmptyColor="grey"
          numberOfStars={5}
                name='rating'
                starDimension="20px"
              />
            </ListGroupItem>
  </ListGroup>
          {/* <Card.Body>
            <Card.Text className="hov2">
            <p>See Full Description..</p>
              <p>{Description}</p>
              </Card.Text>
            
    
  </Card.Body> */}
</Card>  
        </div>
    )
}

export default MovieCard

