import '../styles/forum.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Forum(){
        const [articles, setArticles] = useState([])
        const [user, setUser] = useState()
        const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/api/user")
        .then((result) => {
            setUser(result.data.user)
        })
        axios.get("http://localhost:3001/api/article")
        .then((result) =>{ 
         setArticles(result.data.articles)
        })
        .catch((error)  => console.log(error))
    },[])
        const { register, handleSubmit } = useForm();
   
        const onSubmit = (data) => { 
            
        
            axios.post("http://localhost:3001/api/article", {...data,userid:user.id})
            .then((result) => {
             window.location.reload()
            })
            .catch((error) => console.log(error))
        }
       const like = (postId) => {
        axios.post("http://localhost:3001/api/article/"+ postId +"/like")
       }

        return (
            <Layout>
    
                <div className="partage">
                    < div className="exprime">
                        <form onSubmit= {handleSubmit(onSubmit)} >
                            
                            <div>
                                <label htmlFor="">exprimez-vous...</label>
                                <input type="text"{...register('message')} />
                             </div>
                             <button> publiez </button> 
                                          
                                </form> 
                
                    </div>
                </div>
               {articles.map(article=>{
                   return(
                    <div>
                       <div  className='main'>
                        <div className='card'>
                            <header className='card-header'>
                                <img src='' width='45' height='45'></img> 
                                <div className='card-title'>
                                    {article.nom}-{article.prenom} 
                                </div>
                            </header>
                            <div className='card-message'>
                                 {article.img}-{article.message}
                           </div>
                        </div>
                        <footer className='card-footer'>
                            <div className='like'>
                            <button onClick={()=>like(article.id)} >like</button>
                            </div>
                            <div className='comentaire'>
                                <label htlmFor="">commentaire</label>
                                 <input type="text"{...register('message')} />
                                 <button> envoyez</button>
                            </div>
                       
                        </footer>
                        
                       </div>
                       
                       </div>
                   )
                 
               })}
            </Layout>
        )
  
}

export default Forum