import axios from 'axios';
import { useForm } from 'react-hook-form';

const ModifyPost = ({ article }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formdata = new FormData();
    formdata.append('message', data.message);
    formdata.append ('image', data.image[0]);

    axios
      .put('http://localhost:3001/api/article/' + article.id, formdata)
      .then((result) => {
         window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="update-post">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea  defaultValue={article.message} {...register('message')} />
        <input type="file" defaultValue={article.image} {...register('image')} /> 
        <div className="button-container">
          <button className="btn">valider modifiction</button>
        </div>
      </form>
    </div>


   
  );
  
};

export default ModifyPost;
