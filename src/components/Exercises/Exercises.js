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

                <div>
                    <h3>Question: How does React work?</h3>
                    <h5>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It’s possible to have as many components as necessary without cluttering your code.</h5>
                    <h3>Question: Difference between Props and State?</h3>
                    <h5>Answer: <br />
                        Props: <br />
                        1.The Data is passed from one component to another. <br />
                        2.It is Immutable (cannot be modified). <br />
                        3.Props can be used with state and functional components. <br />
                        4.Props are read-only. <br />
                        State: <br />
                        1.The Data is passed within the component only. <br />
                        2.It is Mutable ( can be modified). <br />
                        3.State can be used only with the state components/class component (Before 16.0). <br />
                        4.State is both read and write.
                    </h5>
                    <h3>Question: Why useeffect is used in react?</h3>
                    <h5>Answer:The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.</h5>

                </div>
            </div>
        </div>
    );
};

export default Exercises;