import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { NotaPrueba } from './NotaPrueba';

export const AppRouter = () => {
    return (
        <Router>
            <div className="Routers">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Nota" component={NotaPrueba} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}
