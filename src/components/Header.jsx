import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header className="header">
            <nav>
                <Link to={"/"}>
                    <p className="home">Home</p>
                </Link>
                <Link to={"/ncnews/users"}>
                    <p className="users">Users</p>
                </Link>
                <p className="login">Login</p>
            </nav>
            <h1 className="nc-news">NC News</h1>
            <p>Your daily dose of news!</p>
        </header>
    )
}