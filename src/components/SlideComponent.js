import React from 'react'
import './../styles/SlideComponent.css'

export const SlideComponent = () => {
    return (
        <div>
            <h1>Cechy dobrego programisty</h1>
            <img className="slideImg" src="/img/programmer_images/slide1.jpg" alt="slide" />
            <div className="slideNavigation">
                <button className="button">&lt; Previous</button>
                <button className="button">Next &gt;</button>
            </div>
            <div className="menuNavigation">
                <button className="button button--test">TEST</button>
                <button className="button">Cechy dobrego programisty</button>
                <button className="button">Historia komputerów</button>
                <button className="button">Szachy</button>
            </div>
        </div>
    )
}
