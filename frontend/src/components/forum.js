import '../styles/forum.css';
import axios from 'axios';
import Layout from '../layouts/layout';
import { useEffect, useState } from 'react';
import modifyPost from'./modifyPost';
import addPost from './addPost';

function Forum(){
         const [isUpdated, setIsUpdated] = useState(false);
         const [textUpdated, setTextUpdated] = useState(null);
         const [articles, setArticles] = useState([])
         const [user, setUser] = useState()
      
    useEffect(()=>{
        axios.get("http://localhost:3001/api/user/profil")
        .then((result) => { 
            setUser(result.data.user);
        });
        
         getPost();
    },[]);
        
    const getPosts = () => {
        axios.get("http://localhost:3001/api/article")
        .then((result) =>{ 
         setArticles(result.data.articles);
        })
        .catch((error)  => console.log(error));
    };
       
    const like = (postId) => {
        axios.post('http://localhost:3001/api/article/' + postId + '/like')
        .then(() => {
          getPosts();
        });
    };
            
     
    return (
        <Layout>
          <addPost user={user} />
    
          {articles.map((article) => {
            return (
              <div>
                <div className="card">
                  <header className="card-header">
                    <div className="card-title">
                      {article.nom}-{article.prenom}
                    </div>
                  </header>
                  {user.id === article.userid && (
                    <div className="button-container">
                      <div>
                        <button
                          onClick={() => {
                            setIsUpdated(!isUpdated);
                            setCurrentPost(article.id);
                          }}
                        >
                          Modifier
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="card-message">
                    <img src={article.imageurl} alt="" />
                    {article.message}
                    {isUpdated && article.id === currentPost && (
                      <modifyPost article={article} />
                    )}
                  </div>
                </div>
                <footer className="card-footer">
                  <div className="like">
                    <button onClick={() => like(article.id)}>like</button>
                    {article.nombrelike}
                  </div>
                  {/* <div className="commentaire">
                    <label htlmFor="">commentaire</label>
                    <input type="text" {...register('messageUpdated')} />
                    <button> envoyez </button>
                  </div> */}
                </footer>
              </div>
            );
          })}
        </Layout>
      );
  
            }

export default Forum