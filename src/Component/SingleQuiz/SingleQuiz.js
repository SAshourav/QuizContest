import React from 'react';
import { Link } from 'react-router-dom';
import './SingleQuiz.css';

const SingleQuiz = ({quiz}) => {
    return (
        <div className='container'>
            <div className='quiz-logo'>
                <img src={quiz.logo} alt="" />
            </div>
            <div className='quiz-details'>
                <h2>{quiz.name}</h2>
                <p>Number of question {quiz.total}</p>
                <Link className='btn' to={`/quiz/${quiz.id}`}>Take Quiz</Link>
            </div>
        </div>
    );
};

export default SingleQuiz;