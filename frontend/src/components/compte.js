import '../styles/forum.css'; 
import { useForm } from 'react-hook-form'; //formulaire 
import axios from 'axios'; // relation
import Layout from '../layouts/layout'; // composant
import {useNavigate, } from 'react-router-dom'; // navigation 
import { useEffect, useState } from 'react'; // déclencher une fonction, fonction paramètre
import ModifyPost from './modifyPost'; 

import {IoIosHeart} from 'react-icons/io'; // icons


function Compte(){ 
// ?? (constante à déclarer pour utiliser usestate)
   const [articles, setArticles] = useState([])
   const [isUpdated] = useState(false);
   const [currentPost ] = useState(null);
   const [user, setUser] = useState()

   const navigate = useNavigate()


   useEffect(() => {
    // connexion avec le token pour avoir la page sinon revoie connexion 
       if(!localStorage.token) {
        navigate("./login");
       }
      //revoie le profil de l'utilisateur + les articles créés par lui
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
// retour des j'aimes
const like = (postId) => {
    axios.post("http://localhost:3001/api/article/"+ postId +"/like")
   } 
// suppresion de l'utilisateur une fois supprimé retour à la page connexion 
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
                    // suppression au clique 
                      onClick={() => { supprimer()}} >
                     Supprimer compte
                    </button>
                  </div>
                </div>
            
            </div>
            {/* pour aficher les posts  */}
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