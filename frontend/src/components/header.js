import '../styles/header.css';
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from 'react';
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
          <div className='group-header'>
               <div className='group-title'>
               <img className="logo" src="C:\Users\tiffanyp\Desktop\image groupomania\Groupomania Logos\icon-left-font-monochrome-white.png"     alt="logo groupomania" ></img>
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

                <button onClick={deconnexion}>
                     Deconnexion </button>     
          </div>
     )
  
}

export default Header