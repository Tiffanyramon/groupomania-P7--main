// rect-hook_form prend en charge la vadiation du formulaire
import { useForm } from 'react-hook-form';
// axios prend en charge les requêtes et reçois les réponses du serveur transforme et convertit en JSON
import axios from 'axios';

const AddPost = ({ user }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formdata = new FormData();
    formdata.append('message', data.message);
    formdata.append('image', data.image[0]);
    formdata.append('userid', user.id);
    
    axios
       // .post envoie l'article crée 
      .post('http://localhost:3001/api/article', formdata)
      // .then retourne le resultat avec window.location.reload
      .then((result) => {
         window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <div className="partage">
        <div className="exprime">
         {/* formulaire */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className='vous'>
              <label htmlFor="">Exprimez-vous...</label>
              </div>
              <div className='input'>
              <input type="file"{...register('image')}  />
              <input type="text" {...register('message')} />
              </div>
            </div>
            <div className="publiez">
            <button> Publiez </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
