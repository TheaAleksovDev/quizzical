import React from "react"

export default function Question(){
    const [question, setQuestion] = React.useState({
        question: "",
        incorrectAnswers: [],
        correctAnswer: "",
        answers : []
    })
    const [data,setData] = React.useState({})
    const [allQuestions, setAllQuestions] = React.useState([])
    
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
         .then(res => res.json())
         .then(data => setData(data.results))
    },[])
    function random(incorrect){
        const random = Math.floor(Math.random() * incorrect.length)
        return random
    }
    function getRandomQuestions(){
            setQuestion(prevQuestion => {
                const selectedQuestion = data[Math.floor(Math.random() * 5)]
                const random = Math.floor(Math.random() * question.incorrectAnswers.length)

                function answerssFunction() {
                    for(let i=0; i<question.incorrectAnswers.length ; i++){
                        if(!question.incorrectAnswers.includes(question.correctAnswer)){
                            question.incorrectAnswers.splice(random(question.incorrectAnswers), 0, question.correctAnswer)
                        }else{
                            return question.incorrectAnswers
                        }
                    }
                    
                }
                const answerss = answerssFunction()
                return{
                    question : selectedQuestion.question,
                    correctAnswer: selectedQuestion.correct_answer,
                    incorrectAnswers: selectedQuestion.incorrect_answers,
                    answers : answerss

                }
            })
            
           console.log(question)     
    }
    
    return(
        <div>
             <button onClick={getRandomQuestions}>New Questions</button>
             
        </div>
    )
}