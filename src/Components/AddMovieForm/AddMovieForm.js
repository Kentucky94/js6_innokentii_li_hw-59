import React from 'react';
import './AddMovieForm.css';

const AddMovieForm = (props) => {
    return (
        <div className='form_container'>
            <input onChange={props.onChange} className='AddTaskInput' type="text" placeholder='Add new movie'/>
            <button onClick={props.add} className='btn'>Add movie</button>
        </div>
    )  
};

export default AddMovieForm;