import React from 'react';
import ReactNotifications from 'react-notifications-component';

import './assets/App.scss';

import Routes from "./app/routes";

function App() {

  return (

    <div className='container-fluid'>

      <ReactNotifications />
      <Routes />

    </div>
  );
}

export default App;
