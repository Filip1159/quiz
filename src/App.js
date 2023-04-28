import {SlideComponent} from "./components/SlideComponent";
import {Route, BrowserRouter, Routes, Navigate} from "react-router-dom";
import {QuestionComponent} from "./components/QuestionComponent";
import {ResultSummaryComponent} from "./components/ResultSummaryComponent";
import {QuizContext} from "./store/QuizContext";
import {useContext} from "react";

function App() {
    const {state: {responses, topic}} = useContext(QuizContext)
    const areAllResponsesGiven = responses.length === 3

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/slides/:topic/:slideNumber" element={<SlideComponent/>}/>
                    <Route exact path="/question" element={
                        topic !== '' ?
                            <QuestionComponent/> :
                            <Navigate to="/"/>
                    }/>
                    <Route exact path="/summary" element={
                        areAllResponsesGiven ?
                            <ResultSummaryComponent/> :
                            <Navigate to="/"/>
                    }/>
                    <Route exact path="/review" element={
                        areAllResponsesGiven ?
                            <QuestionComponent mode='SUMMARY'/> :
                            <Navigate to="/"/>
                    }/>
                    <Route path="*" element={<Navigate to={"/slides/programmer/0"}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
