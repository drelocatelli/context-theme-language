import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SecondPage from "./SecondPage";
import { useContext } from "react";
import { PreferencesProvider } from "./Contexts/preferences";

export default function Routers() {
    return (
        <PreferencesProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<App />} />
                    <Route path='/second' element={<SecondPage />} />
                </Routes>
            </BrowserRouter>
        </PreferencesProvider>
    );
}