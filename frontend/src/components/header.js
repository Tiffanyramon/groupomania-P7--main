import '../styles/header.css';
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import logo from '../images/icon-left-font-monochrome-white.png';
import { confirmAlert } from "react-confirm-alert";

function Header(){
     const navigate=useNavigate()


     // retire le token du local stotage
     function deconnexion(){
          localStorage.clear()
          navigate("/login")
     }
     // pas de token revoie à la page de connexion
     useEffect(()=>{
          if(!localStorage.token){
               navigate("/login")
          }

     })
     
      const submit = () => {
          confirmAlert({
               title: ' deconnexion',
               message: '',
               buttons: [
                    {
                         label: 'oui',
                         onClick: () => deconnexion ()
                    },
                    {
                         label: 'non',
                         onClick: () => null
                    }
               ]
          });
     };
     
     return (
          <div className='group-headerzero'>
               <div className='group-title'>
               <img className="logo" src={logo}    alt="logo groupomania" ></img>
               </div>

              
              <Link to={"/compte"}>
              <button> Compte </button>
              </Link>

              <Link to={"/"}>
                    <button>Forum</button>
                </Link>
                <div className='alert'>
                <button onClick={submit}>
     
                     Deconnexion </button>  
                     
               </div>   
          
          </div>
     )
  
}

export default Header