import React from 'react';
import './Home.css';
import {  useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Home = () => {
    const data = useLoaderData().data;
    return (
        <div className='quiz-container'>
            {
                data.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)
            }
        </div>
    );
};

export default Home;