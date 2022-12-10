import React from 'react';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import Reset from './components/Reset';
import { GameContextProvider } from './context/GameContext';

function App() {
  return (
    <GameContextProvider>
      <section className='w-full h-screen font-montserrat bg-gray-200 flex flex-col justify-center items-center gap-8'>
        <ScoreBoard />
        <Board />
      </section>
    </GameContextProvider>
  );
};

export default App;