import { Button } from "react-bootstrap";
import "./Stopwatch.css"

const Stopwatch = () => {
    return (
        <div className="stopwatch-wrapper">
        <div className="stopwatch">
            <div className="stopwatch__block">
                <div className="label">Hours</div>
                <div className="time hour">00</div>
            </div>

            <div className="stopwatch__block">
                <div className="label">Minutes</div>
                <div className="time min">00</div>
            </div>

            <div className="stopwatch__block">
                <div className="label">Seconds</div>
                <div className="time sec">00</div>
            </div>

            <div className="stopwatch__block">
                <div className="label">Milleseconds</div>
                <div className="time milSec">00</div>
            </div>
        </div>

        <div className="buttons">
            <Button variant="outline-info" className="btn start">Start</Button>
            <Button variant="outline-warning" className="btn pause">Pause</Button>
            <Button variant="outline-danger" className="btn stop">Stop</Button>
            <Button variant="outline-light" className="btn new">Round</Button>
        </div>

        <div className="round__wrapper">
            <div className="round__label">Rounds</div>
            <div className="round__input"></div>
        </div>
    </div>
    )
} 

export default Stopwatch;