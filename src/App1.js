import React from "react"
import Question1 from "./Question1"
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
    // const arr = ["kfe","ekffek"]
    // const t = "tea"
    // const random = Math.floor(Math.random() * arr.length)
    //  arr.splice(1, 0, t)
    // const fruits = ["Banana", "Orange", "Apple", "Mango"]
    // const kiwi= "kiwi"
    // fruits.splice(2, 0, kiwi)
    // console.log("neww:"+arr)
    const questions = allQuestions.map(quest => {
        const answers = quest.incorrect_answers
        const random = Math.floor(Math.random() * answers.length)
        const correct = quest.correct_answer
        answers.splice(random, 0 , correct)
    
        return(
            <Question1 
                question = {quest.question}
                answers = {answers}
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