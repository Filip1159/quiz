import React, {useContext} from 'react'
import {QuizContext} from "../store/QuizContext";
import {questions, topics} from "../store/QuizData";
import './../styles/ResultSummaryComponent.css'
import './../styles/fancyButton.css'
import {Link} from "react-router-dom";

const summaryText = score => {
    switch (score) {
        case 0: return "Ughhh... Try again"
        case 1: return "Keep learning!"
        case 2: return "You're nearly there!"
        case 3: return "Well done! Congrats!"
    }
}

export const ResultSummaryComponent = () => {
    const { state: { responses, topic } } = useContext(QuizContext)
    const question = questions[topic]
    const topicName = topics[topic]

    const correctAnswers = question.map(q => q.correct)
    const correctCount = correctAnswers
        .map((answer, i) => answer === responses[i])
        .reduce((acc, val) => val ? acc + 1 : acc, 0)

    console.log(correctAnswers)
    console.log(responses)

    const percentageScore = Math.round(correctCount * 100 / 3)

    return (
        <div className="resultSummaryComponent">
            <h1>{`Your score is: ${percentageScore}%`}</h1>
            <div id="topicName">{topicName}</div>
            <div>{`You answered correctly to ${correctCount}/3 questions!`}</div>
            <div>{summaryText(correctCount)}</div>
            <Link to={'/review'}>
                <button className="fancyButton">Review Your answers</button>
            </Link>
        </div>
    )
}