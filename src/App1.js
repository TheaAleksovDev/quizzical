import React from "react"
import Question1 from "./Question1"
export default function App1(){
    const [allQuestions, setAllQuestions] = React.useState([])
    const [question, setQuestion] = React.useState({
        question: "",
        incorrectAnswers: [],
        correctAnswer: "",
        answers : []
    })

    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
         .then(res => res.json())
         .then(data => setAllQuestions(data.results))
    },[])
    // console.log(allQuestions)
    const questions = allQuestions.map(quest => {
        setQuestion(
            question = quest.question,
            incorrectAnswers = quest.incorrect_answers,
            correctAnswer = quest.correct_answer
            )
        return(
            <Question1 
                question = {quest.question}
                answer = {quest.correct_answer}
            />
        )
    })
    console.log(questions)
}