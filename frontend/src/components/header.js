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
               <img className="logo" src="groupomania-P7--main/Groupomania Logos/icon-left-font-monochrome-white.png"     alt="logo groupomania" ></img>
               </div>
               <Link to={"/login"}>
                  <button> connexion </button>
               </Link>
              <Link to={"/inscription"}> 
                  <button> inscription </button>
              </Link> 

              <Link to={"/compte"}>
              <button> compte </button>
              </Link>

                <button onClick={deconnexion}>
                     deconnexion </button>     
          </div>
     )
  
}

export default Header