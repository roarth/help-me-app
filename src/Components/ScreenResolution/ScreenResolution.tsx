import React from 'react';

function ScreenResolution() {
  return (
    <div className="App">
      screen resolution: {getScreenResolution()}
    </div>
  );
}

function getScreenResolution() {
  return  window.screen.width + ' x ' + window.screen.height;
}

export default ScreenResolution;
