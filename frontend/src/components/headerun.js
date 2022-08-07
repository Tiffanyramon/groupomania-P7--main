import '../styles/header.css';
import {Link, useNavigate} from "react-router-dom"
import logo from '../images/icon-left-font-monochrome-white.png'

function Headerun(){
     const navigate=useNavigate()
     const title ='Groupomania'
     function deconnexion(){
          localStorage.clear()
          navigate("/login")
     }
     return (
          <div className='group-header'>
               <div className='group-title'>
               <img className="logo" src={logo}    alt="logo groupomania" ></img>
               </div>
               <div className= "demarrage">
               <Link to={"/login"}>
               
                  <button> Connexion </button>
               </Link>
              <Link to={"/inscription"}> 
                  <button> Inscription </button>
              </Link> 
            
                <button onClick={deconnexion}>
                     Deconnexion </button>   
            </div>        
          </div>

     )
  
}

export default Headerun