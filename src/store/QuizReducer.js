export const quizReducer = (state, action) => {
    switch (action.type) {
        case "DUPA": {
            console.log("dupa")
            return {}
        }
        case "SET_TOPIC": {
            console.log("SET_TOPIC")
            return { ...state, topic: action.topic, responses: [] }
        }
        case "SET_CURRENT_QUESTION_NUMBER": {
            console.log("SET_CURRENT_QUESTION_NUMBER")
            return { ...state, currentReviewNumber: 0, currentQuestionNumber: action.number }
        }
        case "SET_CURRENT_REVIEW_NUMBER": {
            console.log("SET_CURRENT_REVIEW_NUMBER")
            return { ...state, currentQuestionNumber: 0, currentReviewNumber: action.number }
        }
        case "ADD_RESPONSE": {
            console.log("ADD_RESPONSE")
            return { ...state, responses: [...state.responses, action.response] }
        }
        default:
            console.log(`No matching case for: ${action.type} inside chatReducer`);
            return state;
    }
}
