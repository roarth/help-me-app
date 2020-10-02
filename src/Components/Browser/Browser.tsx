import React from 'react';
import Bowser from "bowser";

function Browser() {
  return (
    <div className="App">
      browser: {getBrowser()}
    </div>
  );
}

function getBrowser() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return browser.getBrowserName() + ' v' + browser.getBrowserVersion();
}


export default Browser;
