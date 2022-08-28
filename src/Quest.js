import React from "react"

export default function Quest(props){
    return(
        <div className="question">
        <h1>{props.question}</h1>
        <h2>{props.answers}</h2>
        </div>
    )
}