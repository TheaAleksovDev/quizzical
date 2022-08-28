import React from "react"
import Question1 from "./Question1"
import "./styles.css"

export default function App1(){
    const [allQuestions, setAllQuestions] = React.useState([])
    const [apiCall, setApiCall] = React.useState(false)
    const [question, setQuestion] = React.useState({
        question: "",
        answer: ""
    })
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
         .then(res => res.json())
         .then(data => setAllQuestions(data.results))
    },[apiCall])

    function newQuestions(){
        setApiCall(prevApiCall => !prevApiCall)     
    }

    function answersFunction(){
        const answers =[]
        allQuestions.map(quest => {
        answers = quest.incorrect_answers
        const random = Math.floor(Math.random() * answers.length)
        const correct = quest.correct_answer
        answers.splice(random, 0 , correct)})
        return answers
    }

    const questions = allQuestions.map(quest => {
        

        return(
            <Question1 
                question = {quest.question}
                answers = {quest.correct_answer}
            />
        )
        })
    console.log(allQuestions)
    return(
        <div>
            <button onClick={newQuestions}></button>
            {questions}
            
        </div>
    )
}