import React from 'react';
import './Calculator.css';
import MyDisplay from './MyDisplay';

function MyButton(props){
    const handleclick = (e) => {props.buttonClicked(e.target.value);};
    return(
        <div className="button">
            <div>
                <button  className='but but-action' onClick={handleclick} value="c">C</button>
            </div>
        </div>
    )

}
export default MyButton;
