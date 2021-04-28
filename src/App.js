import { Route, Redirect } from "react-router-dom";

// Components
import Header from "./components/Layout/Header";

// Pages
import Home from "./pages/home";
import MovieCreation from "./pages/MovieCreation";
import TopMovies from "./pages/TopMovies";

// CSS
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <section className={styles.container}>
                <switch>
                    <Route exact path="/" render={() => <Redirect to="home" />} />
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/create-movie">
                        <MovieCreation />
                    </Route>
                    <Route exact path="/top-movies">
                        <TopMovies />
                    </Route>
                </switch>
            </section>
        </div>
    );
}

export default App;
