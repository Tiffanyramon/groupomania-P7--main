import '../styles/forum.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Forum(){
         const update_post = "update_post";
         const [isUpdated, setIsUpdated] = useState(false);
         const [textUpdated, setTextUpdated] = useState(null);
        const [articles, setArticles] = useState([])
        const [user, setUser] = useState()
        const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3001/api/user/profil")
        .then((result) => { console.log(result)
            setUser(result.data.user)
        })
        axios.get("http://localhost:3001/api/article")
        .then((result) =>{ 
         setArticles(result.data.articles)
        })
        .catch((error)  => console.log(error))
    },[])
        const { register, handleSubmit } = useForm();
    console.log(user)
        const onSubmit = (data) => { 
            const formdata = new FormData()
            formdata.append('message',data.message)
            formdata.append('image', data.image[0])
            formdata.append('userid', user.id)
            axios.post("http://localhost:3001/api/article", formdata)
            .then((result) => {
             window.location.reload()
            })
            .catch((error) => console.log(error))
        }
       const like = (postId) => {
        axios.post("http://localhost:3001/api/article/"+ postId +"/like")
       }
       // const updatePost = (podtId, message) => {
        //  return(dispatch){  payload ?
        //   .then((res) => { 

         // })
                
        // } 
        //   }
        const updateItem = async() => {
            
     }
        return (
            <Layout>
                <div className='main'>
                <div className="partage">
                    < div className="exprime">
                        <form onSubmit= {handleSubmit(onSubmit)} >
                            
                            <div>
                                <label htmlFor="">exprimez-vous...</label>
                                <input type="text"{...register('message')} />
                                <input type="file"{...register('image')} /> 
                             </div>
                             <button> publiez </button> 
                                          
                                </form> 
                
                    </div>
                </div>
                </div>


               {articles.map(article=>{
                console.log(user)
                   return(
                    <div>
                        <div className='card'>
                            <header className='card-header'> 
                                <div className='card-title'>
                                    {article.nom}-{article.prenom} 
                                </div>
                            </header>
                             {user.id === article.userid && (
                                 <div className='button-container'> 
                                    <div  onClick={() => setIsUpdated(!isUpdated)}>
                                     <ing src="" alt='edit'/>
                                     </div> 
                                     </div>
                             )} 
                            <div className='card-message'> 
                               
                               {article.imageurl}-{article.message}
                               
                                {isUpdated && (  
                                <div className='update-post'>
                                    <textarea  
                                     defaultValue={article.message} 
                                     onChange= {(e) => setTextUpdated(e.target.value)} 
                                     /> 
                                    <div className='button-container'>
                                        <button className='btn' onClick={updateItem}>valider modifiction</button>
                                    </div>
                                    </div>
                             )}  
                           </div>
                        </div>
                        <footer className='card-footer'>
                            <div className='like'>
                            <button onClick={()=>like(article.id)} >like</button>
                            </div>
                            <div className='commentaire'>
                                <label htlmFor="">commentaire</label>
                                 <input type="text"{...register('message')} />
                                 <button> envoyez </button>
                            </div>
                       
                        </footer>
                        
                       </div>
                   
                     
                   )
                 
               })}
            </Layout>
        )
  
            }

export default Forum