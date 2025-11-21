import { Link } from "react-router-dom"

export default function Header(){
            return <header>
                <nav classNameNameName="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div classNameNameName="container">
                        <Link classNameNameName="navbar-brand" to="/">My Blog</Link>
                        <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span classNameName="navbar-toggler-icon"></span>
                        </button>
                        <div classNameName="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Posts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
}