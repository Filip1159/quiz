import { createContext, useReducer } from "react";
import { quizReducer } from "./QuizReducer";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(quizReducer, { chats: [], active: 0 });

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    );
}
