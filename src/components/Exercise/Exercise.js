import React from 'react';
import './Exercise.css'
const Exercise = (props) => {

    const { img, name, detail, time } = props.exercise;
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <p className='exercise-name'>{name}</p>
                <p>{detail}</p>
                <p className='time'>Time required: {time}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.exercise)} className='btn-list'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;