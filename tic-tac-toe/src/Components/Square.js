import React, { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);

    const status = 'Next player: X';
    const onClick = (e) => {
        setValue('X');
    };
    return (
        <>
            <button
                className="square"
                onClick={onClick}>
                { value }
            </button>
        </>
    );
}
export default Square;