import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./routes/Home";
import Exchanger from "./routes/Exchanger";
import DND from "./routes/DND";


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/exchanger">
                    <Exchanger />
                </Route>
                <Route path="/dnd/">
                    <DND />
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default Router;