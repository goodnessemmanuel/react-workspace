import PropTypes from "prop-types"

export default function CounterButton( { step, currentCount, callback} ){
    function increaseCount(){
        console.log(currentCount)
        callback(currentCount + step);
    }

    function decreaseCount(){
        console.log(currentCount)
        if(currentCount >= step)
        callback(currentCount - step)
    }

    return (
        <div>
            <button className="clickButton" onClick={decreaseCount}> -{ step } </button>
            <button className="clickButton" onClick={increaseCount}> +{ step } </button>
        </div>
    )
}

//enforce  type
CounterButton.propTypes = {
    step: PropTypes.number,
    currentCount: PropTypes.number,
    callback: PropTypes.func
}

// Set default value
CounterButton.defaultProps = {
    step: 1
}