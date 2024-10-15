import { Link, BrowserRouter as Router } from "react-router-dom";

function Cabecalho() {
    return (
        <Router>
            <div className="container-header">
                <h1>RACEVOLT</h1>
                <div className="navbar">
                    <nav>
                        <ul className="navlinks">
                            <li>
                                <Link className="active" to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/sobre">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn-login">LOGIN</button>
                </div>
            </div>
        </Router>
    );
}

export default Cabecalho;