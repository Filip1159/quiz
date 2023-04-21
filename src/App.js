import './App.css';
import {SlideComponent} from "./components/SlideComponent";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {QuestionComponent} from "./components/QuestionComponent";
import {ResultSummaryComponent} from "./components/ResultSummaryComponent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/slides/:topic/:slideNumber" element={<SlideComponent />} />
                    <Route exact path="/question/:topic/:questionNumber" element={<QuestionComponent/>} />
                    <Route exact path="/summary" element={<ResultSummaryComponent/>} />
                    <Route path=""/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
