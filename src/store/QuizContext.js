import { createContext, useReducer } from "react";
import { quizReducer } from "./QuizReducer";

export const QuizContext = createContext();

const initialState = {
    responses: [],
    topic: '',
    currentQuestionNumber: 0,
    currentReviewNumber: 0
}

export const QuizContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    );
}
