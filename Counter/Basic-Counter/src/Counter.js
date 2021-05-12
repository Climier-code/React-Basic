import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const [diff, setDiff] = useState(1);

    const onChange = (e) => {
        setDiff(parseInt(e.target.value,10));
    };
    
    const onIncrease = () => {
        setNumber(number + diff);
    };
    const onDecrease = () => {
        setNumber(number - diff);
    };

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;