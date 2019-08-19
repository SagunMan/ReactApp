import React from 'react';
import './Person.css';

const person = (props) => {
    const style = {
        cursor: 'pointer'
    };
    return (
        <div className="Person">
            <p
                style={style}
                onClick={props.click}>Hello!! I am {props.race} {props.species}. {props.children}</p>
            <input onChange={props.changed}></input>
        </div>
    )
}

export default person