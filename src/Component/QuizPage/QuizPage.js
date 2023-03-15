import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './QuizPage.css';

const QuizPage = () => {
    const selectedQuiz = useLoaderData().data;
    const {total,name} = selectedQuiz;
    const allQuestions = selectedQuiz.questions;
    const nav = useNavigate();
    const click = () =>{
        alert('Submitted');
        nav('/result');
    }
    return (
        <div>
            <h2>Exam Based On : <span>{name}</span></h2>
            <h3>Total Question To Answer: {total}</h3>
            {
                allQuestions.map(question => <SingleQuestion Question={question}></SingleQuestion>)
            }
            <button onClick={click}>Submit</button>
        </div>
    );
};

export default QuizPage;