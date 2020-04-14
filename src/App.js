import React from 'react';
import ReactNotifications from 'react-notifications-component';

import './assets/App.scss';

import Routes from "./app/routes";

function App() {

  return (

    <>

      <ReactNotifications />
      <Routes />

    </>
  );
}

export default App;
