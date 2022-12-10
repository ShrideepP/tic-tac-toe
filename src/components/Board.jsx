import React, { useRef, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import Reset from './Reset';

function Blocks() {

  const blocksRef = useRef(null);
  const { playerTurn, setPlayerTurn, setBlueScore, setRedScore } = GameContext();

  function checkWin() {
    const blocks = blocksRef.current.children;
    let wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    wins.forEach(win => {
      if(blocks[win[0]].className.includes("blue") && blocks[win[1]].className.includes("blue") && blocks[win[2]].className.includes("blue")) {
        setBlueScore(prevScore => prevScore + 1);
      } else if(blocks[win[0]].className.includes("red") && blocks[win[1]].className.includes("red") && blocks[win[2]].className.includes("red")) {
        setRedScore(prevScore => prevScore + 1);
      };
    });
  };

  useEffect(() => {
    const blocks = blocksRef.current.children;
    for(let block of blocks) {
      block.onclick = () => {
        if(playerTurn % 2 === 0) {
          setPlayerTurn(prevTurn => prevTurn + 1);
          block.classList.add("blue");
          block.style.pointerEvents = "none";
          checkWin();
        } else if (playerTurn % 2 !== 0) {
          setPlayerTurn(prevTurn => prevTurn + 1);
          block.classList.add("red");
          block.style.pointerEvents = "none";
          checkWin();
        };
      };
    };
  }, [playerTurn]);

  function handleReset() {
    const blocks = blocksRef.current.children;
    for(let block of blocks) {
      block.className = "block";
      block.style.pointerEvents = "unset";
    };
  };

  return (
    <>
    <div ref={ blocksRef } className='w-fit h-fit grid grid-cols-3 gap-4'>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
    </div>
    <Reset handleReset={ handleReset } />
    </>
  );
};

export default Blocks;