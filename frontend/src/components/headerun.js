import '../styles/header.css';
import {Link, useNavigate} from "react-router-dom"
function Headerun(){
     const navigate=useNavigate()
     const title ='Groupomania'
     function deconnexion(){
          localStorage.clear()
          navigate("/login")
     }
     return (
          <div className='group-header'>
               <h1 className='group-title'>{title}</h1>
               <Link to={"/login"}>
                  <button> Connexion </button>
               </Link>
              <Link to={"/inscription"}> 
                  <button> Inscription </button>
              </Link> 
            
                <button onClick={deconnexion}>
                     Deconnexion </button>     
          </div>
     )
  
}

export default Headerun