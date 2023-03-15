import React from 'react';
import './SingleQuestion.css'
const SingleQuestion = ({Question}) => {
    console.log(Question);
    const {question,options} = Question;
    return (
        <div className='singleQuestion'>
           <h2>{question}</h2>
           {
            options.map(q => <div className='singleOption'>
                <input type="radio" value={q} name="gender" />{q}
            </div>)
           }
        </div>
    );
};

export default SingleQuestion;