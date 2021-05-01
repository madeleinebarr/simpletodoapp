import React, { Fragment } from 'react';
import './App.css';

import ListTodos from './components/ListTodos';


function App() {

  return (<Fragment>
    <div className="container">
      <ListTodos />
      </div>
  </Fragment>);

}

export default App;
