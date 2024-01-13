import { useState } from "react";

function ScoreKeeper({numPlayer = 7, target = 3}) {
    
    let playerScore = new Array(numPlayer).fill(0);
    let [scores, setScores] = useState(playerScore);
    // let [scores, setScores] = useState(new Array(numPlayer).fill(0));
    // const incrementScore = (idx) => {
    //     setScores((prevScores) => {
    //         const copy = [...prevScores];
    //         copy[idx] += 1;
    //         return copy;
    //     });
    // }

    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if(i === idx) score += 1
                    return score;
            })
        });
    }

    const reset = () => {
        setScores(new Array(numPlayer).fill(0));
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                        <li key={idx}> 
                            Player{idx + 1}: {score} 
                            <button onClick={() => incrementScore(idx)}>+1</button>
                            {score >= target && "WINNER"}
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}



export default ScoreKeeper;
