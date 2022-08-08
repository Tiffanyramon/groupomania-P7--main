import '../styles/forum.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ModifyPost from './modifyPost';

import {IoIosHeart} from 'react-icons/io';


function Compte(){

 

   const [articles, setArticles] = useState([])
   const [isUpdated, setIsUpdated] = useState(false);
   const [currentPost, setCurrentPost] = useState(null);
   const [user, setUser] = useState()

   const navigate = useNavigate()


   useEffect(() => {
       if(!localStorage.token) {
        navigate("./login");
       }
       axios.get("http://localhost:3001/api/user/profil")
       .then((result) =>{
           setUser(result.data.user)
           axios.get("http://localhost:3001/api/article/all/" + result.data.user.id)
           .then((result) => {
               setArticles(result.data.articles)
           })
           .catch((error) => console.log(error))
       })
       }
       ,[])  
   
const { register,handleSubmit } = useForm();

const onSubmit =(data) => {

    axios.post("http://localhost:3001/api/article", {...data,userid:user.id})
    .then((result)=> {
        window.location.reload()
    })
    .catch((error) => console.log(error))
}
const like = (postId) => {
    axios.post("http://localhost:3001/api/article/"+ postId +"/like")
   } 

   const supprimer = (userId) => {
    axios
    .delete('http://localhost:3001/api/user/' )
    .then (()=> {
      localStorage.clear()
      navigate("/login");
    });
  }
  if(!user){
    return"chargement"
  }
  
    return (

        <Layout>
            <div className="buttonplus">
                <div className="button-container">
                  <div>
                    <button
                      onClick={() => { supprimer()}} >
                     Supprimer compte
                    </button>
                  </div>
                </div>
            
            </div>
            
            {articles.length ? articles.map(article=>{
                return(
                    <div>
            <div className='card'>
                <header className='card-header'>
                    <div className='card-title'>
                        {article.nom}-{article.prenom}
                    </div>
                </header>
       
            <div className="card-message">
                <img src={article.imageurl} alt="" />
                <div className='m'>
                {article.message}
                </div>
                {isUpdated && article.id === currentPost && (
                  <ModifyPost article={article} />
                )}
              </div>

            <footer className="card-footer">
              <div className="like">
               <IoIosHeart/>
                {article.nombrelike}
              </div>
             
            </footer>
            </div>
            </div>
           )
               
            }):null}
            
        </Layout>

    
    
    )
   }

export default Compte