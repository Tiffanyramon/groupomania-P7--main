import '../styles/inscription.css';
import { useForm } from 'react-hook-form';// rect-hook_form prend en charge la vadiation du formulaire
import axios from 'axios';// axios prend en charge les requêtes et reçois les réponses du serveur transforme et convertit en JSON
import Layout from '../layouts/layoutun';// composant
import {useNavigate } from 'react-router-dom';// navigation 

function Inscription(){

    const navigate = useNavigate()

    const { register, handleSubmit,formState: {errors} } = useForm();

    const onSubmit = (data) => {
        // .post envoie l'utilisateur crée 
        axios.post("http://localhost:3001/api/user/signup", data)
        .then((result) => {
            axios.post("http://localhost:3001/api/user/login",data)
            .then((result) =>{
                localStorage.token = result.data.token
                axios.defaults.headers.common.Authorization = "Bearer " + result.data.token
                navigate("/")    
            }
            
            )
           
        })
        .catch((error) => console.log(error))
    }

    return (
        <Layout>

            <div className= "container">
                < div className="formulairedeux">
                    <form onSubmit= {handleSubmit(onSubmit)} action="" method="post">
                        <h1>Inscription</h1>
                        <div className="ligne2">
                         <div className='cate'>
                            <label htmlFor="">Nom</label>
                            </div>
                            <input type="text" {...register('nom',{pattern :/^([^0-9]*)$/ })}/>
                            {errors.nom && "doit contenir que des lettres"}
                        </div>
                        <div className="ligne2">
                            <div className='cate'>
                            <label htmlFor="">Prénom</label>
                            </div>
                            <input type="text"{...register('prenom',{pattern :/^([^0-9]*)$/ })}/>
                            {errors.prenom && "doit contenir que des lettres"}
                        </div>
                        <div className="ligne2">
                            <div className='cate'>
                            <label htmlFor="">Email</label>
                            </div>
                            <input type="email" {...register('email',{pattern : /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi })} />
                            {errors.email && "doit contenir une @"}
                        </div>
                        <div className="ligne2">
                            <div className='cate'>
                            <label htmlFor="">Mot de passe</label>
                            </div>
                            <input type="password" {...register('password',{pattern :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/ })} />
                              {errors.password && "doit faire minimun 7 lettres, 1 majuscule, 1 chiffre"}
                        </div>
                        <h2>Doit contenir 7 lettres,<br/> 1 majuscule, 1 chiffre</h2>
                            <button>Inscription</button>
                            </form> 
            
                </div>
            
  <div className="drop drop-7"></div>
  <div className="drop drop-8"></div>
  <div className="drop drop-9"></div>
  <div className="drop drop-10"></div>
  <div className="drop drop-11"></div>
  <div className="drop drop-12"></div>
            </div>

        </Layout>
      
    )
   
}



export default Inscription