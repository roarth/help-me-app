import React from 'react';

function UserAgent() {
  return (
    <div className="App">
      user agent: {getUserAgent()}
    </div>
  );
}

function getUserAgent() {
  return  window.navigator.userAgent;
}

export default UserAgent;
