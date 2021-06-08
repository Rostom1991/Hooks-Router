import React, {useState} from 'react'
import StarRatings from 'react-star-ratings';

const Star = ({rate, setrate}) => {
    const changeRating = (newrate) => {
        setrate(newrate)
    }

    


    return (
        <div class="star">
            <StarRatings class="star2"
          rating={rate}
          starRatedColor="gold"
          changeRating={changeRating}
          numberOfStars={5}
                name='rating'
                starDimension="30px"
            />
            <button onClick={()=>setrate(0)}>Clear</button>
        </div>
    )
}

export default Star