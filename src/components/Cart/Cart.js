import React from 'react';
import './Cart.css'
import logo from '../../images/person.jpg'
const Cart = ({ cart }) => {

    let time = 0;
    for (const exercise of cart) {
        time = time + exercise.time;
    }
    return (
        <div className='cart'>

            <div className='person'>
                <img src={logo} alt="" />
                <h3>Niloy Modak <br /> <small>Sylhet, Bangladesh</small></h3>
            </div>

            <div className='person-detail'>
                <p>60kg <br /><small>Weight</small></p>
                <p>5.5 <br /> <small>Height</small></p>
                <p>27yrs <br /> <small>Age</small></p>
            </div>

            <h3>Add A Break</h3>
            <div>
                <button className='btn-time'>10s</button>
                <button className='btn-time'>20s</button>
                <button className='btn-time'>30s</button>
                <button className='btn-time'>40s</button>
                <button className='btn-time'>50s</button>
            </div>
            <h3>Exercise Details</h3>
            <p className='ex-time'>Exercise time: {time}s</p>
            <p className='br-time'>Break time: { }</p>

            <button className='btn-active'>Activity Completed</button>
        </div>

    );
};

export default Cart;