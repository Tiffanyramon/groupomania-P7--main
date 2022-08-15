import '../styles/connexion.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layoutun';
import {Link,useNavigate } from 'react-router-dom'; 
import { useEffect} from 'react';


function Connexion(){
    
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
// connexion faite si le token est vérifié 
        axios.post("http://localhost:3001/api/user/login", data)
        .then((result) => {
            localStorage.token =result.data.token
            axios.defaults.headers.common.Authorization = "Bearer " + result.data.token
            navigate("/")
        })
        .catch((error) => console.log(error))
    }

    return (
        <Layout>
             
        <div className="container">
             <div className="formulaire">
                 <form  onSubmit={handleSubmit(onSubmit)} action="" method="post">
                 <h1>Connexion</h1>
                 <div className="ligne">
                    <div className='cate'>
                     <label htmlFor="">Email</label>
                     </div>
                     <input type="email" {...register('email')} />
                 </div>
                 <div className="ligne">
                 <div className='cate'>
                     <label htmlFor="">Mot de passe</label>
                     </div>
                     <input type="password" {...register('password')} />
                 </div>
                 
                 <button>Connexion</button>
                
                 <form  onSubmit={handleSubmit(onSubmit)} action="" method="post"></form>

                   {/* navigation au components inscription */}
                     <Link to={"/inscription"}>
                     <a>Nouveau?<button>Inscrivez-vous!</button></a>
                     </Link>
                 </form>
             </div>

  <div class="drop drop-1"></div>
  <div class="drop drop-2"></div> 
  <div class="drop drop-3"></div>
  <div class="drop drop-4"></div>
  <div class="drop drop-5"></div>
  <div class="drop drop-6"></div>
        </div>
    </Layout>
        
    )
   
  
}

export default Connexion