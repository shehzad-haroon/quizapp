import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { allquiz } from './Components/quiz_api'
import QueRender from './Components/QueRender';
import { QuestionType } from './Components/quiz_types';
function App() {
  let [data, setData] = useState<QuestionType[]>([])
  let [after, setAfter] = useState(0)
  let [score, setScore] = useState(0)
  let [endresult, setEndResult] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const question: QuestionType[] = await allquiz(5, 'easy')
      console.log(question)
      setData(question)
    }
    fetchData();
  }, [])
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    console.log(userAns)
    e.preventDefault()
    const question: QuestionType = data[after];
    console.log(question.correct_answer + " " + userAns)
    if (userAns === question.correct_answer){
      setScore(++score)
    }
    if (after !== data.length - 1)
      setAfter(++after);
    else {
      setEndResult(true)
    }
  }
  if (!data.length)
    return <h3>Loading...</h3>

    if(endresult){
      return(
        <div className="whole">
  <h3>Results</h3>
 <b> <p>YOUR FINAL SCORE  IS {score} OUT OF {data.length}</p></b>
  
        </div>
      )
    }
  return (
    <div className="App">
      <h1>Quiz App Created By Shehzad Haroon</h1>
      <QueRender
        options={data[after].Option}
        question={data[after].question}
        callback={handleSubmit}
      />
    </div>
  );
}
export default App;
