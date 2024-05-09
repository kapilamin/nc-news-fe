import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

export const Header = () => {
    const {loggedInUser} = useContext(UserContext)
    return(
        <>
        <header className="header-container">
            <div className="title-container">
                <Link to={'/'} className="nc-news-home">
                    <h1>NC News</h1>
                </Link>
            </div>
            <nav className="link-container">
                <Link to={"/"} className="header-link">
                    Home
                </Link>
                <Link to={"/ncnews/users"} className="header-link">
                    Users
                </Link>
                <Link to={"/ncnews/topics"} className="header-link">
                    Topics
                </Link>
                <Link to={"/ncnews/login"}>
                    Login
                </Link>
                <Link className="link" to={"/ncnews/users"}>
                <h3 id="user">You are signed in as </h3>
                <p>{loggedInUser.username}</p>
                </Link>
            </nav>
        </header>
        
        </>
    )
}