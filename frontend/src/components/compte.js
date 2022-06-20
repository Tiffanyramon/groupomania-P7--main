import '../styles/compte.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Compte(){
   const [articles, setArticles] = useState([])
   const [user, setUser] = useState()
   const navigate = useNavigate()
   useEffect(() => {
       axios.get("http://localhost:3001/api/user")
       .then((result) =>{
           setUser(result.data.user)
       })
       axios.get("http://localhost:3001/api/article")
       .then((result) => {
           setArticles(result.data.articles)
       })
       .catch((error) => console.log(error))
   },[])  
   
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

   return (
    <Layout>
        <div className="params">
            <Link to={"/parametre"}>
                <button> paramètres </button>
            </Link>
        </div>
    </Layout>

)

}



export default Compte