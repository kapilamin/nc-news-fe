import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

export const Header = () => {
    const {loggedInUser} = useContext(UserContext)
    return(
        <>
        <header className="header-container">
            <div className="title-container">
            <h1 className="nc-news">NC News</h1>
            <p>Your daily dose of news!</p>
            </div>
            <nav className="link-container">
                <Link to={"/"} className="header-link">
                    <p>Home</p>
                </Link>
                <Link to={"/ncnews/users"} className="header-link">
                    <p>Users</p>
                </Link>
                <Link to={"/ncnews/topics"} className="header-link">
                    <p>Topics</p>
                </Link>
                <p className="header-link">Login</p>
                <Link className="link" to={"/users"}>
                <h3 id="user">You are signed in as {loggedInUser.username}</h3>
                </Link>
            </nav>
        </header>
        
        </>
    )
}