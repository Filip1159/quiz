export const quizReducer = (state, action) => {
    switch (action.type) {
        case "DUPA": {
            console.log("dupa")
            return {}
        }
        case "CLEAR":
            return {}
        default:
            console.log(`No matching case for: ${action.type} inside chatReducer`);
            return state;
    }
}
