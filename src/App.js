import './App.css';
import {SlideComponent} from "./components/SlideComponent";
import {Route, BrowserRouter, Switch} from "react-router-dom";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/slides/programmer">
                        <SlideComponent/>
                    </Route>
                    <Route path=""/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
