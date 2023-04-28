import React, {useContext, useState} from 'react'
import {useNavigate} from "react-router-dom";
import './../styles/QuestionComponent.css'
import './../styles/fancyButton.css'
import {questions} from "../store/QuizData";
import {QuizContext} from "../store/QuizContext";

export const QuestionComponent = ({mode = 'QUESTION'}) => {
    const {dispatch, state: { responses, topic, currentQuestionNumber, currentReviewNumber }} = useContext(QuizContext)
    const navigate = useNavigate()
    const [selectedRadio, setSelectedRadio] = useState(NaN)
    const questionNumber = mode === 'QUESTION' ? currentQuestionNumber : currentReviewNumber
    const question = questions[topic][questionNumber]
    const isButtonDisabled = mode === 'QUESTION' && isNaN(selectedRadio)

    const incrementQuestionNumber = () => {
        const type = mode === 'QUESTION' ? "SET_CURRENT_QUESTION_NUMBER" : "SET_CURRENT_REVIEW_NUMBER"
        dispatch({type, number: questionNumber + 1 })
    }

    const prepareForSummary = () => {
        dispatch({type: "SET_CURRENT_QUESTION_NUMBER", number: null})
    }

    const nextQuestion = () => {
        if (mode === 'QUESTION') {
            dispatch({type: 'ADD_RESPONSE', response: selectedRadio})
            setSelectedRadio(NaN)
            if (questionNumber < 2) {
                incrementQuestionNumber()
            } else {
                prepareForSummary()
                navigate('/summary')
            }
        } else {
            incrementQuestionNumber()
            navigate('/review')
        }
    }

    const createClassNameForRadioWrapper = i => {
        let result = 'radioWrapper'
        if (mode === 'QUESTION') {
            result += ' radioWrapper--question'
        } else {
            result += ' radioWrapper--summary'
            const isSelectedByUser = i === responses[questionNumber]
            const isCorrect = i === question.correct
            if (isCorrect) {
                result += ' radioWrapper--correct'
            } else if (isSelectedByUser) {
                result += ' radioWrapper--incorrect'
            }
        }
        return result
    }

    return (
        <div className="questionComponentWrapper">
            <div className="questionComponent">
                <h1 className="header">{question.text}</h1>
                {
                    question.answers.map((answer, i) => (
                        <div key={i}
                             className={createClassNameForRadioWrapper(i)}
                             onClick={() => setSelectedRadio(i)}>
                            {
                                mode === 'QUESTION'
                                    ?
                                    (
                                        <>
                                            <input name={`radio${i}`} type="radio" checked={selectedRadio === i}
                                                   readOnly/>
                                            <label htmlFor={`radio${i}`}>{answer}</label>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <input name={`radio${i}`} type="radio" checked={responses[questionNumber] === i}
                                                   readOnly/>
                                            <label htmlFor={`radio${i}`}>{answer}</label>
                                        </>
                                    )
                            }
                        </div>
                    ))
                }
                {
                    mode === 'QUESTION' || (mode === 'SUMMARY' && questionNumber < 2)
                        ?
                        <button className="fancyButton questionButton" onClick={nextQuestion} disabled={isButtonDisabled}>
                            {questionNumber < 2 ? 'NEXT' : 'SUMMARY'}
                        </button>
                        :
                        <div className="menuNavigation">
                            <button className="fancyButton" onClick={() => navigate(`/slides/programmer/0`)}>
                                Cechy dobrego programisty
                            </button>
                            <button className="fancyButton" onClick={() => navigate(`/slides/computers/0`)}>
                                Historia komputerów
                            </button>
                            <button className="fancyButton" onClick={() => navigate(`/slides/chess/0`)}>
                                Szachy
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}