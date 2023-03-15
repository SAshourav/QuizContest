import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import Home from './Component/Home/Home';
import Account from './Component/Account/Account';
import Blog from './Component/Blog/Blog';
import QuizPage from './Component/QuizPage/QuizPage';
import Result from './Component/Result/Result';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/account',
          element: <Account></Account>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizPage></QuizPage>
        },
        {
          path: '/result',
          element: <Result></Result>
        }
      ]
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
