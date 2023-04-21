export const quizReducer = (state, action) => {
    switch (action.type) {
        case "DUPA": {
            console.log("dupa")
            return {}
        }
        case "CLEAR":
            return { responses: [] }
        case "ADD_RESPONSE": {
            console.log("ADD_RESPONSE")
            return { ...state, responses: [...state.responses, action.response] }
        }
        default:
            console.log(`No matching case for: ${action.type} inside chatReducer`);
            return state;
    }
}
