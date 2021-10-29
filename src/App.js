import React, { useEffect, useState } from 'react';
import Card from './Components/Card/Card'
import './assets/style.css'
import quizService from './quizService';
import Result from './Components/Result';
const App = () => {
  const [questionBank, setQuestion] = useState([])
  // console.log(questionBank)
  const [score, setScore] = useState(0)
  console.log(score)
  const [res, setRes] = useState(0)
  console.log(res)

  const getQuestions = () => {
    quizService().then(question => {
      setQuestion(question)
    })
  }
  useEffect(() => {
    getQuestions()
  }, [])

  const compAns = (answer, correct) => {
    if (answer === correct) {
      setScore(score + 1)

    }
    res < 5 ? setRes(res + 1) : setRes(5)
  }

  const playAgain = () => {
    getQuestions()
    setScore(0)
    setRes(0)
  }
  return (



    <div className="containers">
      <div className="title">Quizbee</div>
      {
        questionBank.length > 0 &&
        res < 5 &&
        questionBank.map((question) => {
          return <Card key={question.questionId} question={question} selected={(answer) => compAns(answer, question.correct)} />
        })
      }
      {
        res === 5 ? <Result score={score} playAgain={playAgain} /> : null
      }

    </div>

  );
};

export default App;