import React from 'react';
import Board from './Board';

function Game() {

    const status = 'Next player: X';
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                {/* <div> { status } </div> */}
                {/* <div> {ToDo}</div> */}
            </div>
        </div>
    );
}
export default Game;