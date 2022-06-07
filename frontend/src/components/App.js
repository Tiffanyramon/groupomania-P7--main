
import'../styles/header.css';
import'../styles/compte.css';
import'../styles/connexion.css';
import'../styles/forum.css';
import'../styles/inscription.css';

import axios from 'axios';
import Connexion from './connexion';
import Inscription from'./inscription';
import Forum from './forum';
import Compte from'./compte';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from '../layouts/layout';

/*function description(){
  const title = 'Bienvenue';
}


  <Layout>
{ <div> }
<h1>Bienvenue, sur votre réseau soial d'entreprise</h1>

<h2>Écrivez, partagez, étabilissez des liens</h2>

<Link to={"/login"}>
  <button> connexion </button>
</Link>

<Link to={"/inscription"}> 
 <button> inscription </button>
 </Link> 
</div>
</Layout> */


 



function App() {
  axios.defaults.headers.common.Authorization = "Bearer " + localStorage.token
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forum" element={<Forum/>} />
        <Route path="/login" element={<Connexion/>} />
        <Route path="/inscription" element={<Inscription/>} />
        <Route path="/compte" element={<Compte/>} />
      </Routes>
   </BrowserRouter>
  )
}




export default App;
