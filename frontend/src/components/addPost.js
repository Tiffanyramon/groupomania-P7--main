import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddPost = ({ user }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formdata = new FormData();
    formdata.append('message', data.message);
    formdata.append('image', data.image[0]);
    formdata.append('userid', user.id);
    axios
      .post('http://localhost:3001/api/article', formdata)
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main">
      <div className="partage">
        <div className="exprime">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="">exprimez-vous...</label>
              <input type="text" {...register('message')} />
              <input type="file" {...register('image')} />
            </div>
            <button> publiez </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
