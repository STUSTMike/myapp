import React from 'react';

function MyDisplay(props){
    return (
        <div className="display">
            {props.result === " " ? "0" : props.result}
        </div>
    );
} // Add the missing closing curly brace here

export default MyDisplay;