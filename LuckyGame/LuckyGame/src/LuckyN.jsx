import { useState } from "react";
import { getRolls, sum } from "./utils";
// import "./LuckyN.css";
import Dice from "./Dice";

function LuckyN({ numDice=2, goal=7 }){
    const [dice, setDice] = useState(getRolls(numDice));

    const won = sum(dice) === goal;

    function Reroll() {
        setDice(getRolls(numDice));
    }

    return (
        <>
            <main className="LuckyN">
                <h1>Lucky{goal} {won && "You WON!"}</h1>
                    <Dice dice={dice} />
                {/* <section className="LuckyN-dice">
                    <div className="LuckyN-dice">{dice[0]} </div>
                    <div className="LuckyN-dice">{dice[1]} </div>
                </section> */}
                <button onClick={Reroll}>Roll Again !</button>
            </main>
        </>
        
    );

}

export default LuckyN;

