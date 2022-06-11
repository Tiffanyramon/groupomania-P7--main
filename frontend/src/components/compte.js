import '../styles/compte.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Layout from '../layouts/layout';
import {useNavigate } from 'react-router-dom';
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
       axios.get("http:8//localhost:3001/api/article")
       .then((result) => {
           setArticles(result.data.articles)
       })
       .catch((error) => console.log(error))
   },[])    

}

export default Compte