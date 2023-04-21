import React, {useContext, useReducer, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import './../styles/QuestionComponent.css'
import './../styles/fancyButton.css'
import {questions} from "../store/QuizData";
import {QuizContext} from "../store/QuizContext";

export const QuestionComponent = () => {
    const {dispatch} = useContext(QuizContext)
    const {topic, questionNumber} = useParams()
    const [questionNumberInt, setQuestionNumberInt] = useState(parseInt(questionNumber))

    const navigate = useNavigate()
    const [selectedRadio, setSelectedRadio] = useState(NaN)

    const question = questions[topic][questionNumberInt]

    const isButtonDisabled = isNaN(selectedRadio)

    const nextQuestion = () => {
        setSelectedRadio(NaN)
        if (questionNumberInt < 2) {
            dispatch({type: 'ADD_RESPONSE', response: selectedRadio})
            setQuestionNumberInt(questionNumberInt + 1)
            navigate(`/question/${topic}/${questionNumberInt + 1}`)
        } else {
            setQuestionNumberInt(0)
            navigate('/summary')
        }
    }

    return (
        <div className="questionComponentWrapper">
            <div className="questionComponent">
                <h1 className="header">{question.text}</h1>
                {
                    question.answers.map((answer, i) => (
                        <div className="radioWrapper" onClick={() => setSelectedRadio(i)}>
                            <input name={`radio${i}`} type="radio"
                                   checked={selectedRadio === i}/>
                            <label htmlFor={`radio${i}`}>{answer}</label>
                        </div>
                    ))
                }
                <button className="fancyButton questionButton" onClick={nextQuestion} disabled={isButtonDisabled}>
                    {questionNumberInt < 2 ? 'NEXT' : 'SUMMARY'}
                </button>
            </div>
        </div>
    )
}