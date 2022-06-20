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