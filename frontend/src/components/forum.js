import '../styles/forum.css';
import axios from 'axios';
import Layout from '../layouts/layout';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import ModifyPost from './ModifyPost';
import AddPost from './AddPost';
import Commentaire from './Commentaire';
// import '/.fontawesome';


function Forum() {
  const [isUpdated, setIsUpdated] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/api/user/profil').then((result) => {
      setUser(result.data.user);
    });

    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get('http://localhost:3001/api/article')
      .then((result) => {
        setArticles(result.data.articles);
      })
      .catch((error) => console.log(error));
  };

  const like = (postId) => {
    axios
      .post('http://localhost:3001/api/article/' + postId + '/like')
      .then(() => {
        getPosts();
      });
  };

  return (
    <Layout>
       
      <AddPost user={user} />
      {articles.map((article) => {
        return (
          <div>
            <div className="post">
            <div className="card">
              <header className="card-header">
                <div className="card-title">
                  {article.nom} {article.prenom}
                </div>

              </header>
              <div className="card-message">
                <img src={article.imageurl} alt="" />
                {article.message}
                {isUpdated && article.id === currentPost && (
                  <ModifyPost article={article} />
                )}
              </div>

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

            <footer className="card-footer">
              <div className="like">
                 <button onClick={() => like(article.id)}>  like  </button>  
                {article.nombrelike}
              </div>
              {/* <Commentaire user={user} /> */}
            </footer>
            </div>
            </div>
            <div class="drop drop-1"></div>
            <div class="drop drop-2"></div>
            <div class="drop drop-3"></div>
            <div class="drop drop-4"></div>
            <div class="drop drop-5"></div>
            <div class="drop drop-6"></div>
            </div>
            
        );
      })}
    </Layout>
  );
}

export default Forum;
