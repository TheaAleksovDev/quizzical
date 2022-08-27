import React from "react"
import Quest from "./Quest"
import { nanoid } from 'nanoid'

export default function Ap(){
    const [question, setQuestion] = React.useState({
        questionText: "",
        incorrectAnswers: [],
        correctAnswer: "",
        answers : []
    })
    const [allQuestions,setAllQuestions] = React.useState(AllNewQuestions())
    const [data,setData] = React.useState({})



    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
         .then(res => res.json())
         .then(data => setData(data.results))
    },[])


   
    
    function generateNewQuestion(incorrect, correct){
        const selectedQuestion = data[Math.floor(Math.random() * 5)]
         function answerssFunction() {
        
        for(let i=0; i<incorrect.length ; i++){
            if(!incorrect.includes(correct)){
                incorrect.splice(random(incorrect), 0, correct)
            }else{
                return selectedQuestion.incorrectAnswers
            }
        }
                    
    }
             
        const answerss = 
        setQuestion(
                    {questionText : selectedQuestion.question,
                    correctAnswer: selectedQuestion.correct_answer,
                    incorrectAnswers: selectedQuestion.incorrect_answers,
                    answers : answerssFunction(question.incorrectAnswers, question.correctAnswer)})
                    console.log(question) 
    }

    function AllNewQuestions(){
        const newQuestions = []
        for (let i=0; i<5; i++){
            newQuestions.push(generateNewQuestion(incorrectAnswers,correctAnswer))
        }
    }
    return(
        <div>
             <button onClick={generateNewQuestion(incorrectAnswers,correctAnswer)}>New Questions</button>
             
        </div>
    )
}