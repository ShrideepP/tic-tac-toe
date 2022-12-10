import React from 'react';
import { GameContext } from '../context/GameContext';

function ScoreBoard() {

  const { blueScore, redScore, playerTurn } = GameContext();

  return (
    <div className='w-72 h-fit bg-white flex items-center rounded-md shadow-xl overflow-hidden'>
      <div className={`w-2/4 text-center py-3 border-b-[3px] ${playerTurn%2!==0?"border-red-500":""}`}>
        <strong className='text-lg font-extrabold text-red-500'>
          X - { redScore }
        </strong>
      </div>
      <div className={`w-2/4 text-center py-3 border-b-[3px] ${playerTurn%2===0?"border-blue-600":""}`}>
        <strong className='text-lg font-extrabold text-blue-600'>
          O - { blueScore }
        </strong>
      </div>
    </div>
  );
};

export default ScoreBoard;