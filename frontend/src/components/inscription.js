import '../styles/inscription.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layoutun';
import {useNavigate } from 'react-router-dom';

function Inscription(){

    const navigate = useNavigate()

    const { register, handleSubmit,formState: {errors} } = useForm();

    const onSubmit = (data) => {
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

            <div classNam= "container">
                < div className="formulairedeux">
                    <form onSubmit= {handleSubmit(onSubmit)} action="" method="post">
                        <h1>Inscription</h1>
                        <div className="ligne2">
                            <label htmlFor="">Nom</label>
                            <input type="text" {...register('nom',{pattern :/^([^0-9]*)$/ })}/>
                            {errors.nom && "doit contenir que des lettres"}
                        </div>
                        <div className="ligne2">
                            <label htmlFor="">Prénom</label>
                            <input type="text"{...register('prenom',{pattern :/^([^0-9]*)$/ })}/>
                            {errors.prenom && "doit contenir que des lettres"}
                        </div>
                        <div className="ligne2">
                            <label htmlFor="">Email</label>
                            <input type="email" {...register('email',{pattern : /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi })} />
                            {errors.email && "doit contenir une @"}
                        </div>
                        <div className="ligne2">
                            <label htmlFor="">Mot de passe</label>
                            <input type="password" {...register('password',{pattern :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/ })} />
                              {errors.password && "doit faire minimun 7 lettres, 1 majuscule, 1 chiffre"}
                        </div>
                          
                            <button>Inscription</button>
                            </form> 
            
                </div>
            
  <div class="drop drop-7"></div>
  <div class="drop drop-8"></div>
  <div class="drop drop-9"></div>
  <div class="drop drop-10"></div>
  <div class="drop drop-11"></div>
  <div class="drop drop-12"></div>
            </div>

        </Layout>
      
    )
   
}



export default Inscription