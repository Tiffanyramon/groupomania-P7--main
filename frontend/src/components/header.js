import '../styles/header.css';
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import logo from '../images/icon-left-font-monochrome-white.png'
function Header(){
     const navigate=useNavigate()
     const title ='Groupomania'
     function deconnexion(){
          localStorage.clear()
          navigate("/login")
     }
     useEffect(()=>{
          if(!localStorage.token){
               navigate("/login")
          }

     })
     
     return (
          <div className='group-headerzero'>
               <div className='group-title'>
               <img className="logo" src={logo}    alt="logo groupomania" ></img>
               </div>
               <Link to={"/login"}>
                  <button> Connexion </button>
               </Link>
              <Link to={"/inscription"}> 
                  <button> Inscription </button>
              </Link> 

              <Link to={"/compte"}>
              <button> Compte </button>
              </Link>

              <Link to={"/"}>
                    <button>Forum</button>
                </Link>

                <button onClick={deconnexion}>
                     Deconnexion </button>     
          </div>
     )
  
}

export default Header