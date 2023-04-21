import { createContext, useReducer } from "react";
import { quizReducer } from "./QuizReducer";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(quizReducer, { responses: [], topic: '' });

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    );
}
