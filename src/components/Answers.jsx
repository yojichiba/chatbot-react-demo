import React from 'react';
import {Answer} from './index.js';

const Answers = (props) => {

    return (
        <div className='c-grid_answer'>
            {props.answers.map((value, index) => {
                return <Answer answer={props.answers[index]} key={index.toString()} select={props.select} />
            })}
        </div>
    )
}

export default Answers;