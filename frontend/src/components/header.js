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
               <h1 className='group-title'>{title}</h1>
               <Link to={"/login"}>
                  <button> connexion </button>
               </Link>
              <Link to={"/inscription"}> 
                  <button> inscription </button>
              </Link> 

                <button onClick={deconnexion}>
                     deconnexion </button>     
          </div>
     )
  
}

export default Header