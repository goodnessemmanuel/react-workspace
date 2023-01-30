import { useState } from "react";
import "./counter.css";
import CountDisplay from "./CountDisplay";
import CounterButton from "./CounterButton";

/**
 * Counter uses common display for
 * different button type increament
 * 
 */
export default function Counter(){
    const [count, setCount] = useState(0);

    function resetDisplay () {
        console.log("Reset button clicked! value to clear: ", count )
        setCount(0)
    }

    return (
        <div className="component">
            <CountDisplay data= {count} />
            <CounterButton currentCount={count} callback={setCount}/>
            <CounterButton step={2} currentCount={count} callback={setCount}/>
            <CounterButton step={5} currentCount={count} callback={setCount}/>
            <CounterButton step={10} currentCount={count} callback={setCount}/>
            <div className="reset">
                <button className="btn-reset" type="reset" onClick={resetDisplay}> Reset </button>
            </div>
        </div>
    )
}
