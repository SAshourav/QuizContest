import React from 'react';
import './Home.css';
import { Link, useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Home = () => {
    const handleQuiz = (quiz) =>{
        <Link to={`/quiz/${quiz.id}`}></Link>
        console.log('quiz clicked');
    }
    const data = useLoaderData().data;
    return (
        <div className='quiz-container'>
            {
                data.map(quiz => <SingleQuiz handleQuiz={handleQuiz} key={quiz.id} quiz={quiz}></SingleQuiz>)
            }
        </div>
    );
};

export default Home;