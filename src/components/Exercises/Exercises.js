import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);
    const handleAddToCart = (exercise) => {
        console.log(exercise);
        const newCart = [...cart, exercise]
        setCart(newCart);
    }

    return (
        <div>
            <div className='exercise-container'>
                <div className="component-container">
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToCart={handleAddToCart}
                        ></Exercise>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Exercises;