import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingComponent(){
    
    const [score, setScore] = useState(3);

    return (
        <div>
            <h1>{score <= 0 ? "There is no Score" : `The current Score is Rated ${score}`}</h1>
            {/* <h1>The current Score is Rated {score}</h1> */}
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
        </div>
        
    )
}
