import { createContext, useState } from "react";

export const PreferencesContext = createContext({});

export const PreferencesProvider = ({children}) => {
    
    const [preferences, setPreferences] = useState({
        'theme': 'light',
        'language': 'pt-BR'
    });

    return(
        <PreferencesContext.Provider value={{preferences, setPreferences}}>
            {children}
        </PreferencesContext.Provider>
    );
    
}