import React from "react"

export default function Question1(props){
    return(
        <div className="question">
        <h1>QUESTION : {props.question}</h1>
        <h2>ANSWERS: {props.answers}</h2>
        </div>
    )
}