import Die from './Die';
import './Dice.css';

function Dice({ dice, color }){
    return (
        <section className="Dice">
            {dice.map((v, i) => (
                <Die key={i} val={v} color={color} />
            ))
            }
            {/* {dice.map((v, i) => {
                return (<Die key={i} val={v} />)
            })
            } */}
        </section>
    )
}

export default Dice;

