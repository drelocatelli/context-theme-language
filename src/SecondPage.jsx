import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { PreferencesContext } from './Contexts/preferences';

export default function SecondPage() {

    const {preferences, setPreferences} = useContext(PreferencesContext);

    if(preferences.theme == 'dark') {
        document.body.classList.add('dark')
    }else {
        document.body.classList.remove('dark')
    }
    
    return(
        <div>  
            <Link to='/'>{(preferences.language == 'pt-BR') ? 'Início' : 'Home'}</Link>
            <br />
            <h1>{(preferences.language == 'pt-BR') ? 'Segunda página' : 'Second Page'}</h1>
            <div>
                {(preferences.language == 'pt-BR') ? 'Tema' : 'Theme'}: {preferences.theme} <br />
                {(preferences.language == 'pt-BR') ? 'Linguagem' : 'Language'}: {preferences.language} <br />
                <br />
                <button type='button' onClick={
                    () => {
                        setPreferences( { ...preferences, theme: (preferences.theme == 'light') ? 'dark' : 'light'}
                        );
                    }
                }>change theme</button>
                &nbsp;&nbsp;
                <button type='button' onClick={
                    () => {
                        setPreferences({...preferences, language: (preferences.language == 'pt-BR') ? 'en-US' : 'pt-BR'})
                    }
                }>change language</button>
            </div>
        </div>
    );
}