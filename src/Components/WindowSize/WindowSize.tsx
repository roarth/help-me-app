import React from 'react';

function WindowSize() {
  return (
    <div className="App">
      window size: {getWindowSize()}
    </div>
  );
}

function getWindowSize() {
  return  window.innerWidth + ' x ' + window.innerHeight;
}

export default WindowSize;
