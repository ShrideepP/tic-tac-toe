import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export function GameContextProvider({ children }) {

  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(0);

  return (
    <Context.Provider value={{
      blueScore,
      redScore,
      playerTurn,
      setPlayerTurn,
      setBlueScore,
      setRedScore,
    }}>
        { children }
    </Context.Provider>
  );
};

export const GameContext = () => useContext(Context);