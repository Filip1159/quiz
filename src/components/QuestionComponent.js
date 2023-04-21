import React, {useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import './../styles/QuestionComponent.css'
import './../styles/fancyButton.css'
import {questions} from "../store/QuizData";

export const QuestionComponent = () => {
    const {topic, questionNumber} = useParams()
    const [questionNumberInt, setQuestionNumberInt] = useState(parseInt(questionNumber))
    const [buttonText, setButtonText] = useState('NEXT')

    const navigate = useNavigate()
    const [selectedRadio, setSelectedRadio] = useState(NaN)

    const question = questions[topic][questionNumberInt]

    const isButtonDisabled = isNaN(questionNumberInt)

    const nextQuestion = () => {
        if (questionNumberInt < 2) {
            navigate(`/question/${topic}/${questionNumberInt + 1}`)
            setQuestionNumberInt(questionNumberInt + 1)
        } else {
            navigate('/summary')
        }
    }

    return (
        <div className="questionComponent">
            <h1 className="header">{question.text}</h1>
            {
                question.answers.map((answer, i) => (
                    <div className="radioWrapper">
                        <input type="radio" onClick={() => setSelectedRadio(i)}
                               checked={selectedRadio === i}/>
                        <div>{answer}</div>
                    </div>
                ))
            }
            <button className="fancyButton" onClick={nextQuestion} disabled={isButtonDisabled}>
                {buttonText}
            </button>
        </div>
    )
}