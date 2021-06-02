import React from 'react';
import useCounter from '../hooks/useCounter';


function Counter () {
    const {count, onIncrease, onDecrease, onIncreaseBy} = useCounter();
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <button onClick={() => onIncreaseBy(5)}>+5</button>
            </div>
        </div>
    );
}

export default Counter;