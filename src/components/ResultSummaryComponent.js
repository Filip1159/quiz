import React, {useContext} from 'react'
import {QuizContext} from "../store/QuizContext";
import {questions, topics} from "../store/QuizData";

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
            <div>{topicName}</div>
            <div>{`You answered correctly to ${correctCount}/3 questions!`}</div>
            <div>Congratulations!</div>
        </div>
    )
}