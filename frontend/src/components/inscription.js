import '../styles/inscription.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layoutun';
import {useNavigate } from 'react-router-dom';

function Inscription(){

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm();

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
                            <label htmlFor="">nom</label>
                            <input type="text" {...register('nom')}/>
                        </div>
                        <div className="ligne2">
                            <label htmlFor="">prénom</label>
                            <input type="text"{...register('prenom')}/>
                        </div>
                        <div className="ligne2">
                            <label htmlFor="">email</label>
                            <input type="email" {...register('email')} />
                        </div>
                        <div className="ligne2">
                            <label htmlFor="">mot de passe</label>
                            <input type="password" {...register('password')} />
                        </div>
                          
                            <button>inscription</button>
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
//Texte valide sans chiffre
function validateText(value) {
    if(value.match(/^([^0-9]*)$/)) {
        return true
    }
    return false
}

//mail valide si @
function validateEmail(value) {
    if(value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)) {
        return true;
    }
    return false;
}




export default Inscription