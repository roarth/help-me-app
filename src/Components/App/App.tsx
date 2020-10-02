import React from 'react';
import './App.css';
import UserAgent from "../UserAgent/UserAgent";
import ScreenResolution from "../ScreenResolution/ScreenResolution";
import WindowSize from "../WindowSize/WindowSize";

function App() {
  return (
    <div className="App">
      <UserAgent />
      <ScreenResolution />
      <WindowSize />
    </div>
  );
}

export default App;
