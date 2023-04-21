import React, {useEffect, useState} from 'react'
import './../styles/SlideComponent.css'
import {useHistory, useParams} from "react-router-dom";
import {slides, topics} from "../store/QuizData";

export const SlideComponent = () => {
    const { topic, slideNumber } = useParams();
    const [slideNumberInt, setSlideNumberInt] = useState(parseInt(slideNumber))
    const [topicName, setTopicName] = useState(topic)

    const history = useHistory()

    const header = topics[topicName]
    const imgUrl = slides[topicName][slideNumberInt]

    const isPreviousDisabled = slideNumberInt === 0
    const isNextDisabled = slideNumberInt === slides[topicName]?.length - 1

    const previousSlide = () => {
        setSlideNumberInt(slideNumberInt-1)
        history.push(`/slides/${topicName}/${slideNumberInt-1}`)
    }
    const nextSlide = () => {
        setSlideNumberInt(slideNumberInt+1)
        history.push(`/slides/${topicName}/${slideNumberInt+1}`)
    }

    const changeTopic = newTopic => {
        setTopicName(newTopic)
        setSlideNumberInt(0)
        history.push(`/slides/${newTopic}/0`)
    }

    return (
        <div>
            <h1>{header}</h1>
            <img className="slideImg" src={imgUrl} alt="slide" />
            <div className="slideNavigation">
                <button className="button" disabled={isPreviousDisabled} onClick={previousSlide}>&lt; Previous</button>
                <button className="button" disabled={isNextDisabled} onClick={nextSlide}>Next &gt;</button>
            </div>
            <div className="menuNavigation">
                <button className="button button--test">TEST</button>
                <button className="button" onClick={() => changeTopic('programmer')}>Cechy dobrego programisty</button>
                <button className="button" onClick={() => changeTopic('computers')}>Historia komputerów</button>
                <button className="button" onClick={() => changeTopic('chess')}>Szachy</button>
            </div>
        </div>
    )
}
