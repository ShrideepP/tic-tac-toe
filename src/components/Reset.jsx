import React from 'react';

function Reset({ handleReset }) {
  return <button 
  onClick={ handleReset }
  className='w-32 h-10 grid place-items-center text-sm font-semibold bg-black text-white rounded-md shadow-xl'>
    Reset
  </button>
};

export default Reset;