import React from 'react';
import { Router} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import history from './history';
import { routes } from "./routes";
class App extends React.PureComponent {
    render() {
        return(
            <div className="App">
                {typeof document !== 'undefined' &&document.body && typeof window !== 'undefined'?
                <Router history={history}>{renderRoutes(routes)}</Router>
                :renderRoutes(routes)}
            </div>
        )
    }
}

export default App;