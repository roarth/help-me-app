import React from 'react';
import './App.css';
import UserAgent from "../UserAgent/UserAgent";
import ScreenResolution from "../ScreenResolution/ScreenResolution";
import WindowSize from "../WindowSize/WindowSize";
import OperatingSystem from "../OperatingSystem/OperatingSystem";
import Browser from "../Browser/Browser";

function App() {
  return (
    <div className="App">
      <UserAgent />
      <ScreenResolution />
      <WindowSize />
      <OperatingSystem />
      <Browser />
    </div>
  );
}

export default App;
