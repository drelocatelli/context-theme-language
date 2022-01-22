import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { PreferencesContext } from './Contexts/preferences';
import './basic.css'

export default function App() {

  const {preferences, setPreferences} = useContext(PreferencesContext);

  console.log(preferences)
  
  return (
    <>
      <Link to='/second'>{(preferences.language == 'pt-BR') ? 'Segunda página' : 'Second Page'}</Link>
      <br />
      <h1>{(preferences.language == 'pt-BR') ? 'Olá mundo' : 'Hello world'}</h1>
    </>
  );
}