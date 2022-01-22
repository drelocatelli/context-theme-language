import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { PreferencesContext } from './Contexts/preferences';
import Routers from './routers';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ! app
function App() {  
  return(
    <Routers />
  );
}