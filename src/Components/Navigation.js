import { Link } from "react-router-dom";
import "../Scss/components/_Navigation.scss";

const Navigation = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="navigation">
                        <Link to="/cv">CV</Link>
                        <Link to="/quizz">Quizz</Link>
                        <Link to="/projets">Projets</Link>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navigation;