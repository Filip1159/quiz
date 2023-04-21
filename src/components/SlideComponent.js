import React, {useState} from 'react'
import './../styles/SlideComponent.css'
import './../styles/fancyButton.css'
import {useNavigate, useParams} from "react-router-dom";
import {slides, topics} from "../store/QuizData";

export const SlideComponent = () => {
    const { topic, slideNumber } = useParams();
    const [slideNumberInt, setSlideNumberInt] = useState(parseInt(slideNumber))
    const [topicName, setTopicName] = useState(topic)

    const navigate = useNavigate()

    const header = topics[topicName]
    const imgUrl = slides[topicName][slideNumberInt]

    const isPreviousDisabled = slideNumberInt === 0
    const isNextDisabled = slideNumberInt === slides[topicName]?.length - 1

    const previousSlide = () => {
        setSlideNumberInt(slideNumberInt-1)
        navigate(`/slides/${topicName}/${slideNumberInt-1}`)
    }
    const nextSlide = () => {
        setSlideNumberInt(slideNumberInt+1)
        navigate(`/slides/${topicName}/${slideNumberInt+1}`)
    }

    const changeTopic = newTopic => {
        setTopicName(newTopic)
        setSlideNumberInt(0)
        navigate(`/slides/${newTopic}/0`)
    }

    return (
        <div>
            <h1>{header}</h1>
            <img className="slideImg" src={imgUrl} alt="slide" />
            <div className="slideNavigation">
                <button className="fancyButton" disabled={isPreviousDisabled} onClick={previousSlide}>&lt; Previous</button>
                <button className="fancyButton" disabled={isNextDisabled} onClick={nextSlide}>Next &gt;</button>
            </div>
            <div className="menuNavigation">
                <button className="fancyButton button--test">TEST</button>
                <button className="fancyButton" onClick={() => changeTopic('programmer')}>Cechy dobrego programisty</button>
                <button className="fancyButton" onClick={() => changeTopic('computers')}>Historia komputerów</button>
                <button className="fancyButton" onClick={() => changeTopic('chess')}>Szachy</button>
            </div>
        </div>
    )
}
