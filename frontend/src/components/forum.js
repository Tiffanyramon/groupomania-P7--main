import '../styles/forum.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Forum(){
        const [articles, setArticles] = useState([])
        const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/api/article")
        .then((result) =>{
         setArticles(result.data.articles)
        })
        .catch((error)  => console.log(error))
    })
        const { register, handleSubmit } = useForm();
   
        const onSubmit = (data) => {
            axios.post("http://localhost:3001/api/article", data)
            .then((result) => {
                localStorage.token = result.data.token
                navigate("/forum")
            })
            .catch((error) => console.log(error))
        }
        return (
            <Layout>
    
                <div>
                    < div className="exprime">
                        <form onSubmit= {handleSubmit(onSubmit)} action="" method="post">
                            
                            <div>
                                <label htmlFor="">exprimez-vous...</label>
                                <input type="text"{...register('message')} />
                             </div>
                             <button>
                                                 Puliez </button>   
                                </form> 
                
                    </div>
                </div>
               {articles.map(article=>{
                   return(
                       <div>
                           {article.message} 
                       </div>
                   )
               })}
            </Layout>
        )
  
}

export default Forum