import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

export const Header = () => {
    const {loggedInUser} = useContext(UserContext)

    return (
        <header className="header-container">
          <div className="user-info">
            <Link to={"/ncnews/users"}>You are signed in as {loggedInUser.username}</Link>
          </div>
          <div className="header-content">
            <Link to={'/'}>
            <h1 className="nc-news-title">NC News</h1>
            </Link>
            <nav className="link-container">
              <Link to={'/'} className="header-link">Home</Link>
              <Link to={"/ncnews/users"} className="header-link">Users</Link>
              <Link to={"/ncnews/topics"} className="header-link">Topics</Link>
              <Link to={"/ncnews/login"} className="header-link">Login</Link>
            </nav>
          </div>
        </header>
      );
}