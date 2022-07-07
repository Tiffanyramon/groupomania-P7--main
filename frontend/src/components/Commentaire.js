 import {useForm} from 'react-hook-form';
 import axios from 'axios';
 
const Commentaire =({ user }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit =( data ) => {
        const formdata = new FormData();
        formdata.append('message', data.message);
        formdata.append('image', data.image[0]);
        formdata.append('userid', user.id);
        axios
        .post('http://localhost:3001/api/commentaire', formdata)
        .then((result) => {
            window.location.reload();
        })
        .catch((error) => console.log(error));
    };

    return (
        
        <div className="commentaire">
                <label htlmFor="">commentaire</label>
                <input type="text" {...register('messageUpdated')} />
                <button> envoyez </button>
              </div> 
    )
} 

 