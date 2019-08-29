import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    const pointer = {
        cursor: 'pointer'
    }

    return (
        <div className="Person" style={style}>
            <p 
                style = {pointer}
                onClick={props.click}>Hello!! I am {props.race} {props.species}. {props.children}</p>
            <input onChange={props.changed}></input>
        </div>
    )
}

export default Radium(person);