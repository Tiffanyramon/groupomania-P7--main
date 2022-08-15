import '../styles/forum.css';
import axios from 'axios';
import Layout from '../layouts/layout';
import { useEffect, useState } from 'react';

// impot icons
import {IoIosHeart} from 'react-icons/io'; 
import {TiTrash} from 'react-icons/ti';
import{FaPencilAlt} from 'react-icons/fa';

// import components 
import ModifyPost from './modifyPost';
import AddPost from './addPost';

import {useNavigate} from 'react-router-dom';

function Forum() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
// page affiché si token sinon retour connexion
    if(!localStorage.token) {
      navigate('./login');
    }
    axios.get('http://localhost:3001/api/user/profil').then((result) => {
      setUser(result.data.user);
    });

    getPosts();
  }, []);
//  constante pour afficher les posts créés 
  const getPosts = () => {
    axios
      .get('http://localhost:3001/api/article')
      .then((result) => {
        setArticles(result.data.articles);
      })
      .catch((error) => console.log(error));
  };
// constante pour afficher les likes sur chaque posts 
  const like = (postId) => {
    axios
      .post('http://localhost:3001/api/article/' + postId + '/like')
      .then(() => {
        getPosts();
      });
  };
// constante pour supprimer un post par son utilisateur 
  const supprimer = (postId) => {
    axios
    .delete('http://localhost:3001/api/article/' + postId )
    .then (()=> {
      getPosts();
    });
  }
  if(!user){
    return"chargement"
  }
  return (
    <Layout>
      
      <AddPost user={user} />
    {/* post retourné par la méthode map() sous forme de tableau */}
      {articles.map((article) => {
        return (
          <div>
            <div className='post'>
            <div className="card">
              <header className="card-header">
                <div className="card-title">
                  {article.nom} {article.prenom}
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
              
              {/* l'admin et l'utilisateur puissent supprimer le post */}
              {(user.admin || user.id === article.userid ) && (
                <div className="button-container">
                  <div>
                    <button
                      onClick={() => {
                        setIsUpdated(!isUpdated);
                        setCurrentPost(article.id);
                      }}
                    ><FaPencilAlt/></button>
                    <div className="supprimer">
                <button onClick={() => supprimer(article.id)}><TiTrash/></button>
              </div>
                  </div>
                </div>
              )}
             {/* pour aimé ou non un commentaire au clique */}
            <footer className="card-footer">
              <div className="like">
                <button onClick={() => like(article.id)}><IoIosHeart/> </button>
                {article.nombrelike}
              </div>
              
     
              
            </footer>
            </div>
            </div>
          </div>
        );
      
      })}
     
    </Layout>
  );
}

export default Forum;


