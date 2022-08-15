// import du css
import'../styles/header.css';
import'../styles/connexion.css';
import'../styles/forum.css';
import'../styles/inscription.css';

import axios from 'axios';

// import des pages js
import Connexion from './connexion';
import Inscription from'./inscription';
import Forum from './forum';
import Compte from'./compte';

// bibliothèque de routage  
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/
function App() {
  axios.defaults.headers.common.Authorization = "Bearer " + localStorage.token
  return (
    // relation (mapping) entre l'url et un component
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forum/>} />
        <Route path="/login" element={<Connexion/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/compte" element={<Compte/>} />
      </Routes>
   </BrowserRouter>
  )
}




export default App;
